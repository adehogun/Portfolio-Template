import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { Button } from '@material-tailwind/react';
import { javascript, reactjs, html, nodejs } from '../assets';
import mySql from "../assets/tech/sql.png";
import myMongoDb from "../assets/tech/Mongo.png";
import myGitHub from "../assets/tech/github.png";
import myCss from "../assets/tech/css.png";
import myTailwind from "../assets/tech/tailwind.png";
import myBootStrap from "../assets/tech/bootstrap.png";
import myFigMa from "../assets/tech/figma.png";

const Tech = () => {
  return (
    <div className='tech-container'>
      <div className='items-center'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Tech</p>
          <h2 className={styles.sectionHeadTextLight}>Stacks</h2>
        </motion.div>

        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Button className='bg-yellow-900 flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            JavaScript
            <img src={javascript} alt="js" className='w-8 h-8'/>
          </Button>

          <Button className='bg-blue-900 flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            React
            <img src={reactjs} alt="react" className='w-8 h-8'/>
          </Button>

          <Button className='bg-customOrange flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            HTML
            <img src={html} alt="html" className='w-8 h-8'/>
          </Button>

          <Button className='bg-cyan-500 flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            Nodejs
            <img src={nodejs} alt="nodejs" className='w-8 h-8'/>
          </Button>

          <Button className='bg-customFuchsia flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            SQL
            <img src={mySql} alt="sql" className='w-8 h-8'/>
          </Button>

          <Button className='bg-green-700 flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            MongoDb
            <img src={myMongoDb} className='w-8 h-7 bg-white rounded'/>
          </Button>

          <Button className='bg-customSlate flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            GitHub
            <img src={myGitHub} alt="git" className='w-8 h-8 rounded'/>
          </Button>

          <Button className='bg-blue-700 flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            CSS
            <img src={myCss} alt="css" className='w-8 h-8'/>
          </Button>

          <Button className='bg-customSky flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            Tailwind
            <img src={myTailwind} alt="tailwind" className='w-8 h-8'/>
          </Button>

          <Button className='bg-purple-600 flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            Bootstrap
            <img src={myBootStrap} alt="bootstrap" className='w-8 h-8'/>
          </Button>

          <Button className='bg-red-400 flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10'>
            Figma
            <img src={myFigMa} alt="figma" className='w-8 h-8'/>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-14 hover-name">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              {/* Add technology-related content here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');
