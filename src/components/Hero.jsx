import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import { styles } from '../styles';
import "../index.css"
// import { navLinks } from '../constants';
import bigProfile from "../assets/personal/profile.jpg";

const Hero = () => {
  return (
    <div className='hero-container'>
          <div className='section-wrapper'>
               <h1 className="text-black font-poppins text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Hi, there! <br />
              <span className="text-black font-bold">
                I'm Adewale
              </span>
            </h1>
   <div className='image-wrapper'>
          <img
            src={bigProfile}
            alt="myprofile"
            className=" mt-72 object-cover"
          />
        </div>
            <div className='hero-content-2'>  
              <p className="text-white text-xl sm:text-2xl md:text-3xl animate-bounce">
                <span>Web Full-Stack Developer</span>
              </p>
            </div> 
            
          
      </div>

        {/* <div className="absolute  bg-red-500 bottom-10 md:bottom-16 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[60px] rounded-2xl border-4 border-taupe flex justify-center items-start">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div> */}
          {/* </a> */}
        {/* </div> */}

       
    </div>
  );
};

export default Hero;
