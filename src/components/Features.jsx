import React from 'react';
import membershipImage from '../assets/icons/membership.png';
import nationalImage from '../assets/icons/national.png';
import clubsImage from '../assets/icons/clubs.png'

const Features = () => {
  return (
    <section id='features' className='max-container flex flex-col items-center'>
      <div className='flex flex-col items-center text-center mb-8'>
        <h2 className='text-gray-d font-montserrat text-3xl font-bold mb-2'>Manage your entire community in a single system</h2>
        <p className='text-slate-gray font-montserrat'>Who is Nextcent suitable for?</p>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16'>
        <div className='flex flex-col justify-center items-center text-center p-4'>
          <img src={membershipImage} alt="membership" width={55} height={55} className='object-contain mb-4' />
          <h4 className='text-gray-d font-montserrat text-xl font-bold mb-2'>Membership Organisations</h4>
          <p className='text-slate-gray font-montserrat'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center p-4'>
          <img src={nationalImage} alt="membership" width={55} height={55}   className='object-contain mb-4' />
          <h4 className='text-gray-d font-montserrat text-xl font-bold mb-2'>National Associations</h4>
          <p className='text-slate-gray font-montserrat'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center p-4'>
          <img src={clubsImage} alt="membership" width={55} height={55}  className='object-contain mb-4'  />
          <h4 className='text-gray-d font-montserrat text-xl font-bold mb-2'>Clubs And Groups</h4>
          <p className='text-slate-gray font-montserrat'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
