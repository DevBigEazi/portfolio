import "./Testimonials.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor, client } from "../../sanitySetUp";
import { AppWrap, MotionWrap } from "../../AppWrapper";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const test = testimonials[index];

  return (
    <>
      {testimonials.length && (
        <>
          <h2 className="head-text">Testimonials</h2>
          <div className="app__testimonials-items app__flex">
            <img src={urlFor(test.imgUrl)} alt={test.name} />
            <div>
              <p className="p-text">{`"${test.feedback}"`}</p>
              <h4 className="bold-text">{test.name}</h4>
              <small className="p-text">{test.profession}</small>
            </div>
          </div>

          <div className="testimonials-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(index === 0 ? testimonials.length - 1 : index - 1)
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(index === testimonials.length - 1 ? 0 : index + 1)
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "testimonials",
  "app__primarybg"
);
