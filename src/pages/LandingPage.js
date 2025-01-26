/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { useLanguage } from 'json/LanguageContext';
import Header from "parts/Header";
import Hero from "parts/Hero";
import Service from "parts/Service";
// import Portfolio from "parts/Portfolio";
import Advantage from "parts/Advantage";
import Testimonial from "parts/Testimonial";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";

function LandingPage() {
  const { data } = useLanguage();

  return (
    <>
      <Header data={data.Header} />
      <Hero data={data.Hero} />
      <Service data={data.Services} />
      {/* <Portfolio data={data.Portfolios} /> */}
      <Advantage data={data.Advantages} />
      <Testimonial data={data.Testimonials} />
      <Discuss data={data.Discuss} />
      <Footer data={data.Footer} />
    </>
  );
}

export default LandingPage;
