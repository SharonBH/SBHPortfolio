/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";
import Button from "elements/Button";
import { useLanguage } from 'json/LanguageContext';

export default function ChooseWebDeveloper() {
  const { data } = useLanguage();
  return (
          <>
          <Header data={data.Header} />
           <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        איך לבחור את מפתח האתרים המתאים לעסק שלך בישראל?
      </h1>

      <p className="mb-6">
        בין אם אתם מקימים אתר חדש לעסק קטן או בונים פלטפורמה מורכבת – בחירת מפתח אתרים היא החלטה קריטית.
        במדריך הזה נעזור לכם להבין איך לבחור נכון – בין פרילנסר, סטודיו או חברה – ואיך להימנע מטעויות נפוצות.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">פרילנסר או חברה? יתרונות וחסרונות</h2>
      <table className="w-full mb-6 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2"> </th>
            <th className="border px-4 py-2">פרילנסר</th>
            <th className="border px-4 py-2">חברה</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">יתרונות</td>
            <td className="border px-4 py-2">עלויות נמוכות, קשר ישיר</td>
            <td className="border px-4 py-2">צוות מקצועי, זמינות גבוהה, אחריות רחבה</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">חסרונות</td>
            <td className="border px-4 py-2">תלות באדם אחד, פחות תהליכים</td>
            <td className="border px-4 py-2">מחיר גבוה יותר לרוב</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-4">שאלות שחייבים לשאול</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>באילו טכנולוגיות אתה משתמש?</li>
        <li>האם יש ניסיון בפרויקטים דומים?</li>
        <li>האם אתה זמין לאורך זמן לתמיכה ושדרוגים?</li>
        <li>כמה זמן ייקח הפרויקט? מה כלול במחיר?</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">איך בודקים מקצועיות ואמינות</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>בקשו תיק עבודות ולא רק לינקים – גם תיאור תהליך</li>
        <li>בדקו חוות דעת בגוגל או לינקדאין</li>
        <li>שימו לב לאופן שבו הוא מדבר על הצרכים שלכם – האם הוא שואל שאלות עסקיות?</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">למה לקוחות בוחרים דווקא בנו</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>גישה פרקטית: מבינים את העסק שלך</li>
        <li>ניסיון עם מגוון תעשיות – אופנה, שירותים, טכנולוגיה</li>
        <li>שקיפות מלאה לאורך כל הדרך</li>
        <li>שירות כולל: UX, פיתוח, הטמעה, אופטימיזציה</li>
      </ul>

      <div className="bg-blue-100 border border-blue-300 rounded-xl p-6 text-center mt-10">
        <p className="text-lg font-semibold mb-2">
          📞 רוצה לקבל הצעת מחיר ממוקדת לצרכים שלך?
        </p>
        <p>השאירו פרטים ונדבר תוך 24 שעות.</p>
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
