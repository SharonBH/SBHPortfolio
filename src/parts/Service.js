/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import Button from "elements/Button";
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Service({ data }) {
  // console.log("Service component data:", data);
  if (!data) {
    return <p>No data available</p>; // or return a loading indicator or a message
  }
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            {data.header}
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            {data.tagLine}
          </p>
        </Fade>

        <div className="grid grid-rows-4 px-10 gap-8 sm:grid-cols-4 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.items.map((item) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fade direction={item.animation} delay={500} triggerOnce>
              <div>
                <Button type="link" href="/services">
                <div className="bg-w</a>hite group rounded-2xl shadow-2xl border border-light-theme-blue transform transition duration-500 hover:scale-105">
                  <img
                    src={item.imageUrl}
                    alt="Service"
                    className="w-full rounded-t-2xl"
                  />
                  <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">
                    {item.title}
                  </h2>
                </div>
                </Button>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
