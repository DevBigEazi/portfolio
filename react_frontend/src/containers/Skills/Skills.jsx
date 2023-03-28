import './Skills.scss';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactTooltip } from 'react-tooltip';

import AppWrap  from '../../AppWrapper/AppWrap';
import { urlFor, client } from '../../sanitySetUp';

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [experience, setExperience] = useState([])

    useEffect(() => {
        const ExperienceQuery = '*[_type == "experience"]'
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(ExperienceQuery)
        .then(data => {
            setExperience(data)
        })

        client.fetch(skillsQuery)
        .then(data => {
            setSkills(data)
        })
    }, [])

    return (
        <>
            <h1 className="head-text">Skills & Experience</h1>

            <div className="app__skills-container">
                <motion.div className='app__skills-list'>
                    {skills.map((skill) => (
                        <motion.div
                            className='app__skills-items app__flex'
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            key={skill.name}
                        >
                            <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>

                        </motion.div>

                    ))}
                </motion.div>

                <motion.div className='app__skills-experience'>
                    {experience.work.map((work) => (
                        <>
                    
                        </>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(Skills, 'skills');