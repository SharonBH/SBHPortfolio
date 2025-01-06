// filepath: /c:/github/SBHstudio/src/json/landingPageData.js
/* eslint-disable import/extensions */

import * as defaultData from "./landingPageData.default";
import * as hebrewData from "./landingPageData.he";

export const getData = (language = "en") => {
  console.log(language);
  switch (language) {
    case "he":
      console.log("hebrewData", hebrewData);
      return hebrewData;
    case "en":
    default:
      return defaultData;
  }
};
