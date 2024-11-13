import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,

} from '../assets';

import myFreelance from "../assets/company/freelancer.png"


import myPic from "../assets/company/mypic.png";

import myOlic from "../assets/projects/olic.png";

import { textVariant } from '../utils/motion';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Databases',
    icon: frontend, 
    
  },
  {
    title: 'Frontend',
    icon: backend,
  },
  {
    title: 'Backend',
    icon: ux,
  },
  {
    title: 'Restful APIs',
    icon: prototyping,
  },

  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html, 
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];



const experiences = [
  {
    title: 'Web App Developer',
    company_name: 'Freelance',
    icon: myFreelance,
    iconBg: '#333333',
    date: 'Jun 2024 - till date',
  },
  {
    title: 'Learning Program Designer',
    company_name: 'Frankfurt School of Finance and Management',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2021 - Oct 2023',
  },
  {
    title: 'Consultant – Safeguards Training E-Learning',
    company_name: 'International Atomic Energy Agency',
    icon: microverse,
    iconBg: '#333333',
    date: 'Feb 2021 - Sept 2021',
    dateStyle: { margin: '10px 0' }, // add your margin here
  },
    
  {
    title: 'E-learning Designer',
    company_name: 'Freelance',
    icon: myPic,
    iconBg: '#333333',
    date: 'Aug 2020 - Jan 2021',
  },
  {
    title: 'Business Consultant',
    company_name: 'IMC AG',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2021 - Jul 2020',
  },
  { title: 'E-learning Developer',
    company_name: 'Robert Bosch',
    icon: kelhel,
    iconBg: '##0891b2',
    date: 'Sep 2018 - Feb 2019',
    
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Olic',
    description: 'A small online shop built with React listing shopping items according to gender categories with a checkout route using stripe.',
    image: myOlic,
    repo: 'https://github.com/adehogun/olic.git',
    demo: 'https://myportfolio-1-cn9f.onrender.com/.',
  },
  {
    id: 'project-2',
    name: 'BreatitDown',
    description:
      'A project management tool designed as a web application, optimized for responsiveness on both tablets and desktops. It enables teams to collaborate effectively and streamline their production processes. The application emphasizes an appealing design to offer a unique user experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/codeUWE/breakItDown.git',
    demo: 'https://breakitdown.onrender.com/',
  },
  
  
];

export { services, technologies, experiences, projects };
