import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';
import myCv from "../assets/company/mycv.png";
// import ogunfusika from "../assets";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      
    }}
    contentArrowStyle={{
      borderRight: '10px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-black text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-indigo-800 text-[32px] font-bold font-beckman tracking-[2px]" style={{textTransform: "none"}}>
        {experience.title}
      </h3>
      <p
        className="text-black text-[22px]tracking-[1px]"
        style={{ margin: 0 , textTransform: "none"}}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);


const Experience = () => {
  return (
    <div className='flex items-center'>
      {/* <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div> */}

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}  />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '',
              color: '#',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={myCv}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
          <button
  className="text-black font-bold"
  onClick={() =>
    window.open(
      'cv_ogunfusika.pdf', // paste the link to your resume here
      '_blank'
    )
  }
  onMouseOver={() => {
    document
      .querySelector('.download-btn')
      .setAttribute('src', downloadHover);
  }}
  onMouseOut={() => {
    document
      .querySelector('.download-btn')
      .setAttribute('src', download);
  }}>
  MY RESUME
  <img
    src={download}
    alt="download"
    className="download-btn w-[24px] h-[24px] 
                object-contain"
  />
</button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'work');
