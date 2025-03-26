import project1 from "../assets/projects/FoodDel.png";
import project2 from "../assets/projects/MIST.png";
import project3 from "../assets/projects/EduCollege.png";
import project4 from "../assets/projects/Nike.png";
import project5 from "../assets/projects/Real Estate.png"; 


export const HERO_CONTENT = `I am a passionate Frontend Developer with a strong focus on building scalable and high-performance web applications. With over 2 years of hands-on experience, I have honed my skills in React, Next.js, and Tailwind CSS, crafting seamless and responsive user interfaces. My expertise lies in translating design concepts into interactive and accessible web experiences, optimizing performance, and enhancing user engagement. I strive to develop innovative front-end solutions that elevate business growth and improve digital interactions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating seamless and user-friendly web applications. With over 2 years of experience, I have worked extensively with technologies like React, Next.js, and Tailwind CSS to build responsive and high-performance interfaces. My journey in web development started with a deep curiosity about how things work, evolving into a career focused on continuous learning and problem-solving. I thrive in collaborative environments, where I can apply my skills to create engaging digital experiences. Outside of coding, I enjoy exploring new technologies, staying active, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Frontend Engineer",
    company: "Lagos State Ministry of Innovation, Science & Technology",
    description: `Single-handedly developed a Booking Appointment application to streamline staff scheduling, reducing manual efforts and minimizing booking conflicts.	Designed and implemented the user interface using React.js, Next.js, TypeScript and Tailwind CSS resulting in a 40% improvement in booking efficiency. Integrated real-time appointment tracking and automated SMS notifications, which reduced scheduling conflicts by 80%.`,
    technologies: ["React.js", "Next.js", "TypeScript","Appwrite"],
  },
  {
    year: "2021 - 2024",
    role: "Frontend Developer",
    company: "Upwork",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "TypeScript", "Tailwind"],
  },
];

export const PROJECTS = [
  {
    title: "Food Delivery Web Application",
    image: project1,
    description:
      "Developed a dynamic food delivery app with an intuitive UI, enhancing order efficiency and customer experience through features such as product listing, shopping cart, and user authentication.",
    technologies: ["React.js", "CSS3"],
    link: "https://food-del-frontend.netlify.app/",
  },
  {
    title:
      "LASG - Ministry of Innovation, Science, & Technology - Booking Appoinment App",
    image: project2,
    description:
      "Developing a booking appointment application to streamline staff scheduling and reduce booking conflicts. The app features real-time appointment tracking, automated notifications, and an intuitive user interface, enhancing efficiency and user experience.",
    technologies: [
      "React.js",
      "TailwindCss",
      "TypeScript",
      "Next.js",
      "Appwrite",
    ],
  },
  {
    title: "College Website",
    image: project3,
    description:
      "Developed a fully responsive college website app using React.js, significantly enhancing student engagement and interaction.",
    technologies: ["React", "CSS3"],
    link: "https//college-sity.netlify.app/",
  },
  {
    title: "Nike-inspired E-Commerce Platform",
    image: project4,
    description:
      "Designed and built a Nike-inspired e-commerce platform for a client, leading to a 30% increase in user engagement and conversions",
    technologies: ["HTML5", "CSS3", "React.js"],
    link: "https://niketailwind-css.netlify.app/",
  },
  {
    title: "Real Estate Web Application",
    image: project5,
    description:
      "Built a modern and responsive real estate web application designed to showcase property listings with an intuitive user interface. Features include dynamic image sliders for property visuals, detailed descriptions, and price listings ensuring a seamless user experience across all devices.",
    technologies: ["React.js", "TailwindCss"],
    link: "https://realestate-tailwind.netlify.app/",
  },
];

export const CONTACT = {
  address: " Majaro Street, Onike, Yaba, Lagos, NG",
  phoneNo: "+234 902 17281 85 ",
  email: "damilaregabz12@gmail.com",
};
