import React from 'react';
import Button from '../sub-components/Button';
import pixelgradeImage from '../assets/images/Frame.png';

const Pixelgrade = () => {
  return (
    <section className='flex flex-col lg:flex-row-reverse gap-10 w-full max-container p-4 lg:p-0'>
      <div className='flex justify-center items-center lg:w-1/2 w-full'>
        <img src={pixelgradeImage} alt="Pixelgrade Illustration" className='object-contain w-90 h-90 xl:w-[550px] xl:h-[550px]' />
      </div>
      <div className='flex flex-1 flex-col justify-center items-start w-full lg:px-8'>
        <h1 className='mt-10 font-montserrat text-gray-d text-4xl xl:text-8xl leading-tight xl:leading-[96px] font-semibold'>
          The unseen of spending three years at Pixelgrade <br />
        </h1>
        <p className='font-montserrat text-slate-gray text-base xl:text-lg leading-6 xl:leading-8 mt-6 mb-10 xl:mb-14'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <Button label="Learn More" />
      </div>
    </section>
  );
}

export default Pixelgrade;
