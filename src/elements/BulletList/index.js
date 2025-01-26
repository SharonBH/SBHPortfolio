import React from 'react';
import PropTypes from 'prop-types';

const BulletList = ({ items }) => {
  return (
  <div className="w-full mt-5">
    <ol className="space-y-5">
          {items.map((item, index) => (
        <ListItem key={item} count={index + 1} text={item} /> 
          ))}
    </ol>
  </div>
  );
};

BulletList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// eslint-disable-next-line react/prop-types
const ListItem = ({ count, text }) => {
  return (
    <li className="text-body-color dark:text-dark-6 flex text-base">
      <span className="relative z-10 ml-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
        <span className="bg-slate-900 absolute top-0 right-0 z-[-1] h-full w-full -rotate-45 rounded" />
        {count}
      </span>
      {text}
    </li>
  );
};

export default BulletList;
