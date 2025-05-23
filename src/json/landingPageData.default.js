/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/web.jpeg";
import Mobile from "../assets/images/Services/mobile.jpeg";
import Data from "../assets/images/Services/data.jpeg";
import Consult from "../assets/images/Services/consult.png";

// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Pulse from "../assets/images/Testimonials/pulse.png";
import Elram from "../assets/images/Testimonials/elram.jpeg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

// TeamMembers
import CEO from "../assets/images/TeamMembers/CEO.jpg";
import HRD from "../assets/images/TeamMembers/HRD.jpg";
import Finance from "../assets/images/TeamMembers/Finance.jpg";
import ProjectManager from "../assets/images/TeamMembers/Project-manager.jpg";
import Frontend1 from "../assets/images/TeamMembers/Frontend1.jpg";
import Frontend2 from "../assets/images/TeamMembers/Frontend2.jpg";
import Backend1 from "../assets/images/TeamMembers/Backend1.jpg";
import Backend2 from "../assets/images/TeamMembers/Backend2.jpg";
import Mobile1 from "../assets/images/TeamMembers/Mobile1.jpg";
import Mobile2 from "../assets/images/TeamMembers/Mobile2.jpg";
import UIUX1 from "../assets/images/TeamMembers/UIUX1.jpg";
import UIUX2 from "../assets/images/TeamMembers/UIUX2.jpg";

export const Hero = {
  title: "Empowering Your Businesses to Thrive!",
  subtitle:
    "Empowering Small and Medium Businesses to Thrive in the Hi-Tech World.",
  action: "About Us",
  protfolioHeader: "Our Portfolio",
  portfolioSubtitle: "We've done so many project and all of our client love it.",
  teamHeader: "Our Team",
  teamSubtitle: "Our team is full of passionate people and ready to make your dream software come true.",
  aboutHeader: "About Us",
  aboutSubtitle: "We are a team of creative and passionate people that provide IT solutions for small and medium businesses.",
};

export const About = {
  hero: {
    header: "About Us",
    subtitle: "We are a team of creative and passionate people that provide IT solutions for small and medium businesses.",
  },
  points: [
    "Experienced technology manager with over 20 years of experience.",
    "Expert in cloud computing, software development, and data management.",
    "Leads outstanding development teams and designs robust system architectures.",
    "Develops significant projects that meet client expectations.",
    "Able to work in a fast-paced environment and deliver results on time.",
    "Excellent communication skills and ability to work with cross-functional teams.",
    "Strong problem-solving skills and ability to think strategically.",
  ],
};

export const Services = {
  header: "Our Services",
  tagLine:
    "Empowering Small and Medium Businesses to Thrive in the Hi-Tech World.",
  hero: {
    header: "Our Services",
    subtitle: "from small websites to large scale web applications and data solutions, we got you covered.",
    points: [
      "from small websites to large scale web applications and data solutions, we got you covered.",
      "with more than 20 years of experience, we are ready to make your dream software come true.",
      "need a CTO as a service? we are ready to help you.",
      "we are ready to scale up your business with our great work result.",
      "advanced data solutions for your business.",
    ],
  },
  items: [
    {
      title: "Web Development",
      description: "We provide custom web solutions for your business.",
      imageUrl: Web,
      animation: "left",
      services: ["Responsive Design", "Custom web solutions", "E-commerce Solutions"],
    },
    {
      title: "Application/Mobile Development",
      description: "We provide custom mobile solutions for your business.",
      imageUrl: Mobile,
      animation: "up",
      services: ["iOS & Android Apps", "Cross-Platform Development", "App Store Deployment"],
    },
    {
      title: "Data Solutions",
      description: "We provide data solutions for your business.",
      imageUrl: Data,
      animation: "right",
      services: ["Data Analysis", "Data Visualization", "Big Data Solutions"],
    },
    {
      title: "Consultancy Services",
      description: "We provide consultancy services for your business.",
      imageUrl: Consult,
      animation: "right",
      services: ["IT Consultancy", "CTO as a service", "Business dgitization"],
    },
  ],
};

export const Portfolios = {
  title: "selected projects",
  subtitle: "We are ready to scale up your business with our great work result.",
  action: "See Our Work",
  projects: [
    {
      id: "asd1293uasdads1",
      title: "Recruiting App",
      imageUrl: Recruiting,
      type: "Mobile Apps",
      responsibility: ["Mobile Development", "UI/UX Design"],
      credit: "https://dribbble.com/shots/15164950-Recruiting-app",
    },
    {
      id: "asd1293uhjkhkjh2",
      title: "Stream+",
      imageUrl: Stream,
      type: "Mobile Apps",
      responsibility: ["Mobile Development", "UI/UX Design"],
      credit: "https://dribbble.com/shots/15276430-Stream",
    },
    {
      id: "asd1293uvbvcbbd3",
      title: "Freelance",
      imageUrl: Freelance,
      type: "Mobile Apps",
      responsibility: ["Mobile Development", "UI/UX Design"],
      credit: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
    },
  ],
};

export const Discuss = {
  title: "Lets Discuss",
  subtitle: "Lets discuss it and make your dream software come true!",
  action: "Discuss Project",
  description:
    "Please fill out the form below to discuss your project and we'll get back to you in less than 23 hours.",
  form: {
    name: "Your name",
    company: "Your company",
    email: "Your email address",
    phone: "Your contact number",
    projectIdea: "Explain about your project requirments or idea",
    submit: "Submit",
  },
  successMessage: "Thank you for contacting us. We will get back to you soon.",
  errorMessage: "Something went wrong. Please try again.",
};

const currentYear = new Date().getFullYear();

export const Footer = {
  year: currentYear,
  tagLine: "Empowering Small and Medium Businesses to Thrive in the Hi-Tech World.",
  addressHeader: "Office",
  socialHeader: "Social Media",
  company: "SBH...",
  address: "Yuvalim campus, Nes Ziona, Israel",
  phone: "+972 (0)542557990",
  email: "info@sbh.com",
  socialMedia: {
    facebook: "https://facebook.com/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
  },
};

export const Header = {
  home: "Home",
  services: "Services",
  portfolio: "Portfolio",
  discuss: "Discuss",
  project: "Project",
  about: "About",
  team: "Team",
  contact: "Contact",
  discussProject: "Discuss Project",
  seeOurWork: "See Our Work",
  contactUs: "Contact Us",
  aboutUs: "About Us",
  ourServices: "Our Services",
  ourPortfolio: "Our Portfolio",
  ourTeam: "Our Team",
  discussYourProject: "Discuss Your Project",
  contactDetails: "Contact Details",
  contactForm: "Contact Form",
  contactInfo: "Contact Info",
  contactNow: "Contact Now",
  contactUsNow: "Contact Us Now",
  contactUsToday: "Contact Us Today",
  contactUsForProject: "Contact Us For Project",
};

export const Advantages = {
  title: "Why Choose Us",
  description: "Why you should choose us to handle your project.",
  items: [
    [
      {
        title: "Communicative",
        description:
          "We communicate our project ideas and progress to make it clear.",
        imageUrl: Communicative,
      },
      {
        title: "Management",
        description:
          "We manage our project properly to make our project done well.",
        imageUrl: Management,
      },
    ],
    [
      {
        title: "Collaborative​",
        description:
          "Our team are very collaborative to make our project done well.",
        imageUrl: Collaborative,
      },
      {
        title: "Favorite",
        description: "We've did so many project and all of our client love it.",
        imageUrl: Favorite,
      },
    ],
  ],
};

export const Testimonials = {
  title: "Testimonials",
  subtitle: "What they said about us.",
  dir: "ltr",
  reviews: [
    {
      id: 1,
      name: "Yaron Harel",
      company: "Owner, Pulse Studio",
      testimoni:
      "We highly recommend SBH#DEV the new management system built for our gym is saving us both time and money. The professional support and responsiveness throughout the process made the entire experience exceptional.",
      imageUrl: Pulse,
    },
    {
      id: 2,
      name: "Kruger Adam",
      company: "Director, 121-Affiliates",
      testimoni:
      "With the help of SBH#DEV Managing our agents is now clearer and more efficient, and the support we received throughout was outstanding.",
      imageUrl: Kruger,
    },
    {
      id: 3,
      name: "Elram Zelenik",
      company: "Law Firm, Owner",
      testimoni: "From the start, we knew we were in great hands! The website created for our law firm is professional and easy to navigate, showcasing our services clearly and impressively.",
      imageUrl: Elram,
    },
  ],
};

export const TeamMembers = [
  {
    name: "Rach David",
    position: "CEO",
    imageUrl: CEO,
  },
  {
    name: "Pauline Sydney",
    position: "HRD",
    imageUrl: HRD,
  },
  {
    name: "Granger Watterson",
    position: "Finance",
    imageUrl: Finance,
  },
  {
    name: "Tom Jimmy",
    position: "Project Manager",
    imageUrl: ProjectManager,
  },
  {
    name: "Jim Hendrix",
    position: "Front-end Developer",
    imageUrl: Frontend1,
  },
  {
    name: "Calvin Max",
    position: "Front-end Developer",
    imageUrl: Frontend2,
  },
  {
    name: "Hawkins Jim",
    position: "Back-end Developer",
    imageUrl: Backend1,
  },
  {
    name: "Don Bizaro",
    position: "Back-end Developer",
    imageUrl: Backend2,
  },
  {
    name: "Bill Markinson",
    position: "Mobile Developer",
    imageUrl: Mobile1,
  },
  {
    name: "Igor Kavarov",
    position: "Mobile Developer",
    imageUrl: Mobile2,
  },
  {
    name: "Freddie Curl",
    position: "UI/UX Designer",
    imageUrl: UIUX2,
  },
  {
    name: "Monica Lovegood",
    position: "UI/UX Designer",
    imageUrl: UIUX1,
  },
];
