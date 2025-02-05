const logotext = process.env.REACT_APP_LOGO_TEXT;
const meta = {
    title: process.env.REACT_APP_META_TITLE,
    description: process.env.REACT_APP_META_DESCRIPTION,
};

const introdata = {
    title: process.env.REACT_APP_INTRO_TITLE,
    animated: {
        first: process.env.REACT_APP_ANIMATED_FIRST,
        second: process.env.REACT_APP_ANIMATED_SECOND,
        third: process.env.REACT_APP_ANIMATED_THIRD,
    },
    description: process.env.REACT_APP_INTRO_DESCRIPTION,
    your_img_url: process.env.REACT_APP_INTRO_IMG_URL,
};

// const dataabout = {
//     title: "abit about my self",
//     aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
// };
// const worktimeline = [{
//         jobtitle: "Designer of week",
//         where: "YAdfi",
//         date: "2020",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "Jamalya",
//         date: "2019",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "ALquds",
//         date: "2019",
//     },
// ];

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a passionate Computer Engineering student with a strong interest in software development, AI, and social impact. Currently pursuing my final year at NUST, I am constantly seeking opportunities to grow and expand my skillset in web development, AI-based systems, and healthcare tech. Through my experiences in the Bytewise MERN Fellowship, Amal Career-Prep Fellowship, and hands-on work as a Software Engineer at EnquAIre, I am dedicated to leveraging technology to drive innovation and solve real-world problems.",
};

const worktimeline = [
    {
        jobtitle: "Software Engineer",
        where: "EnquAIre",
        date: "Nov 2024 - Present",
        description: "Currently working remotely, handling EHR (Electronic Health Record) integration, API testing, and Twilio integration for AI-driven communication with users in the healthcare sector."
    },
    {
        jobtitle: "MERN Stack Developer Fellow",
        where: "Bytewise Fellowship",
        date: "Jun - Sep 2024",
        description: "Developed full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). Worked on real-world projects focusing on front-end and back-end development, API integration, and database management."
    },
    {
        jobtitle: "Fellow",
        where: "Amal Career-Prep Fellowship",
        date: "Aug - Oct 2024",
        description: "Participated in a 3-month career development program to hone my leadership, communication, and problem-solving skills. Worked on various real-world scenarios, enhancing my career readiness and growth mindset."
    }
];


// const skills = [{
//         name: "Python",
//         value: 90,
//     },
//     {
//         name: "Djano",
//         value: 85,
//     },
//     {
//         name: "Javascript",
//         value: 80,
//     },
//     {
//         name: "React",
//         value: 60,
//     },
//     {
//         name: "Jquery",
//         value: 85,
//     },
// ];

// const services = [{
//         title: "UI & UX Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Mobile Apps",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Wordpress Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
// ];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "Java",
    value: 70,
},
{
    name: "C++",
    value: 75,
},
{
    name: "JavaScript",
    value: 80,
},
{
    name: "React",
    value: 85,
},
{
    name: "Node.js",
    value: 80,
},
{
    name: "MongoDB",
    value: 75,
},
{
    name: "Bootstrap",
    value: 80,
},
{
    name: "Git & GitHub",
    value: 85,
},
{
    name: "ML & AI",
    value: 50,
},
{
    name: "API Integration",
    value: 80,
},
{
    name: "HTML & CSS",
    value: 85,
},
];

const services = [{
    title: "Full-Stack Web Development",
    description: "I specialize in building dynamic web applications using the MERN stack (MongoDB, Express, React, Node.js), focusing on seamless integration, responsive design, and scalable solutions.",
},
{
    title: "AI-Driven Healthcare Solutions",
    description: "Developing AI-driven systems for the healthcare industry, including **EHR integration**, **Twilio-powered AI communication**, and API testing for healthcare-related applications.",
},
{
    title: "Front-End Development with React",
    description: "I build intuitive and engaging user interfaces using React, focusing on enhancing user experience and ensuring smooth interactions across platforms.",
},
{
    title: "API & Database Integration",
    description: "I have experience integrating robust APIs and managing MongoDB databases, ensuring smooth data flow between the front-end and back-end, while maintaining efficiency and scalability.",
},
{
    title: "Mobile Application Development",
    description: "While not my primary focus, I am well-versed in creating responsive mobile-friendly applications using modern web technologies to ensure seamless performance across devices.",
},
];


// const dataportfolio = [{
//         img: "https://picsum.photos/400/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/800/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/600/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/300/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/700/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },

//     {
//         img: "https://picsum.photos/400/600/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/300/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/550/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/700/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
// ];

const dataportfolio = [];

const contactConfig = {
    YOUR_EMAIL: process.env.REACT_APP_YOUR_EMAIL,
    YOUR_FONE: process.env.REACT_APP_YOUR_PHONE,
    description: process.env.REACT_APP_CONTACT_DESCRIPTION,
    YOUR_SERVICE_ID: process.env.REACT_APP_YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_YOUR_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_YOUR_USER_ID,
};


const socialprofils = {
    github: process.env.REACT_APP_GITHUB_URL,
    facebook: process.env.REACT_APP_FACEBOOK_URL,
    linkedin: process.env.REACT_APP_LINKEDIN_URL,
    twitter: process.env.REACT_APP_TWITTER_URL,
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};