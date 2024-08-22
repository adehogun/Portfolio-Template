import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
// import {
//   Collapse,
//   Button,
//   Card,
//   Typography,
//   CardBody,
// } from "@material-tailwind/react";

// const [open, setOpen] = React.useState(false);
 
// const toggleOpen = () => setOpen((cur) => !cur);

const ServiceCard = ({ index, title, icon }) => {
  return (
    
    <motion.div
      variants={fadeIn('right', 'spring', 0.2 * index, 0.85)}
      className="xs:w-[150px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 4,
          speed: 450,
        }}
        className="bg-jetLight rounded-[5px]  min-h-[130px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-20 h-16 object-contain" />
        
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        {/* <h2 className={styles.sectionHeadText}>Overview.</h2> */}
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-black text-[18px] max-w-3xl leading-[30px]">
       Before I got into full-stack web and app development, I have been always fascinated by how coding could turn my ideas into digital reality. The journey from being a newbie to becoming a full-stack developer has been an amazing ride. When I’m not coding, I love hiking, skating, and cooking—they’re my go-to ways to unwind and get inspired.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* <button>open</button> */}
    </div>
  );
};

export default SectionWrapper(About, 'about');
