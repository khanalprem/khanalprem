import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoHomeOutline,
  IoPersonOutline,
  IoDocumentTextOutline,
  IoCodeWorking,
  IoPersonAddOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoMailUnreadOutline,
  IoCalendarOutline,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoWordpress,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoFigma,
  IoLogoNodejs,
} from 'react-icons/io5';

import profileImg from '../assets/images/profile.jpg';
import aboutImg from '../assets/images/about-cv.jpg';
import fieldsight from '../assets/images/fieldsight.png';
import Geodetic from '../assets/images/geodetic.png';
import Geoportal from '../assets/images/geoportal_update.png';
import Sakshyam from '../assets/images/sakchyam.png';
import Zite from '../assets/images/ZITE.png';
import Pdra from '../assets/images/pdra.png';
import Geonadir from '../assets/images/geonadir.png';

const PmcvData = [
  {
    id: 1,
    name: 'home info',
    img: profileImg,
    heading: 'Prem Prasad khanal',
    desination: 'Sr.Frontend Developer',
  },
  {
    id: 2,
    name: 'menu',
    menuItems: [
      {
        id: 1,
        name: 'home',
        to: '/',
        icon: <IoHomeOutline />,
      },
      {
        id: 2,
        name: 'about',
        to: '/about',
        icon: <IoPersonOutline />,
      },
      {
        id: 3,
        name: 'resume',
        to: '/resume',
        icon: <IoDocumentTextOutline />,
      },
      {
        id: 4,
        name: 'works',
        to: '/works',
        icon: <IoCodeWorking />,
      },

      {
        id: 7,
        name: 'contact',
        to: '/contact',
        icon: <IoPersonAddOutline />,
      },
    ],
  },
  {
    id: 3,
    name: 'social icons',
    icons: [
      {
        iconUrl: 'https://www.facebook.com/khnl.prem',
        icon: <IoLogoFacebook />,
      },
      {
        iconUrl: 'https://www.linkedin.com/in/prem-prasad-khanal-6115b115a/',
        icon: <IoLogoTwitter />,
      },
      {
        iconUrl: 'https://www.linkedin.com/in/prem-prasad-khanal-6115b115a/',
        icon: <IoLogoLinkedin />,
      },
      {
        iconUrl: 'https://www.facebook.com/khnl.prem',
        icon: <IoLogoInstagram />,
      },
    ],
  },

  {
    id: 4,
    name: 'about',
    img: aboutImg,
    title: 'who am i?',
    infoTitle: 'Personal Info',
    skillsTitle: 'Skills',
    desc: [
      {
        id: 1,
        content:
          'Hi! I am a Sr. Web Designer  with more than 8 years of experience designing intriguing interface for web. Building state-of-the-art , easy to use , user-friendly websites is truly a passion of mine .  I enjoy turning complex problems into simple, beautiful and intuitive designs.',
      },
      {
        id: 2,
        content:
          'My aim is to bring across your message and identity in the most creative way. I created web design and develovement for many famous brand companies.',
      },
    ],
    contactCard: [
      {
        id: 1,
        icon: <IoPhonePortraitOutline />,
        iconName: 'phone',
        contactText: '9856055360',
      },
      {
        id: 2,
        icon: <IoLocationOutline />,
        iconName: 'location',
        contactText: 'Syangja, Nepal',
      },
      {
        id: 3,
        icon: <IoMailUnreadOutline />,
        iconName: 'Email',
        contactText: 'khnl.prem@gmail.com',
      },
      {
        id: 4,
        icon: <IoCalendarOutline />,
        iconName: 'Birth Day',
        contactText: 'Feb 14, 2090',
      },
    ],
  },
  {
    id: 5,
    name: 'skills',
    skillCards: [
      {
        id: 1,
        icon: <IoLogoHtml5 />,
        iconName: 'HTML',
      },
      {
        id: 2,
        icon: <IoLogoCss3 />,
        iconName: 'Css3',
      },
      {
        id: 3,
        icon: <IoLogoSass />,
        iconName: 'Sass',
      },
      {
        id: 4,
        icon: <IoLogoNodejs />,
        iconName: 'Jquery',
      },
      {
        id: 5,
        icon: <IoLogoJavascript />,
        iconName: 'Javascript',
      },
      {
        id: 6,
        icon: <IoLogoReact />,
        iconName: 'React',
      },
      {
        id: 7,
        icon: <IoLogoFigma />,
        iconName: 'Figma',
      },
      {
        id: 8,
        icon: <IoLogoFigma />,
        iconName: 'Adobe XD',
      },
      {
        id: 9,
        icon: <IoLogoWordpress />,
        iconName: 'Wordpress',
      },
      {
        id: 10,
        icon: <IoLogoGithub />,
        iconName: 'Github',
      },
      {
        id: 11,
        icon: <IoLogoGitlab />,
        iconName: 'Gitlab',
      },
    ],
  },
  {
    id: 7,
    name: 'resume',
    resumeTitle: 'Resume',
    eduTitle: 'Education',
    exTitle: 'Experience',
    eduCards: [
      {
        id: 1,
        startTime: '2052',
        endTime: '2062',
        name: 'School Leaving Certificate',
        organization: 'Pakwadi Bhanjyang HSS',
      },
      {
        id: 2,
        startTime: '2052',
        endTime: '2065',
        name: 'Higher Secondary Education Board',
        organization: 'Pioneer HSS',
      },
      {
        id: 2,
        startTime: '2065',
        endTime: '2070',
        name: 'Bachelor',
        organization: 'Waling Multiple Campus',
      },
    ],
    exCards: [
      {
        id: 1,
        startTime: '2013',
        endTime: '2016',
        name: 'Media Chautari Pvt Ltd',
        organization: 'Sr. Frontend Developer',
      },
      {
        id: 2,
        startTime: '2017',
        endTime: '2017',
        name: 'Moonbao Pvt Ltd',
        organization: 'Sr. Frontend Developer',
      },
      {
        id: 3,
        startTime: '2018',
        endTime: 'August 2018',
        name: 'Esignature Pvt Ltd',
        organization: 'Sr. Frontend Developer',
      },
      {
        id: 4,
        startTime: '2018',
        endTime: '2019',
        name: 'Rillmark Pvt Ltd',
        organization: 'Sr. Frontend Developer',
      },
      {
        id: 5,
        startTime: '2018',
        endTime: 'Current',
        name: 'Naxa Pvt Ltd',
        organization: ' Sr. Frontend Developer Part & Fulltime',
      },
    ],
  },
  {
    id: 8,
    name: 'tab',
    tabNav: [
      {
        id: 1,
        name: 'all',
      },
      {
        id: 2,
        name: 'web design',
      },
      {
        id: 3,
        name: 'react',
      },
      {
        id: 4,
        name: 'wordpress',
      },
    ],
    tabContent: [
      {
        id: 1,
        img: fieldsight,
        name: 'FieldSight is a technological platform for remote monitoring',
        type: 'web',
      },
      {
        id: 2,
        img: Zite,
        name: 'Remote Management and Planning Platform',
        type: 'web',
      },
      {
        id: 3,
        img: Geodetic,
        name: 'Geodetic Division, Survey Department',
        type: 'react',
      },
      {
        id: 4,
        img: Geoportal,
        name: 'Update And Upgrade Of National Geoportal',
        type: 'wordpress',
      },
      {
        id: 5,
        img: Sakshyam,
        name: 'Sakchyam Data Visualization Tool',
        type: 'web',
      },
      {
        id: 6,
        img: Geonadir,
        name: 'To Store And Share Drone Datasets',
        type: 'react',
      },
      {
        id: 7,
        img: Pdra,
        name: 'Disaster Risk Assessment (PDRA) Tool',
        type: 'web',
      },
    ],
  },
  {
    id: 9,
    name: 'contact',
  },
];
export default PmcvData;
