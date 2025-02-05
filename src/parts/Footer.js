/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer({ data }) {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              { data.tagLine }
            </p>
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
