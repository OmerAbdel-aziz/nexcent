import React from 'react';
import { clients } from '../constants';

const Clients = () => {
  return (
    <section className='max-container flex flex-col items-center py-12'>
      <div className='text-center mb-8'>
        <h3 className='text-gray-d font-montserrat text-3xl font-bold mb-2'>Our Clients</h3>
        <p className='text-slate-gray'>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className='flex flex-wrap justify-center gap-16'>
        {clients.map((client, index) => (
          <img src={client.src} alt={client.alt} key={index} className='w-12 h-12 object-contain' />
        ))}
      </div>
    </section>
  );
};

export default Clients;