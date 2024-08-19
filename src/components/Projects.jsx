import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, komikult, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[150px] sm:min-w-[170px] md:min-w-[200px] 
      min-h-[280px] sm:min-h-[320px] md:min-h-[360px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      {active !== id ? (
        <div className="flex items-center justify-start pr-[1rem] sm:pr-[2rem] md:pr-[2.5rem]">
   
          <h3
            className="font-extrabold font-beckman uppercase w-[120px] sm:w-[150px] md:w-[180px] h-[20px] sm:h-[24px] md:h-[28px]
        whitespace-nowrap text-[14px] sm:text-[16px] md:text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[3rem] sm:bottom-[4rem] md:bottom-[5rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20 mb-20">
            {name}
          </h3>
         
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-4 sm:p-6 md:p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <div className="absolute inset-0 flex justify-end m-2 sm:m-3">
              
              <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  opacity-[0.8] sm:opacity-[0.9]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold text-[18px] sm:text-[22px] md:text-[26px] 
              text-timberWolf uppercase font-beckman mt-[-0.5rem] sm:mt-[-0.75rem]">
              {name}
            </h2>
            <p
              className="text-silver text-[10px] sm:text-[12px] 
              max-w-full sm:max-w-3xl leading-[14px] sm:leading-[18px] md:leading-[20px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              text-[10px] sm:text-[12px] md:text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-3 
              whitespace-nowrap gap-1 sm:w-[100px] md:w-[120px] h-[30px] sm:h-[35px] md:h-[40px] 
              rounded-[6px] sm:rounded-[8px] md:rounded-[10px] glassmorphism 
              mt-[8px] sm:mt-[12px] md:mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon w-[24px] sm:w-[28px] md:w-[30px] 
                  h-[24px] sm:h-[28px] md:h-[30px] object-contain"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="relative px-4 sm:px-6 md:px-8">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-full sm:max-w-2xl md:max-w-3xl leading-[24px] sm:leading-[26px] md:leading-[28px]">
         These projects highlight my expertise through practical examples of my work, featuring concise descriptions along with links to code repositories and live demos.
          They demonstrate my ability to solve complex problems, adapt to different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[20px] sm:mt-[30px] md:mt-[40px] flex flex-col lg:flex-row min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] gap-4 sm:gap-5 
          mb-10 sm:mb-16 md:mb-20 lg:mb-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
