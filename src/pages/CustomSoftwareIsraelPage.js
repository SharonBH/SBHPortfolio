/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";
import Button from "elements/Button";
import { useLanguage } from 'json/LanguageContext';

export default function CustomSoftwareIsrael() {
  const { data } = useLanguage();
  return (
          <>
          <Header data={data.Header} />
            <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        פיתוח תוכנה בהתאמה אישית בישראל – פתרונות מדויקים לעסקים
      </h1>

      <p className="mb-6">
        לא כל עסק דומה לשני – לכן לפעמים הפתרון הנכון הוא לא מוצר מוכן, אלא תוכנה מותאמת אישית. אנחנו מתמחים
        בפיתוח מערכות וכלים דיגיטליים שמדויקים לתהליכים, עובדים, וצרכים ספציפיים של עסקים בישראל.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">מתי כדאי לפתח תוכנה מותאמת אישית?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>יש לכם תהליך ייחודי שלא מתאים לכלים קיימים</li>
        <li>אתם מבזבזים זמן רב על עבודה ידנית</li>
        <li>אתם צריכים מערכת שלא תלוייה במנוי צד ג</li>
        <li>יש צורך בחיבור בין כמה מערכות קיימות</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">מה כולל תהליך הפיתוח שלנו?</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>הבנת התהליך העסקי והאתגרים בשטח</li>
        <li>אפיון מסכים ותרחישים</li>
        <li>עיצוב UX/UI בהתאם לצרכי המשתמשים</li>
        <li>פיתוח צד שרת וצד לקוח בטכנולוגיות מתקדמות</li>
        <li>בדיקות, שיפור והתאמה מתמשכת</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">סיפורי הצלחה</h2>
      <p className="mb-6">
        אחד מלקוחותינו – חברת שילוח – ביקש לפתח מערכת לניהול הזמנות ולקוחות, שתחליף אקסלים ומיילים. תוך חודשיים
        פיתחנו פלטפורמה מבוססת ווב שחסכה להם מעל 30 שעות חודשיות לעובד. תוך 3 חודשים הם דיווחו על שיפור של 25% בזמני תגובה ללקוחות.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">טכנולוגיות בשימוש</h2>
      <p className="mb-6">
        React, Node.js, PostgreSQL, MongoDB, Firebase, TypeScript, RESTful APIs
      </p>

      <div className="bg-blue-100 border border-blue-300 rounded-xl p-6 text-center mt-10">
        <p className="text-lg font-semibold mb-2">
          💡 יש לך רעיון או צורך במערכת ייחודית?
        </p>
        <p>נשמח לשמוע ולהציע פתרון שמתאים בדיוק לעסק שלך.</p>
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
