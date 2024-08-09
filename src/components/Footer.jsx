import React from 'react';
import footerLogoImage from '../assets/icons/footerLogo.png';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className='max-container flex'>
      <div className="flex flex-row justify-between items-start flex-wrap gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogoImage} alt="Footer Logo" width={150} height={46} />
          </a>
          <p className='text-white-400 text-medium font-montserrat mt-5'>
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className='text-white-400 text-medium font-montserrat mt-5'>
            All Rights Reserved
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div key={index} className='flex justify-center items-center rounded-full bg-gray-blue h-8 w-8 cursor-pointer'>
                <img src={icon.src} alt={icon.alt} width={16} height={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-wrap justify-evenly gap-20 lg:gap-10">
        {footerLinks.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h4 className='text-white-400 text-medium font-montserrat text-3xl '>
              {section.title}
            </h4>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li className='text-white-400 mt-3 font-montserrat leading-normal cursor-pointer' key={linkIndex}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex-1 '>
        <h3 className='text-white-400 text-medium font-montserrat text-3xl '>Stay Up To Date</h3>
        <input
          type="text"
          placeholder='Your Email Address'
          className=' text-secondary bg-gray-blue rounded-lg p-2 w-[350px] hover:border-primary'
        />
      </div>
    </footer>
  );
}

export default Footer;
