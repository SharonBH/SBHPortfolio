/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";

import { getData } from "json/landingPageData";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Service from "parts/Service";
import Portfolio from "parts/Portfolio";
import Advantage from "parts/Advantage";
import Testimonial from "parts/Testimonial";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";

function LandingPage() {
  const [language] = useState("default");
  const data = getData(language);
  console.log(data);
  return (
    <>
      <Header />
      <Hero />
      <Service data={data.services} />
      <Portfolio data={data.portfolio} />
      <Advantage data={data.advantages} />
      <Testimonial data={data.testimonials} />
      <Discuss />
      <Footer />
    </>
  );
}

export default LandingPage;
