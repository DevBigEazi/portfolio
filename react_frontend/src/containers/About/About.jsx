import './About.scss';

import { client, urlFor } from '../../sanitySetUp';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import AppWrap from '../../AppWrapper/AppWrap';
// import { images } from '../../constants';

//this is a static data...we dont need it after we have connected the abouts to the sanity backend
// const abouts = [
//     {
//         title: 'Frontend Development', 
//         discreption: 'I design staggering and responsive websites and app with updated web technologies such as; HTML, CSS, JavaScript, ReactJs and more.', 
//         imgUrl: images.about01
//     },
//     {
//         title: 'Backend Development', 
//         discreption: 'I am a skillfull backend developer with enough experience about the newest technologies such as NodeJs, MongoDb, Sanity.io, and more.',
//         imgUrl: images.about02
//     },
//     {
//         title: 'MERN Stack', 
//         discreption: 'I will ensure that your product makes sense to the users by creating a path that logically flows from one step to the next, using the MERN stack technologies.', 
//         imgUrl: images.about03
//     },
//     {
//         title: 'Mobile App Development', 
//         discreption: 'With React Native, I also develop mobile applications that are centered upon solving every days difficult problems with minimal errors.', 
//         imgUrl: images.about04
//     }
// ]

const About = () => {

    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        const query = '*[_type == "abouts"]';
    
        client.fetch(query)
        .then((data) => setAbouts(data))
      }, []);

    return (
        <>
            <h2 className='head-text'>I believe <span>Good Delivery</span><br />means <span>Good Business</span></h2>

            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className='app__profiles-item'
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className='bold-text' style={{marginTop: 20}}>
                            {about.title}
                        </h2>
                        <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>
                ))}

            </div>
        </>
    )
}

export default AppWrap(About, 'about');