/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { DiscussForm } from "parts/DiscussForm";
import { useLanguage } from 'json/LanguageContext';

import Header from "parts/Header";
import Footer from "parts/Footer";

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectIdea: "",
  });
  const { data: text } = useLanguage();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectIdea: "",
    });
  };

  return (
    <>
      <Header data={text.Header} />
      <DiscussForm
        text={text.Discuss}
        data={data}
        onChange={onChange}
        resetForm={resetForm}
      />
      <Footer data={text.Footer} />
    </>
  );
};
