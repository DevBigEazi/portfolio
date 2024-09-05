import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="http://github.com/devbigeazi" target="_blank" rel="noopener noreferrer">
        <div>
          <FaGithub />
        </div>
      </a>
      <a href="https://x.com/iambigeazi" target="_blank" rel="noopener noreferrer">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://linkedin.com/in/isiaqtajudeen" target="_blank" rel="noopener noreferrer">
        <div>
          <CiLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
