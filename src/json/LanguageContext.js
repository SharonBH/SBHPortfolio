/* eslint-disable react/prop-types */
import React, {
  createContext, useState, useEffect, useContext, 
} from 'react';
import { getData } from "./landingPageData.js";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [data, setData] = useState(getData(language));

  useEffect(() => {
    setData(getData(language));
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'he' : 'en';
    setLanguage(newLanguage);
    document.documentElement.setAttribute('dir', newLanguage === 'he' ? 'rtl' : 'ltr');
  };

  return (
    <LanguageContext.Provider value={{ language, data, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
