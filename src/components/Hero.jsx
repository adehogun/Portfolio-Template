import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { styles } from '../styles';
// import "../index.css"
// import { navLinks } from '../constants';
import bigProfile from "../assets/personal/profile.jpg";


const Hero = () => {
  return (
    <div className='relative flex items-center justify-center'>
    {/* Background Image */}
    <div className="absolute top-0 left-0 z-0 w-full h-full">
      {/* <img
        src="./src/assets/backgrounds/jeremy.jpg"
        alt="world map"
        className="object-cover w-full h-full"
      /> */}
    </div>
    
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center ml-3">
            {/* <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" /> */}
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="text-center px-4 sm:px-6 md:px-8">
  <h1
    className="text-white font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
    Hi, there! <br />
    <span className="text-gray-400 font-bold">
      I'm {' '}Adewale
      
    </span>
  </h1>
  <div className="mt-10 text-center bg-red-500 py-2 px-4 rounded-lg">
    <p className="text-white text-2xl sm:text-2xl md:text-3xl animate-bounce">
      <span>Web Full-Stack Developer</span>
    </p>
  </div>
</div>

          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div> </div>


        

        <div className="absolute bottom-10 md:bottom-16 w-full flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[60px] rounded-2xl border-4 border-taupe flex justify-center items-start">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div className='flex justify-end items-center'>
    <img
        src={bigProfile}
        alt="myprofile" 
        className=" mt-72 object-cover"/>
</div>


      </section>
    </div>
  );
};

export default Hero;