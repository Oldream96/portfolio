import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Oldream-Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Bienvenidos!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Diego Contreras',
  subtitle: 'I\'m Semi-Senior Software Developer',
  cta: 'Know more!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I\'m a Semi-Senior Software Developer with a solid experience developing different software solutions for different clients in Peru.I have had the opportunity to work in products focused on the business and electrical sector',
  paragraphTwo: 'I have worked with diferents tecnologies and providers throughout my career profesional',
  paragraphThree: 'I\'m a fast learner who loves researching the latest javaScript trends. I\' a excellent team worker and leader',
  resume: 'https://www.linkedin.com/in/diego-contreras-felix-7708a0108/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hatun.jpg',
    title: 'Hatun Créditos',
    info: 'Working with tecnologies as JavaScript, MVC.Net, ASP.Net, JQuery, SQLServer and Mobile develop with Java',
    info2: '',
    url: 'https://hatun.com.pe/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'distriluz1.jpg',
    title: 'Distriluz Iniciativas',
    info: 'Working with tecnologies as TypeScript, Angular, NetCore(2 & 3), Oracle and SQLServer',
    info2: '',
    url: 'https://www.distriluz.com.pe/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'distriluz2.jpg',
    title: 'Distriluz NGC Interfaz GIS',
    info: 'Working with tecnologies as GoogleMaps, TypeScript, Angular, NetCore(2 & 3), Oracle and SQLServer',
    info2: '',
    url: 'https://www.distriluz.com.pe/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact me!',
  email: 'diegocont18@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/oldream96',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/oldream96/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/diego-contreras-felix-7708a0108/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Oldream96',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
