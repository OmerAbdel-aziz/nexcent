import React from 'react';
import Card from '../sub-components/Card';
import couchImage from '../assets/images/couch.png';
import accountImage from '../assets/images/accounting.png';
import brainImage from '../assets/images/brainstorm.png';

const Products = () => {
  return (
    <section id='products' className='p-4'>
      <div className='text-center flex flex-col justify-center items-center'>
        <h1 className='mt-10 font-montserrat text-gray-d text-3xl sm:text-4xl xl:text-8xl leading-tight xl:leading-[96px] font-semibold mb-5'>
          Caring is the new marketing
        </h1>
        <p className='info-text max-w-[800px] text-base sm:text-lg'>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>
      </div>
      <div className='flex flex-col sm:flex-row mt-8 sm:mt-20 justify-center items-center gap-16'>
        <Card imgURL={couchImage} label="Creating Streamlined Safeguarding Processes with OneRen" />
        <Card imgURL={accountImage} label="What are your responsibilities and how can you manage them?" />
        <Card imgURL={brainImage} label="Revamping the Membership Model with Triathlon Australia" />
      </div>
    </section>
  );
}

export default Products;
