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
  title: "מעצימים את העסקים שלך לשגשג!",
  subtitle: "מעצימים עסקים קטנים ובינוניים לשגשג בעולם ההייטק.",
  action: "ראה את העבודה שלנו",
  protfolioHeader: "התיק שלנו",
  portfolioSubtitle: "עשינו כל כך הרבה פרויקטים וכל הלקוחות שלנו אוהבים את זה.",
  teamHeader: "הצוות שלנו",
  teamSubtitle: "הצוות שלנו מלא באנשים נלהבים ומוכן להפוך את תוכנת החלומות שלך למציאות.",
};

export const Services = {
  header: "השירותים שלנו",
  tagLine: "מעצימים עסקים קטנים ובינוניים לשגשג בעולם ההייטק.",
  items: [
    {
      title: "פיתוח אתרים",
      imageUrl: Web,
      animation: "שמאל",
    },
    {
      title: "פיתוח מובייל",
      imageUrl: Mobile,
      animation: "למעלה",
    },
    {
      title: "עיצוב UI/UX",
      imageUrl: UIUX,
      animation: "ימין",
    },
  ],
};

export const Portfolios = {
  title: "פרויקטים נבחרים",
  subtitle: "אנחנו מוכנים להגדיל את העסק שלך עם תוצאות העבודה המצוינות שלנו.",
  action: "ראה את העבודה שלנו",
  projects: [
    {
      id: "asd1293uasdads1",
      title: "אפליקציית גיוס",
      imageUrl: Recruiting,
      type: "אפליקציות מובייל",
      responsibility: ["פיתוח מובייל", "עיצוב UI/UX"],
      credit: "https://dribbble.com/shots/15164950-Recruiting-app",
    },
    {
      id: "asd1293uhjkhkjh2",
      title: "Stream+",
      imageUrl: Stream,
      type: "אפליקציות מובייל",
      responsibility: ["פיתוח מובייל", "עיצוב UI/UX"],
      credit: "https://dribbble.com/shots/15276430-Stream",
    },
    {
      id: "asd1293uvbvcbbd3",
      title: "Freelance",
      imageUrl: Freelance,
      type: "אפליקציות מובייל",
      responsibility: ["פיתוח מובייל", "עיצוב UI/UX"],
      credit: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
    },
    {
      id: "asd1293ufgdfgs4",
      title: "Aura",
      imageUrl: Aura,
      type: "אתר אינטרנט",
      responsibility: ["פיתוח אתרים", "עיצוב UI/UX"],
      credit: "https://dribbble.com/shots/15176338-Aura-Website-Main-Page",
    },
    {
      id: "asd1293ulskmnb5",
      title: "Surtido Rico",
      imageUrl: Surtido,
      type: "אתר אינטרנט",
      responsibility: ["פיתוח אתרים", "עיצוב UI/UX"],
      credit: "https://dribbble.com/shots/15173118-Surtido-Rico",
    },
    {
      id: "asd1293ulkmnbj6",
      title: "ניהול קורסים",
      imageUrl: ManagementApp,
      type: "אתר אינטרנט",
      responsibility: ["פיתוח אתרים", "עיצוב UI/UX"],
      credit:
      "https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App",
    },
  ],
};

export const Discuss = {
  title: "בואו נדון",
  action: "דון בפרויקט",
  description:
    "אנא מלא את הטופס למטה כדי לדון בפרויקט שלך ונחזור אליך תוך פחות מ-23 שעות.",
  form: {
    name: "שמך",
    company: "החברה שלך",
    email: "כתובת האימייל שלך",
    phone: "מספר הטלפון שלך",
    projectIdea: "הסבר על דרישות או רעיון הפרויקט שלך",
    submit: "שלח",
  },
  successMessage: "תודה שפנית אלינו. נחזור אליך בקרוב.",
  errorMessage: "משהו השתבש. אנא נסה שוב.",
};

const currentYear = new Date().getFullYear();

export const Footer = {
  year: currentYear,
  tagLine: "מעצימים עסקים קטנים ובינוניים לשגשג בעולם ההייטק.",
  addressHeader: "משרד",
  socialHeader: "מדיה חברתית",
  company: "SBH...",
  address: "רחוב שם, עיר, מדינה",
  phone: "+972 (0)542557990",
  email: "info@sbh.com",
  socialMedia: {
    facebook: "https://facebook.com/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
  },
};

export const Header = {
  home: "בית",
  services: "שירותים",
  portfolio: "תיק עבודות",
  discuss: "דון",
  project: "פרויקט",
  team: "צוות",
  contact: "צור קשר",
  discussProject: "דון בפרויקט",
  seeOurWork: "ראה את העבודה שלנו",
  contactUs: "צור קשר",
  aboutUs: "אודותינו",
  ourServices: "השירותים שלנו",
  ourPortfolio: "תיק העבודות שלנו",
  ourTeam: "הצוות שלנו",
  discussYourProject: "דון בפרויקט שלך",
  contactDetails: "פרטי קשר",
  contactForm: "טופס יצירת קשר",
  contactInfo: "מידע ליצירת קשר",
  contactNow: "צור קשר עכשיו",
  contactUsNow: "צור קשר עכשיו",
  contactUsToday: "צור קשר היום",
  contactUsForProject: "צור קשר לפרויקט",
};

export const Advantages = {
  title: "למה לבחור בנו",
  description: "למה כדאי לבחור בנו לטפל בפרויקט שלך.",
  items: [
    [
      {
        title: "תקשורתי",
        description: "אנחנו מתקשרים את רעיונות הפרויקט וההתקדמות שלנו כדי להבהיר.",
        imageUrl: Communicative,
      },
      {
        title: "ניהול",
        description: "אנחנו מנהלים את הפרויקט שלנו כראוי כדי שהפרויקט יבוצע היטב.",
        imageUrl: Management,
      },
    ],
    [
      {
        title: "שיתופי פעולה",
        description: "הצוות שלנו מאוד שיתופי כדי שהפרויקט שלנו יבוצע היטב.",
        imageUrl: Collaborative,
      },
      {
        title: "מועדף",
        description: "עשינו כל כך הרבה פרויקטים וכל הלקוחות שלנו אוהבים את זה.",
        imageUrl: Favorite,
      },
    ],
  ],
};

export const Testimonials = {
  title: "המלצות",
  subtitle: "מה הם אמרו עלינו.",
  reviews: [
    {
      id: 1,
      name: "סשה רוז",
      company: "בעלים, Surveyor Corps",
      testimoni:
      "תודה ל-SBHstudio, אתם הכי טובים! תמשיכו בעבודה הנהדרת!",
      imageUrl: Sasha,
    },
    {
      id: 2,
      name: "קרוגר חאן",
      company: "מנהל, Shultan Oil",
      testimoni:
      "רק רציתי להודיע לכם שהיה נהדר לעבוד עם SBHstudio.",
      imageUrl: Kruger,
    },
    {
      id: 3,
      name: "ריינר ג'ון",
      company: "מנכ\"ל, Marley CO",
      testimoni: "SBHstudio כל כך נהדרים. תודה רבה על עבודה מצוינת.",
      imageUrl: Reiner,
    },
  ],
};

export const TeamMembers = [
  {
    name: "רך דוד",
    position: "מנכ\"ל",
    imageUrl: CEO,
  },
  {
    name: "פולין סידני",
    position: "מנהל משאבי אנוש",
    imageUrl: HRD,
  },
  {
    name: "גריינג'ר ווטרסון",
    position: "מנהל כספים",
    imageUrl: Finance,
  },
  {
    name: "טום ג'ימי",
    position: "מנהל פרויקטים",
    imageUrl: ProjectManager,
  },
  {
    name: "ג'ים הנדריקס",
    position: "מפתח פרונט-אנד",
    imageUrl: Frontend1,
  },
  {
    name: "קלווין מקס",
    position: "מפתח פרונט-אנד",
    imageUrl: Frontend2,
  },
  {
    name: "הוקינס ג'ים",
    position: "מפתח בק-אנד",
    imageUrl: Backend1,
  },
  {
    name: "דון ביזרו",
    position: "מפתח בק-אנד",
    imageUrl: Backend2,
  },
  {
    name: "ביל מרקינסון",
    position: "מפתח מובייל",
    imageUrl: Mobile1,
  },
  {
    name: "איגור קברוב",
    position: "מפתח מובייל",
    imageUrl: Mobile2,
  },
  {
    name: "פרדי קרל",
    position: "מעצב UI/UX",
    imageUrl: UIUX2,
  },
  {
    name: "מוניקה לאבגוד",
    position: "מעצב UI/UX",
    imageUrl: UIUX1,
  },
];
