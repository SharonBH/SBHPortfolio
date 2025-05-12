/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";
import Button from "elements/Button";
import { useLanguage } from 'json/LanguageContext';

export default function AIToolsSmallBiz() {
  const { data } = useLanguage();
  return (
          <>
          <Header data={data.Header} />
             <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        5 כלי בינה מלאכותית שכל עסק קטן בישראל חייב להכיר
      </h1>

      <p className="mb-6">
        AI כבר לא שייך רק לחברות ענק. גם עסקים קטנים בישראל יכולים לחסוך זמן, לייעל תהליכים ולשפר שירות – בעזרת כלים פשוטים, זמינים וחכמים. הנה 5 כלים שאנחנו ממליצים לבדוק.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. ChatGPT – שירות לקוחות, תוכן והכוונה</h2>
      <p className="mb-4">
        מענה לשאלות נפוצות, כתיבת תכנים שיווקיים או סיכום פגישות – הכלי הזה כבר משנה עסקים קטנים בכל העולם.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Notion AI – ארגון מידע ותיעוד חכם</h2>
      <p className="mb-4">
        בעזרת Notion תוכלו לבנות מסמכים חכמים, מאורגנים ומתעדכנים אוטומטית – כולל תזכורות, סיכומים ותוכן אוטומטי.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Pictory – יצירת סרטונים מהירה</h2>
      <p className="mb-4">
        רוצים להעלות סרטוני טיקטוק או לייצר סרטוני הסבר למוצר? הכלי הזה יוצר סרטונים מטקסט תוך דקות – כולל קריינות וגרפיקה.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Tidio – צ'אטבוטים לשירות לקוחות</h2>
      <p className="mb-4">
        Tidio מאפשר לכם לבנות בקלות צ'אטבוט שיענה ללקוחות באתר 24/7, ישלח מיילים ויעדכן אתכם בכל פנייה חדשה.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Make (Integromat) – אוטומציה בין מערכות</h2>
      <p className="mb-6">
        הכלי הזה מחבר בין מערכות כמו Gmail, WhatsApp, CRM ומערכות פנימיות – ויוצר תהליכים אוטומטיים שמחסכים שעות כל חודש.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">רוצה עזרה בהטמעה?</h2>
      <p className="mb-6">
        אנחנו עוזרים לעסקים קטנים בישראל לא רק לבחור את הכלים הנכונים – אלא גם ליישם אותם בצורה מותאמת ולמדוד תוצאות.
      </p>

      <div className="bg-blue-100 border border-blue-300 rounded-xl p-6 text-center mt-10">
        <p className="text-lg font-semibold mb-2">
          ⚙️ רוצה לדעת איזה כלי AI הכי מתאים לעסק שלך?
        </p>
        <p>קבע איתנו שיחה, ונתאים לך פתרון חכם וחסכוני.</p>
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
