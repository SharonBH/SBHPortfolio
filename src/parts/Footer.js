/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { useLocation } from "react-router-dom";
import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer({ data }) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              { data.tagLine }
            </p>
             <ul className="text-theme-blue mt-0">
                    <li>
                      <Button
                        className={`${
                          path === "/WebdevTelAviv" ? "active-link" : ""
                        } font-medium text-xs px-5 text no-underline hover:underline`}
                        type="link"
                        href="/WebdevTelAviv"
                      >חברת פיתוח אתרים בתל אביב</Button>
                    </li>
                    <li className="py-2 lg:py-0">
                      <Button
                        className={`${
                          path === "/ChooseWebDeveloper" ? "active-link" : ""
                        } font-medium text-xs px-5 no-underline hover:underline`}
                        type="link"
                        href="/ChooseWebDeveloper"
                      >איך לבחור מפתח אתרים בישראל</Button>
                    </li>
                    <li className="py-2 lg:py-0">
                      <Button
                        className={`${
                          path === "/CustomSoftwareIsrael" ? "active-link" : ""
                        } font-medium text-xs px-5 no-underline hover:underline`}
                        type="link"
                        href="/CustomSoftwareIsrael"
                      >פיתוח תוכנה בהתאמה אישית בישראל</Button>
                    </li>
                    <li className="py-2 lg:py-0">
                      <Button
                        className={`${
                          path === "/AIToolsSmallBiz" ? "active-link" : ""
                        } font-medium text-xs px-5 no-underline hover:underline`}
                        type="link"
                        href="/AIToolsSmallBiz"
                      >כלי AI לעסקים קטנים</Button>
                    </li>
                  </ul>
          </div>
          <div className="w-1/3 mt-0 ml-16 sm:ml-0 mr-8">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              {data.addressHeader}
            </h1>
            <p>
              <a href="mailto:sharon.benhaim@gmail.com" className="text-lg text-gray-400 font-light hover:underline">
                {data.email}
              </a>
            </p>
            <p className="text-lg text-gray-400 font-light">
{data.address}            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0 mr-8">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              {data.socialHeader}
            </h1>
           {/*  <Button href="https://www.instagram.com/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Instagram
            </Button> */}
            <Button href="https://www.linkedin.com/in/sharon-ben-haim/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
            <Button href="https://github.com/sharonbh" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
{Text.copyrights}          </p>
        </div>
      </div>
    </div>
  );
}
