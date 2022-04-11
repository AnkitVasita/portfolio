import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";
import seven from "../assets/svg/projects/seven.svg";
import eight from "../assets/svg/projects/eight.svg";
import zshop1 from "../assets/images/z-shop1.jpg";
import zshop2 from "../assets/images/z-shop2.jpg";
import zshop3 from "../assets/images/z-shop3.jpg";
import zshop4 from "../assets/images/z-shop4.jpg";
import covid from "../assets/images/covid-19.png";
import movie1 from "../assets/images/movie1.jpg";
import movie2 from "../assets/images/movie2.jpg";
import movie3 from "../assets/images/movie3.jpg";
import movie4 from "../assets/images/movie4.jpg";
import chat1 from "../assets/images/chat1.jpg";
import chat2 from "../assets/images/chat2.png";
import chat3 from "../assets/images/chat3.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Z-Shop",
    projectDesc:
      "An e-commerce application built with React & Shopify for a coffee roasting company",
    tags: ["NextJs", "Redux", "TailwindCss", "NextAuth", "Netlify"],
    code: "https://github.com/AnkitVasita/e-commerce-app",
    demo: "https://e-commerce-react1.netlify.app",
    image1: zshop1,
    image2: zshop2,
    image3: zshop3,
    image4: zshop4,
    link: "/z-shop",
  },
  {
    id: 2,
    projectName: "Chat App",
    projectDesc:
      "Weather forecast systems and applications predict weather conditions based on multiple parameters.",
    tags: ["React", "Firebase", "Redux", "Netlify"],
    code: "https://github.com/AnkitVasita/chat-application",
    demo: "https://chat-react1.netlify.app",
    image1: chat1,
    image2: chat2,
    image3: chat3,
    link: "/chat",
  },

  {
    id: 3,
    projectName: "Movies Hub",
    projectDesc:
      "This project involves the development of an Android application for viewing and managing patient data.",
    tags: ["React", "Firebase", "Redux", "Styled-Components"],
    code: "https://github.com/AnkitVasita/movie-react-app",
    demo: "http://movies-hub-react.netlify.app",
    image1: movie1,
    image2: movie2,
    image3: movie3,
    image4: movie4,
    link: "/movie",
  },
  {
    id: 4,
    projectName: "Covid-19 Tracker",
    projectDesc:
      "This project is a railway tracking system that allows users to obtain relevant information about train timing.",
    tags: ["React", "Firebase"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image1: covid,
    link: "/covid",
  },

  {
    id: 5,
    projectName: "E-Commerce App",
    projectDesc: "A Simple E-commerce application",
    tags: ["React Native", "Firebase"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: five,
  },
  {
    id: 6,
    projectName: "Uber Lite",
    projectDesc: "Uber clone",
    tags: ["Flutter"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: six,
  },
  {
    id: 7,
    projectName: "Stock Market App",
    projectDesc: "A simple stock market API app",
    tags: ["React", "Redux", "Bootstrap"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: seven,
  },
  {
    id: 8,
    projectName: "Car Pooling System",
    projectDesc:
      "The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution",
    tags: ["Flutter", "React"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: eight,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
