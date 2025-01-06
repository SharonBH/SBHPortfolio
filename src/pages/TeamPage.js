/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Header from "parts/Header";
import HeroTeam from "parts/HeroTeam";
import AllTeam from "parts/AllTeam";
import Footer from "parts/Footer";
import { useLanguage } from 'json/LanguageContext';

function TeamPage() {
  const { data } = useLanguage();

  return (
    <>
      <Header data={data.Header} />
      <HeroTeam data={data.Hero} />
      <AllTeam data={data.TeamMembers} />
      <Footer data={data.Footer} />
    </>
  );
}

export default TeamPage;
