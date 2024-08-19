import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { Button } from '@material-tailwind/react';
import { javascript, reactjs, html, nodejs} from '../assets';
import mySql from "../assets/tech/sql.png";
import myMongoDb from "../assets/tech/Mongo.png";
import myGitHub from "../assets/tech/github.png"
import myCss from "../assets/tech/css.png";
import myTailwind from "../assets/tech/tailwind.png";
import myBootStrap from "../assets/tech/bootstrap.png";
import myFigMa from "../assets/tech/figma.png";


const Tech = () => {
  return (

    <div className='tech-container'>
      <div className='items-center'>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubTextLight}>Tech</p>
        <h2 className={styles.sectionHeadTextLight}>Stacks</h2>
      </motion.div>
      
      <div className="w-full h-full grid grid-cols-4 gap-2 mb-[10px] mr-[10px] tech-items-wrapper">
  <div>
    <Button className='bg-yellow-900 flex justify-between ' style={{textTransform: "none", width: "90%", height: "6rem"}}>JavaScript
    <img src={javascript} alt="js" className='w-8 h-8'/>
    </Button>
    
  </div>
 
  <div>
    <Button className='bg-blue-900 flex justify-between' style={{textTransform: "none", width: "90%", height: "6rem"}}>React
    <img src={reactjs} alt="react" className='w-8 h-8  '/>
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-customOrange'  style={{textTransform: "none", width: "90%", height: "6rem"}}>HTML
    <img src={html} alt="html" className='w-8 h-8  '/>
    
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-cyan-500' style={{textTransform: "none", width: "90%", height: "6rem"}}>Nodejs
    <img src={nodejs} alt="nodejs" className='w-8 h-8  '/>
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-customFuchsia' style={{textTransform: "none", width: "90%", height: "6rem"}}>SQL
    <img src={mySql} alt="sql" className='w-8 h-8  '/>
    </Button>
  </div>


  <div>
    <Button className='flex justify-between bg-green-700' style={{textTransform: "none", width: "90%", height: "6rem"}}>MongoDb
    <img src={myMongoDb} className='w-8 h-7 bg-white rounded  '/>
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-customSlate' style={{textTransform: "none", width: "90%", height: "6rem"}}>GitHub
    <img src={myGitHub} alt="git" className='w-8 h-8 rounded '/>

    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-blue-700'  style={{textTransform: "none", width: "90%", height: "6rem"}}>CSS
    <img src={myCss} alt="css" className='w-8 h-8  '/>
    
    
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-customSky' style={{textTransform: "none", width: "90%", height: "6rem"}}>Tailwind
    <img src={myTailwind} alt="tailwind" className='w-8 h-8  '/>
    
    </Button>
  </div>

  <div>
    <Button  className='flex justify-between bg-purple-600' style={{textTransform: "none", width: "90%", height: "6rem"}}>Bootstrap
    <img src={myBootStrap} alt="bootstrap" className='w-8 h-8  '/>
    </Button>
  </div>

  <div>
    <Button  className='flex justify-between bg-red-400' style={{textTransform: "none", width: "90%", height: "6rem"}}>Figma
    <img src={myFigMa} alt="figma" className='w-8 h-8  '/>
    
    </Button>
  </div>

</div>




      <div className="flex flex-wrap justify-center gap-10 mt-14 hover-name">
       
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* <BallCanvas icon={technology.icon}  />  */}
             
         </div>
        ))}
     </div> 

      
    </div>
    </div>
    
  );
};

export default SectionWrapper(Tech, '');
