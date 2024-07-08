import "./Header.scss";

import AppWrap from "../../AppWrapper/AppWrap";
import { motion } from "framer-motion";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header2 = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi, I am</p>
              <h1 className="head-text">Isiaq</h1>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
        <img src={images.profile} alt="photo of Isiaq" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles">
        <h2>Software Developer based in Lagos, Nigeria.</h2>
        <p className="p-text">
          I am a full stack JavaScript/TypeScript developer specializing in web
          development with 3 years of practical experience. I have a strong
          foundation in creating dynamic and user-friendly applications, with
          expertise in both front-end and back-end development. <br /> My
          experience includes collaborating with teams to develop and enhance
          websites using modern technologies, ensuring smooth functionality and
          an optimal user experience. <br />
          My role as a Junior Dev Ambassador at Celo Africa DAO allowed me to
          engage with the web3 community, participate in DAO governance, and
          stay updated with emerging technologies on the Celo Blockchain. I am
          passionate about leveraging my skills to contribute to the success of
          a progressive organization in either the web2 or web3 space.
        </p>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header2, "home");
