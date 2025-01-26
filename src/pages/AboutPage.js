/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Header from "parts/Header";
import HeroAbout from "parts/HeroAbout";
import Footer from "parts/Footer";
import { useLanguage } from 'json/LanguageContext';

function AboutPage() {
  const { data } = useLanguage();

  return (
    <>
      <Header data={data.Header} />
      <HeroAbout data={data.About} />
      <Footer data={data.Footer} />
    </>
  );
}

export default AboutPage;
