/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";
import Button from "elements/Button";
import { useLanguage } from 'json/LanguageContext';

export default function WebDevTelAviv() {
  const { data } = useLanguage();
  return (
          <>
          <Header data={data.Header} />
          <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        חברת פיתוח אתרים בתל אביב – אתרים ואפליקציות שמניעים תוצאות
      </h1>

      <p className="mb-6">
        מחפש חברת פיתוח אתרים בתל אביב שתבין את הצרכים שלך, תחשוב עסקית ותפתח פתרון מדויק?
        אנחנו מתמחים בבניית אתרים ואפליקציות בהתאמה אישית לעסקים מקומיים, עם דגש על תוצאה עסקית,
        עיצוב מודרני, וקוד איכותי.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>גישה אסטרטגית לפיתוח – לא רק קוד, אלא פתרון עסקי שלם</li>
        <li>ניסיון עם עשרות עסקים מקומיים וסטארטאפים</li>
        <li>זמינות מלאה, שירות בעברית, ושיתוף פעולה לאורך כל הדרך</li>
        <li>טכנולוגיות עדכניות: React, Node.js, Next.js, Firebase ועוד</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">התהליך שלנו – שלב אחר שלב</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>שיחת אפיון ראשונית ללא התחייבות</li>
        <li>הכנת הצעה מותאמת אישית</li>
        <li>עיצוב UX/UI מודרני</li>
        <li>פיתוח קוד מלא והתאמה למובייל ול-SEO</li>
        <li>בדיקות והטמעה עם ליווי אישי</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">סיפור הצלחה מתל אביב</h2>
      <p className="mb-6">
        אחד מלקוחותינו – סטודיו לעיצוב – ביקש לשדרג את אתר התדמית שלו. תוך 3 שבועות עברנו מאתר ישן לאתר
        חדשני, מותאם לסלולרי, שכלל גם מערכת ניהול תוכן (CMS). מאז ההשקה:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>עלייה של 48% בזמן השהייה באתר</li>
        <li>פי 2 יותר פניות דרך הטופס</li>
        <li>עלייה של 60% בחיפושים אורגניים תוך חודשיים</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">טכנולוגיות בהן אנו מתמחים</h2>
      <p className="mb-6">
        React / Next.js / WordPress / Firebase / MongoDB / Node.js / Tailwind CSS
      </p>

      <div className="bg-blue-100 border border-blue-300 rounded-xl p-6 text-center mt-10">
        <p className="text-lg font-semibold mb-2">
          🗓️ רוצה אתר שנראה טוב ומביא תוצאות?
        </p>
        <p>השאירו פרטים ונחזור אליכם לשיחת ייעוץ חינם.</p>
        <Button
          href="/discuss-project"
          type="link"
          className="flex bg-yellow-300 text-blue-800 text-xl lg:text-2xl xl:text-xl tracking-wider items-center justify-center p-5 border-2 border-dark-theme-blue shadow-xl rounded-full mt-6 sm:mt-0 transform transition duration-600 hover:scale-105"
        >לחץ להשארת פרטים</Button>
      </div>
    </main>
    <Footer data={data.Footer} /></>
  );
}
