import React from 'react';
import Button from '../sub-components/Button';
import designImage from '../assets/design.png';

const Design = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-10 w-full max-container p-4 lg:p-0'>
      <div className='flex justify-center items-center lg:w-1/2 w-full'>
        <img src={designImage} alt="Design Illustration" className='object-contain w-82 h-82 xl:w-[550px] xl:h-[550px]' width={500} height={500}/>
      </div>
      <div className='flex flex-1 flex-col justify-center items-start w-full lg:px-8'>
        <h1 className='mt-10 font-montserrat text-gray-d text-4xl xl:text-8xl leading-tight xl:leading-[96px] font-semibold'>
          How to design your site footer like we did<br />
        </h1>
        <p className='font-montserrat text-slate-gray text-base xl:text-lg leading-6 xl:leading-8 mt-6 mb-10 xl:mb-14'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <Button label="Learn More" />
      </div>
    </section>
  );
}

export default Design;
