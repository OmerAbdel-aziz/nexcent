import React from 'react';
import Button from '../sub-components/Button';
import illustration from '../assets/images/Illustration.png';

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-10 w-full max-container p-4 lg:p-0'>
      <div className='flex flex-1 flex-col justify-center items-start w-full lg:px-8 pt-10 lg:pt-28'>
        <h1 className='mt-10 font-montserrat text-gray-d text-4xl xl:text-8xl leading-tight xl:leading-[96px] font-semibold'>
          Lessons and insights <br />
          <span className='text-primary'> from 8 years </span>
        </h1>
        <p className='font-montserrat text-slate-gray text-base xl:text-lg leading-6 xl:leading-8 mt-6 mb-10 xl:mb-14'>
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button label="Register"/>
      </div>
      <div className='flex justify-center items-center pt-10 lg:pt-28'>
        <img src={illustration} alt="illustration" className='w-90 h-90 xl:w-[550px] xl:h-[550px]' />
      </div>
    </section>
  );
};

export default Hero;
