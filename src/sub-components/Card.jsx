import React from 'react';
import RightImage from '../assets/icons/Right.png';

const Card = ({ label, imgURL }) => {
  return (
    <div className='relative flex-1 flex justify-center items-center p-4'>
      <img src={imgURL} 
           alt="Product image" 
           className='object-contain relative z-10 rounded-lg'
           width={300}
           height={280}/>

      <div className='absolute flex flex-col justify-center items-center bg-silver shadow-lg rounded-lg p-4 -bottom-[25%] z-20 max-w-[270px] '>
        <p className='info-text font-bold text-center'>{label}</p>
        <div className='cursor-pointer flex items-center mt-2'>
          <h3 className='font-montserrat text-primary text-normal leading-tight sm:leading-snug font-semibold'>
            Read More
          </h3>
          <img src={RightImage} alt="Right Arrow" className='object-contain w-6 h-6 ml-2' />
        </div>
      </div>
    </div>
  );
}

export default Card;
