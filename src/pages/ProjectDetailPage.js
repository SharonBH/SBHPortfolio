/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, {  useEffect } from "react";
import { useLanguage } from 'json/LanguageContext';

import Header from "parts/Header";
import { useParams } from "react-router-dom";
import PortfolioDetail from "parts/PortfolioDetail";
import Footer from "parts/Footer";

function ProjectDetailPage() {
  const { data } = useLanguage();
  const { id } = useParams();
  const detailData = data.Portfolios.projects.filter((item) => item.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header data={data.Header} />
      <PortfolioDetail
        data={detailData.length === 1 ? [detailData[0]] : null}
      />
      <Footer data={data.Footer} />
    </>
  );
}

export default ProjectDetailPage;
