import React from 'react';
import teslaImage from '../assets/images/tesla.png';
import RightImage from '../assets/icons/Right.png';
import { clients } from '../constants';

const Testimonial = () => {
  return (
    <section id='testimonial' className='flex flex-col lg:flex-row gap-10 w-full max-container p-4 lg:p-0'>
      <div className='flex justify-center items-center lg:w-1/3 w-full mb-8 lg:mb-0'>
        <img src={teslaImage} alt="tesla" className='object-contain w-48 h-48 sm:w-64 sm:h-64 lg:w-82 lg:h-82 xl:w-[550px] xl:h-[550px]' />
      </div>
      <div className='flex flex-1 flex-col justify-between items-start w-full lg:px-8'>
        <p className='font-montserrat text-slate-gray text-base sm:text-lg leading-6 sm:leading-8 mb-4 sm:mb-6'>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>
        <h3 className='font-montserrat text-primary text-xl sm:text-2xl leading-tight sm:leading-snug font-semibold'>
          Tim Smith
        </h3>
        <p className='font-montserrat text-slate-gray text-base sm:text-lg leading-6 sm:leading-8 mb-4 sm:mb-6'>
          British Dragon Boat Racing Association
        </p>
        <div className='flex flex-col sm:flex-row w-full gap-5'>
          <div className='hidden sm:flex flex-wrap justify-center gap-4 sm:gap-10 mb-4 sm:mb-0'>
            {clients.map((client, index) => (
              <img src={client.src} alt={client.alt} key={index} className='w-12 h-12 object-contain' />
            ))}
          </div>
          <div className='cursor-pointer flex items-center'>
            <h3 className='font-montserrat text-primary text-xl sm:text-2xl leading-tight sm:leading-snug font-semibold'>
              Meet All Clients
            </h3>
            <img src={RightImage} alt="Right Arrow" className='object-contain w-6 h-6 ml-2' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
