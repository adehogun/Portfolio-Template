import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { leaderboard, komikult, pineapple, pineappleHover } from '../assets';
import myOlic from "../assets/projects/olic.png";

import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import SerenaWebpage from "../assets/personal/simple_web.png";



const Projects = () => {
  // const [active, setActive] = useState('project-2');

  return (

    <div id='projects' className="project-container">
      <motion.div variants={textVariant()}>
        <div className='flex justify-center'>
           {/* <p className={`${styles.sectionSubText} `}>Case Studies</p> */}
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
        </div>
       
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-full sm:max-w-2xl md:max-w-3xl leading-[24px] sm:leading-[26px] md:leading-[28px]">
         These projects highlight my expertise through practical examples of my work, featuring concise descriptions along with links to code repositories and live demos.
          They demonstrate my ability to solve complex problems, adapt to different technologies, and manage projects effectively.
        </motion.p>
      </div>

      
    <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col lg:flex-row min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] gap-4 sm:gap-5 
      mb-10 sm:mb-16 md:mb-20 lg:mb-24">
      {/* {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          index={index}
          {...project}
          active={active}
          handleClick={setActive}
        />
      ))} */}

      <div className='portfolio-container'> 

        <div className='portfolio-1-container'>
          <img src={leaderboard}
          
           alt="break it down" />
              
            <div className='description-container'>
              
              <div className='header-container'>
                    <h3 className='text-3xl font-semibold flex justify-start'>Break It Down</h3>
              </div>
          
          <div className='text-xs content-container mt-2'>
  <p className='text-xs text-black p-2'>
  BreakitDown is a full-stack project management tool designed to enhance teamwork, improve agility, and streamline project delivery. It provides project owners with an overview of all project tasks and allows for task assignment based on team member requests. Additionally, it facilitates knowledge sharing among team members, ensuring everyone has the necessary information for each project.
              </p>
          </div>
            
          
           
            
        
<div className='button-container text-sm '>
<button className='hover:bg-black active:bg-black'> 
  <a href='https://github.com/codeUWE/breakItDown'target="_blank" rel="noopener noreferrer">
     <h2 className='text-white  '>Live Code</h2>
  </a>
 
</button>
<button className='hover:bg-black active:bg-black'>
  <a href="https://breakitdown.onrender.com/" target="_blank" rel="noopener noreferrer">
<h2 className='text-white'>View</h2>

  </a>

</button>


</div>
        </div>

        <div className='portfolio-2-container'>
          <img src={myOlic}
          
           alt=" olic" />

<div className='description-container'>
              
              <div className='header-container'>
                    <h3 className='text-3xl font-semibold flex justify-start'>Olic</h3>
              </div>
          
          <div className='text-xs content-container mt-2'>
  <p className='text-xs text-black p-2'>
  Olic is a full-stack shopping platform where users can browse and purchase a variety of clothing and footwear. It offers convenient filtering options by price and gender, along with a secure payment gateway that accepts credit card transactions.
              </p>
          </div>
            
          
           
            
            </div>
    </div>
<div className='button-container text-sm'>
<button className='hover:bg-black active:bg-black'>
  <a href="https://github.com/adehogun/olic" target="_blank" rel="noopener noreferrer">

    <h2 className='text-white  '>Live Code</h2>
  </a>
              
            </button>
            <button className='hover:bg-black active:bg-black'>
              <a href="https://myportfolio-1-cn9f.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <h2 className='text-white  '>View</h2>
              </a>
         
           </button>

        
</div>


             
           </div>
           <div className='website-project-container mb-2 flex justify-center p-6'>
          <p>Simple Website Project</p>

          <img src={SerenaWebpage} alt="simple web project" />

          <div className='button-container text-sm'>
             <button className='hover:bg-black active:bg-black'>
  <a href="https://serenahart.de/" target="_blank" rel="noopener noreferrer">
<p className='text-white font-bold'>View</p>

  </a>

</button> 
          </div>

           </div>
         
        </div> 
        
      </div>
 
 
  </div>
 
   
  );
};

export default Projects;
