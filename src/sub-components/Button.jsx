import React from 'react';

const Button = ({ label }) => {
  return (
    <button className='bg-primary hover:bg-Shade1 active:bg-Shade2
     text-white flex flex-wrap py-2 px-4 sm:py-3 sm:px-5 justify-center 
     gap-2 sm:gap-3 font-montserrat text-base sm:text-lg items-center rounded'>
      {label}
    </button>
  );
};

export default Button;
