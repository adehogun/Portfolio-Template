import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import myJourney from "../assets/icons/journey.png";
import myDigital_Reality from "../assets/icons/digital_reality.png";
import myHiking from "../assets/icons/hiking.png";
import mySkating from "../assets/icons/skating.png";
import myCooking from "../assets/icons/cooking.png";
import myBuild from "../assets/icons/build.png";
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
    
      <div
        
        className="bg-jetLight rounded-[5px]  min-h-[130px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-20 h-16 object-contain" />
        
        <h3 className="text-black text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
  
  );
};

const About = () => {
  return (
    <div className="about-container">
        <div className='text-black header'>
        <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadTextLightAbout}`}>About</h2>
        </motion.div>
        </div>

      <div className='section journey text-black'>
      <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-full sm:max-w-2xl md:max-w-3xl leading-[24px] sm:leading-[26px] md:leading-[28px]">
        <img src={myJourney} 
        alt="Journey Icon" className='icon'/>
      <h2 className='text-black'>The Journey Begins</h2>
      <p>Before diving into full-stack development, I was captivated by coding's ability to bring ideas to life. Moving from curious beginner to full-stack developer has been an adventure that taught me the endless potential of technology.</p>
  
       </motion.p>

      </div>
      
 <div className="text-black section digital-reality">
 <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-full sm:max-w-2xl md:max-w-3xl leading-[24px] sm:leading-[26px] md:leading-[28px]">
      
      
    <img src={myDigital_Reality} 
    alt="Digital Reality Icon" className="icon"/>
    <h2>From Idea to Digital Reality</h2>
    <p>Each project is a new story—an opportunity to merge creativity with functionality, turning abstract concepts into interactive experiences.</p>
    </motion.p>
  </div>



  <div className="section hobbies text-black">
    
    <div className="hobby">
    <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-full sm:max-w-2xl md:max-w-3xl leading-[24px] sm:leading-[26px] md:leading-[28px]">
      
      
      <img src={myHiking} alt="Hiking Icon" className="icon"/>
      <h3>Hiking</h3>
      <p>Exploring trails, finding calm in the outdoors.</p>
      </motion.p>
    </div>

    <div className="hobby">
    <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-full sm:max-w-2xl md:max-w-3xl leading-[24px] sm:leading-[26px] md:leading-[28px]">
      
      <img src={mySkating} alt="Skating Icon" className="icon"/>
      <h3>Skating</h3>
      <p>The freedom of gliding along is pure inspiration.</p>
      </motion.p>
    </div>

    <div className="hobby">
    <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-full sm:max-w-2xl md:max-w-3xl leading-[24px] sm:leading-[26px] md:leading-[28px]">
      
      <img src={myCooking} alt="Cooking Icon" className="icon"/>
      <h3>Cooking</h3>
      <p>Experimenting with flavors is like coding, but tastier!</p>
      </motion.p>
    </div>
    
  </div>


  <div className="section build-together">
  <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-full sm:max-w-2xl md:max-w-3xl leading-[24px] sm:leading-[26px] md:leading-[28px]">
      
    <img src={myBuild} 
    alt="Build Together Icon" 
    className="icon"/>
    <h2>Let's Build Together</h2>
    <p>These experiences remind me to keep things fresh, curious, and human-centered. Each project is a blend of professional skills and personal creativity. Let's create something exceptional together!</p>
    </motion.p>
  </div>

      {/* <div className="flex justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
     
    </div>
  );
};

export default SectionWrapper(About, 'about');
