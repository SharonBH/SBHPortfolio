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
  title: "ההצלחה שלך היא העסק שלי!",
  subtitle: "עם שנים של ניסיון בתעשיית ההייטק, אני מסייע לעסקים קטנים ובינוניים לממש את הפוטנציאל הטכנולוגי והחדשנות כדי להשיג את מטרותיהם. בין אם אתם זקוקים להנחיה בנושא טרנספורמציה דיגיטלית או לייעוץ ממוקד, אני כאן כדי לתמוך בצמיחה שלכם.",
  action: "עוד עלינו",
  protfolioHeader: "הפרויקטים שלי",
  portfolioSubtitle: "",
  teamHeader: "הצוות שלנו",
  teamSubtitle: "הצוות שלנו מלא באנשים נלהבים ומוכן להפוך את החלומות שלך למציאות.",
  aboutHeader: "קצת עלי",
  aboutSubtitle: "אני מתמחה בפיתוח תוכנה ומערכות מידע ומציע שירותי ייעוץ ופיתוח בתחום הטכנולוגיה והמידע.",
  aboutPoints: [
    "מנהל טכנולוגיה מנוסה עם למעלה מ-20 שנות ניסיון.",
    "מומחה במחשוב ענן, פיתוח תוכנה וניהול נתונים.",
    "מנהל צוותי פיתוח מצטיינים ומתכנן ארכיטקטורות מערכות עמידות.",
    "מפתח פרויקטים משמעותיים העומדים בציפיות הלקוח.",
    "אוהב מטכנולוגיה ושואף תמיד ללמוד ולצמוח.",
  ],
};

export const About = {
  hero: {
    header: "קצת עלי",
    subtitle: "אני מתמחה בפיתוח תוכנה ומערכות מידע ומציע שירותי ייעוץ ופיתוח בתחום הטכנולוגיה והמידע.",
  },
  points: [
    "מנהל טכנולוגיה מנוסה עם למעלה מ-20 שנות ניסיון.",
    "מומחה במחשוב ענן, פיתוח תוכנה וניהול נתונים.",
    "מנהל צוותי פיתוח מצטיינים ומתכנן ארכיטקטורות מערכות עמידות.",
    "מפתח פרויקטים משמעותיים העומדים בציפיות הלקוח.",
    "אוהב מטכנולוגיה ושואף תמיד ללמוד ולצמוח.",
  ],
};

export const Services = {
  header: "השירותים שלי",
  tagLine: "אני מציע מגוון שירותים  שמטרתם לעזור לעסקים קטנים ובינוניים להתקדם בעולם הטכנולוגי המשתנה ללא הרף.",
  hero: {
    header: "השירותים שלי",
    subtitle: "מאתרים קטנים ליישומי רשת גדולים ומערכות נתונים, אני כאן כדי לספק לכם פתרונות מותאמים אישית.",
    points: [
      "פיתוח אתרים ומערכות WEB מתקדמות לפי צרכי הלקוח.",
      "פיתוח אפליקציות ניידות ומובייל עם מערכות ניהול מתקדמות.",
      "פיתוח מערכות מידע וניהול מידע מתקדמות.",
      "ייעוץ טכנולוגי וניהול מוצר לסטארטאפים וחברות.",
    ],
  },
  items: [
    {
      title: "פיתוח אתרים ומערכות WEB",
      description: "אני מתמחה בפיתוח אתרי אינטרנט ומערכות ניהול מותאמות אישית.",
      imageUrl: Web,
      animation: "שמאל",
      services: ["אתרי תדמית", "אתרי מכירות", "מערכות ניהול", "אתרי תוכן"],
    },
    {
      title: "פיתוח אפליקציות/מובייל",
      description: "אני מתמחה בפיתוח אפליקציות ניידות ומובייל.",
      imageUrl: Mobile,
      animation: "למעלה",
      services: ["אפליקציות ניידות", "אפליקציות חיצוניות", "אפליקציות פנימיות"],
    },
    {
      title: "פיתוח מערכות מידע",
      description: "אני מתמחה בפיתוח מערכות מידע וניהול מידע.",
      imageUrl: Data,
      animation: "ימין",
      services: ["מערכות מתואמות אישית", "מערכות CMS", "מערכות BI", "מערכות ניהול"],
    },
    {
      title: "יעוץ והקמה",
      description: "אני מתמחה בייעוץ טכנולוגי והקמה וניהול צוותי פיתוח.",
      imageUrl: Consult,
      animation: "ימין",
      services: ["יעוץ לסארטאפים וחברות", "ייעוץ בנושא טכנולוגיה", "ייעוץ בנושא טרנספורמציה דיגיטלית", "ייעוץ בנושא ניהול מוצר"],
    },
  ],
};

export const Portfolios = {
  title: "פרויקטים נבחרים",
  subtitle: "אנחנו מחוייבים להגדיל את העסק שלך עם תוצאות העבודה המצוינות שלנו.",
  action: "ראה את העבודה שלנו",
  projects: [
    {
      id: "asd1293uasdads1",
      title: "מערכת ניהול סטודיו כושר",
      imageUrl: Recruiting,
      type: "מערכת מתואמת אישית",
      responsibility: ["מערכת ניהול", "פיתוח אתר", "עיצוב UI/UX"],
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
  ],
};

export const Discuss = {
  title: "בואו נדבר",
  subtitle: "לפגישת יעוץ חינם עם צוות המומחים שלנו.",
  action: "לחץ כאן להתחיל",
  description:
    "אנא מלא את הטופס למטה כדי לדבר על הפרויקט שלך ונחזור אליך בהקדם.",
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
  discuss: "התיעצות",
  project: "פרויקטים",
  about: "אודות",
  team: "צוות",
  contact: "צור קשר",
  discussProject: "פגישת יעוץ חינם",
  seeOurWork: "ראה את העבודה שלנו",
  contactUs: "צור קשר",
  aboutUs: "אודותינו",
  ourServices: "השירותים שלנו",
  ourPortfolio: "תיק העבודות שלנו",
  ourTeam: "הצוות שלנו",
  discussYourProject: "פגישה ללא התחייבות",
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
  description: "למה כדאי לבחור בנו לבנות את הפרויקט שלך.",
  items: [
    [
      {
        title: "ניסיון",
        description: "מעל 20 שנות ניסיון בפיתוח תוכנה, ניהול מוצר וטרנספורמציה דיגיטלית.",
        imageUrl: Management,
      },
      {
        title: "חדשנות",
        description: "שימוש בטכנולוגיות מתקדמות למתן פתרונות מעשיים.",
        imageUrl: Communicative,
      },
    ],
    [
      {
        title: "שיתוף פעולה",
        description: "שותפות אמיתית עם הלקוח ליצירת הצלחה משותפת.",
        imageUrl: Collaborative,
      },
      {
        title: "יושרה",
        description: "שקיפות ואמינות בכל שלב",
        imageUrl: Favorite,
      },
    ],
  ],
};

export const Testimonials = {
  title: "המלצות",
  subtitle: "מה הם אמרו עלינו.",
  dir: "rtl",
  reviews: [
    {
      id: 1,
      name: "ירון הראל",
      company: "בעלים, Pulse Studio",
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
