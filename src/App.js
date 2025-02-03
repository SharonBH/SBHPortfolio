/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes, useLocation } from "react-router-dom";
import React, { useLayoutEffect } from 'react';
import LandingPage from "pages/LandingPage";
import ProjectPage from "pages/ProjectPage";
import NotFoundPage from "pages/NotFoundPage";
import ProjectDetailPage from "pages/ProjectDetailPage";
import { DiscussProjectPage } from "pages/DiscussProjectPage";

import "./assets/css/styles.css";
import ServicesPage from "pages/ServicesPage";
import AboutPage from "pages/AboutPage";

function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/services" element={<ServicesPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="*/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
