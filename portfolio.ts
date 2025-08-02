import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';


export const greetings: GreetingsType = {
  name: 'Kiran Pawar',
  title: "Hello all, I'm Kiran Pawar",
  description:
    "A versatile IT professional with a passion for crafting exceptional digital experiences. I specialize in both Frontend development, cloud and DevOps engineering, bringing a unique blend of creativity and technical expertise to the table.",
  resumeLink:"https://drive.google.com/file/d/1lMNJe8lDW2HzKD7hl6P2vEvNkEaDoJF2/view?usp=sharing",
};

export const openSource = {
  githubUserName: 'imkiran13',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: 'https://imkiran13.github.io/my-portfolio/',
  linkedin: 'https://www.linkedin.com/in/kiran-pawar-57b4b8135',
  github: 'https://github.com/imkiran13',
  instagram: 'https://www.instagram.com/imkiran13',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: ' ',
  data: [
    {
      title: 'Front End Development',
      lottieAnimationFile: 'lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) in React.js'
        ),
        emoji('⚡ Ensuring that websites and applications are accessible and visually appealing on various devices and screen sizes.'),
        emoji('⚡ Working with CSS preprocessors like SASS or LESS to manage and maintain CSS code more efficiently.'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Bootstrap',
          iconifyTag: 'logos:bootstrap',
        },
        {
          skillName: 'SCSS',
          iconifyTag: 'vscode-icons:file-type-scss',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Tailwind',
          iconifyTag: 'vscode-icons:file-type-tailwind',
        },
      ],
    },
    {
      title: 'Cloud and DevOps',
      lottieAnimationFile: 'lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Creating, setting up, and overseeing cloud-based infrastructure on platforms such as AWS'),
        emoji(
          '⚡ Working with containers (e.g., Docker) and orchestration tools (e.g., Kubernetes) for efficient application deployment and scaling.'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Jenkins.'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'SonarQube',
          iconifyTag: 'devicon:sonarqube',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Jenkins',
          iconifyTag: 'logos:jenkins',
        },
        {
          skillName: 'GIT',
          iconifyTag: 'devicon:git',
        },
        {
          skillName: 'Maven',
          iconifyTag: 'logos:maven',
        },
        {
          skillName: 'Gradle',
          iconifyTag: 'devicon:gradle-wordmark',
        },
        {
          skillName: 'Terraform',
          iconifyTag: 'logos:terraform-icon',
        },
        {
          skillName: 'Nexus',
          iconifyTag: 'simple-icons:sonatype',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'devicon:docker',
        },
        {
          skillName: 'Ansible',
          iconifyTag: 'devicon:ansible',
        },
        {
          skillName: 'Kubernetes',
          iconifyTag: 'logos:kubernetes',
        },
        {
          skillName: 'Linux',
          iconifyTag: 'logos:linux-tux',
        },
        {
          skillName: 'Grafana',
          iconifyTag: 'logos:grafana',
          
        },
        {
          skillName: 'Prometheus',
          iconifyTag: 'logos:prometheus',
        },
        {
          skillName: 'Tomcat',
          iconifyTag: 'logos:tomcat',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Ramrao Adik Institute of Technology',
    subHeader: 'Bachelor of Engineering in Information Technology',
    duration: 'August 2014 - June 2018',
    desc: 'Presented paper in National Level Students Conference on frontiers in engineering and technology applications.',
    grade: 'CGPA 7.23/10',
    descBullets: [
      'Attended Workshop on Graphics Designing C-DAC conducted by ITSA RAIT.',
      'Participated in Hackathon (Android App developement) Organised by Prodology held at VJTI mumbai in Feb 2017.',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Cloud and DevOps Engineer',
    company: 'NeoSOFT Technologies',
    companyLogo: 'img/icons/common/Neosoft.png',
    date: 'March 2021 - Oct 2024',
    desc: 'As a Cloud and DevOps Engineer at NeoSOFT Technologies since March 2021, I design and implement robust solutions, specializing in source code management, CI/CD, and AWS cloud technologies..',
  },
  {
    role: 'Production Engineer',
    company: 'Pivotree',
    companyLogo: 'img/icons/common/pivotree.jpg',
    date: 'Oct 2024 - Feb 2025',
    desc: 'As a Production Engineer/DevOps at Pivotree Created Docker images and AWS CI/CD pipelines.Implemented Robot Framework using AWS for automation and testing.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Associtate Consultant',
    company: 'Infosys',
    companyLogo: '/img/icons/common/infosys.png',
    date: 'March 2025 - Present',
    desc: 'As a DevOps Engineer at Infosys, I am responsible for migrating source code repositories from Azure DevOps to GitHub Cloud, ensuring a seamless transition and improved version control practices. I design and implement CI/CD workflows using GitHub Actions to automate the deployment of Java, .NET, and Node.js applications across test, production, and system environments. My work focuses on enhancing automation, optimizing delivery pipelines, and supporting scalable, secure release processes across diverse application stacks.',
  },
  // {
  //   role: 'Backend Developer',
  //   company: 'Wapidu',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: 'Sept 2021',
  //   desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  // },
];

export const projects: ProjectType[] = [
  {
    name: 'Developer Portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap.',
    github: 'https://github.com/imkiran13/developer-portfolio',
    link: 'https://imkiran13.github.io/my-portfolio/',
  },
  {
    name: 'AWS CICD',
    desc: ' End-to-end CI/CD process for deploying a Spring Boot app on AWS ECS using CodePipeline and CodeBuild (Codepipeline, CodeBuild, ECR, ECS)',
    github: 'https://github.com/imkiran13/aws-cicd.git',
  },
  {
    name: 'Bingo App CICD',
    desc: 'Real-Time CI CD with DevSecOps with Nginx Reverse proxy and SSL',
    github: 'https://github.com/imkiran13/Bingo-App-CICD.git',
  },
  {
    name: '3-Tier-Yelp-Camp-Web-Application',
    desc: 'Yelp Camp 3 Tier Web Application Deployment in Local, Dev and Prod environments using Jenkins CI/CD',
    github: 'https://github.com/imkiran13/3-Tier-Yelp-Camp-Web-Application.git',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Kiran Pawar',
  description:
    'A passionate Cloud and DevOps Engineer and Front End Developer.',
  author: 'Kiran Pawar',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://imkiran13.github.io/my-portfolio/',
  keywords: [
    'Kiran',
    'Kiran Pawar',
    '@imkiran13',
    'imkiran13',
    'Portfolio',
    'Kiran Portfolio ',
    'Kiran Pawar Portfolio',
  ],
};
