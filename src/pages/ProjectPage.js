/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { useLanguage } from 'json/LanguageContext';

import Header from "parts/Header";
import HeroPortfolio from "parts/HeroPortfolio";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";
import AllPortfolio from "parts/AllPortfolio";

function ProjectPage() {
  const { data } = useLanguage();

  return (
    <>
      <Header data={data.Header} />
      <HeroPortfolio data={data.Hero} />
      <AllPortfolio data={data.Portfolios} />
      <Discuss data={data.Discuss} />
      <Footer data={data.Footer} />
    </>
  );
}

export default ProjectPage;
