/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

const ServiceCard = ({ title, description, services }) => (
<div className="max-w-sm rounded overflow-hidden shadow-lg">
 
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">{description}    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  {services.map((service, index) => (
    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{service}</span>
  ))}  
  </div>
</div>
);

export default ServiceCard;
