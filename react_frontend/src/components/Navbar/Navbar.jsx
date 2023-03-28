import './Navbar.scss';
import { images } from "../../constants";
import { useState } from 'react';
 
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="#"><img src={images.logo} alt="logo" /></a>
            </div>

            {/* Navbar list  */}
            <ul className="app__navbar-links">
                {['home', 'about', 'work', 'skills', 'contact', 'testimonials'].map((item) => (
                <li key={`link-${item}`} className="app__flex p-text">
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenu onClick={() => setToggle(true)}/>

                {/* if toggle is true, we want to render navigation bar =>() */}
                {toggle && (
                    <motion.div
                    whileInView={{x: [290, 0]}}
                    transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact', 'testimonials'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                            </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;