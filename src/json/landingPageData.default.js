/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";
import Aura from "../assets/images/Portfolio/Aura.png";
import Surtido from "../assets/images/Portfolio/Surtido.png";
import ManagementApp from "../assets/images/Portfolio/ManagementApp.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
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
  action: "See Our Work",
  protfolioHeader: "Our Portfolio",
  portfolioSubtitle: "We've done so many project and all of our client love it.",
  teamHeader: "Our Team",
  teamSubtitle: "Our team is full of passionate people and ready to make your dream software come true.",

};

export const Services = {
  header: "Our Service",
  tagLine:
    "Empowering Small and Medium Businesses to Thrive in the Hi-Tech World.",
  items: [
    {
      title: "Web Development",
      imageUrl: Web,
      animation: "left",
    },
    {
      title: "Mobile Development",
      imageUrl: Mobile,
      animation: "up",
    },
    {
      title: "UI/UX Design",
      imageUrl: UIUX,
      animation: "right",
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
    {
      id: "asd1293ufgdfgs4",
      title: "Aura",
      imageUrl: Aura,
      type: "Website",
      responsibility: ["Web Development", "UI/UX Design"],
      credit: "https://dribbble.com/shots/15176338-Aura-Website-Main-Page",
    },
    {
      id: "asd1293ulskmnb5",
      title: "Surtido Rico",
      imageUrl: Surtido,
      type: "Website",
      responsibility: ["Web Development", "UI/UX Design"],
      credit: "https://dribbble.com/shots/15173118-Surtido-Rico",
    },
    {
      id: "asd1293ulkmnbj6",
      title: "Courses Management",
      imageUrl: ManagementApp,
      type: "Website",
      responsibility: ["Web Development", "UI/UX Design"],
      credit:
      "https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App",
    },
  ],
};

export const Discuss = {
  title: "Lets Discuss",
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
  address: "1234 Street Name, City, Country",
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
  reviews: [
    {
      id: 1,
      name: "Sasha Rose",
      company: "Owner, Surveyor Corps",
      testimoni:
      "Thanks for SBHstudio, you guys are the best! Keep up the great work!",
      imageUrl: Sasha,
    },
    {
      id: 2,
      name: "Kruger Khan",
      company: "Director, Shultan Oil",
      testimoni:
      "I just wanted to let you know that it’s been great working with SBHstudio.",
      imageUrl: Kruger,
    },
    {
      id: 3,
      name: "Reiner John",
      company: "CEO, Marley CO",
      testimoni: "SBHstudio is so great. Thank you so much for a job well done.",
      imageUrl: Reiner,
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
