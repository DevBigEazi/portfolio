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
        className="app__header-info"
      >
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
        className="app__header-img"
      >
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
        className="app__header-circles"
      >
        <h2>Software Developer based in Lagos, Nigeria.</h2>
        <p className="p-text">
          I am a passionate software developer, who creates responsive websites
          and high-performing applications to solve problems and make life
          easier. I also enjoy teaching and mentoring beginners in coding.
          <br />
          This is my personal blog, where I focus mainly on business topics that
          are tech related. If you want to have a website for an online or
          physical business and other life activities, this blog is for you. Be
          free to check some amazing contents on my webpage...
        </p>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header2, "home");
