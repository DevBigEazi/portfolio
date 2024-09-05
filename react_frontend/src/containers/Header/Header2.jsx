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
        <h2>Full-Stack Software Engineer based in Lagos, Nigeria.</h2>
        <p className="p-text">
          I am a full-stack JavaScript/TypeScript engineer with a passion for
          building mobile software using React Native. With 3 years of hands-on
          experience, I have a solid foundation in creating dynamic and
          user-friendly web and mobile applications. My expertise includes
          collaborating with cross-functional teams to develop and enhance both
          mobile and web apps, ensuring smooth functionality and delivering an
          optimal user experience. <br />
          My role as a software engineer at Celo Africa DAO allowed me to engage
          with the web3 community, participate in DAO governance, and stay
          updated with emerging technologies on the Celo Blockchain and other
          EVM chains. I am passionate about leveraging my skills to contribute
          to the success of a progressive organization in either the web2 or
          web3 space.
        </p>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header2, "home");
