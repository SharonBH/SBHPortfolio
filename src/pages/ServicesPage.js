/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Header from "parts/Header";
import HeroServices from "parts/HeroServices";
import Footer from "parts/Footer";
import ServicesList from "parts/ServicesList";
import { useLanguage } from 'json/LanguageContext';

function ServicesPage() {
  const { data } = useLanguage();
  return (
    <>
      <Header data={data.Header} />
      <HeroServices data={data.Services.hero} />
      <ServicesList data={data.Services} />
      <Footer data={data.Footer} />
    </>
  );
}

export default ServicesPage;
