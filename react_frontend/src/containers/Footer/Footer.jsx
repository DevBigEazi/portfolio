import "./Footer.scss";
import { AppWrap, MotionWrap } from "../../AppWrapper";
import { images } from "../../constants";

import { useState } from "react";
import { client } from "../../sanitySetUp";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  const date = new Date();
  const currentYear = date.getFullYear();
  console.log(currentYear);

  return (
    <>
      <h1 className="header-text">Connect With Me</h1>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:adesholatajudeen1@gmail.com" className="p-text">
            adesholatajudeen1@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="mobile" />
          <a href="tel:+234 814 (599) 1080" className="p-text">
            +234 814 (599) 1080
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              name="message"
              required
              value={message}
              placeholder="Your Message"
              onChange={handleChangeInput}
            />
          </div>
          <button className="p-text">
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h1 className="head-text" style={{ color: "green" }}>
            Thank You For Getting In Touch
          </h1>
        </div>
      )}

      <div className="copyright">
        <p className="p-text">Copyright &copy; {currentYear} DevBigEazi.</p>
        <p className="p-text">All right reserved.</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
