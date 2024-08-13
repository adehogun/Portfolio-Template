import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { Button } from '@material-tailwind/react';

const Tech = () => {
  return (
    <div className='items-center'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Tech</p>
        <h2 className={styles.sectionHeadTextLight}>Stacks</h2>
      </motion.div>
      
      <div className="w-full h-full grid grid-cols-4 gap-2 mb-[10px] mr-[10px]">
  <div>
    <Button className='bg-yellow-900 flex justify-between ' style={{textTransform: "none", width: "60%", height: "3rem"}}>JavaScript
    <img src="./src/assets/tech/javascript.png" alt="js" className='w-8 h-8'/>
    </Button>
    
  </div>
 
  <div>
    <Button className='bg-blue-900 flex justify-between' style={{textTransform: "none", width: "60%", height: "3rem"}}>React
    <img src="./src/assets/tech/reactjs.png" alt="react" className='w-8 h-8  '/>
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-customOrange'  style={{textTransform: "none", width: "60%", height: "3rem"}}>HTML
    <img src="./src/assets/tech/html.png" alt="html" className='w-8 h-8  '/>
    
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-cyan-500' style={{textTransform: "none", width: "60%", height: "3rem"}}>Nodejs
    <img src="./src/assets/tech/nodejs.png" alt="nodejs" className='w-8 h-8  '/>
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-customFuchsia' style={{textTransform: "none", width: "60%", height: "3rem"}}>SQL
    <img src="./src/assets/tech/sql.png" alt="sql" className='w-8 h-8  '/>
    </Button>
  </div>


  <div>
    <Button className='flex justify-between bg-green-700' style={{textTransform: "none", width: "60%", height: "3rem"}}>MongoDb
    <img src="./src/assets/tech/db.png" alt="mongoDb" className='w-8 h-7 bg-white rounded  '/>
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-customSlate' style={{textTransform: "none", width: "60%", height: "3rem"}}>GitHub
    <img src="./src/assets/tech/github.png" alt="git" className='w-8 h-8 rounded '/>

    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-blue-700'  style={{textTransform: "none", width: "60%", height: "3rem"}}>CSS
    <img src="./src/assets/tech/css.png" alt="css" className='w-8 h-8  '/>
    
    
    </Button>
  </div>

  <div>
    <Button className='flex justify-between bg-customSky' style={{textTransform: "none", width: "60%", height: "3rem"}}>Tailwind
    <img src="./src/assets/tech/tailwind.png" alt="tailwind" className='w-8 h-8  '/>
    
    </Button>
  </div>

  <div>
    <Button  className='flex justify-between bg-purple-600' style={{textTransform: "none", width: "60%", height: "3rem"}}>Bootstrap
    <img src="./src/assets/tech/bootstrap.png" alt="bootstrap" className='w-8 h-8  '/>
    </Button>
  </div>

  <div>
    <Button  className='flex justify-between bg-red-400' style={{textTransform: "none", width: "60%", height: "3rem"}}>Figma
    <img src="./src/assets/tech/figma.png" alt="figma" className='w-8 h-8  '/>
    
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
  );
};

export default SectionWrapper(Tech, '');
