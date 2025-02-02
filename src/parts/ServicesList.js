/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import ServiceCard from "elements/Card";

const ServicesList = ({ data }) => {
  return (
        <div className="flex flex-wrap justify-center">
            {data?.items?.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description} 
                  services={service.services}
                />
            ))}
        </div>
  );
};

export default ServicesList;
