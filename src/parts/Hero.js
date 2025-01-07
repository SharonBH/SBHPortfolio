/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import BuildWebsite from "../assets/images/hero/home.png";

export default function Hero({ data }) {
  return (
    <section className="hero">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
        <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
          {data.title}
        </h1>

        <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
          {data.subtitle}
        </p>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-blue rounded-lg shadow-2xl hover:bg-dark-theme-blue transition duration-200"
          > 
            {data.action}
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                // {language === "en" ? "M9 5l7 7-7 7" : 
                // "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"}
              />

            </svg>
          </Button>
        </Fade>
      </div>
      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce>
          <img className="" src={BuildWebsite} alt="Build Website" />
        </Fade>
      </div>
    </section>
  );
}
