import React, { useState } from 'react';
import nexcetlogoImage from '../assets/icons/nexcetlogo.png';
import { navLinks } from '../constants';
import Button from '../sub-components/Button';
import TransparentButton from '../sub-components/TransparentButton';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='padding-x py-8 z-10 absolute w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={nexcetlogoImage} alt="Nexcet Logo" width={130} height={30} />
        </a>
        <ul className='hidden lg:flex flex-1 justify-end items-center gap-8'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className='font-montserrat leading-normal text-lg hover:text-primary'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden lg:flex items-center justify-evenly ml-20 gap-5'>
          <TransparentButton label="Log in" />
          <Button label="Sign up" />
        </div>
        {/* Mobile menu button */}
        <div className='lg:hidden flex items-center gap-5'>
          <button
            className='text-gray-500 hover:text-primary focus:outline-none'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Menu icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='lg:hidden p-6 bg-white absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl shadow-lg'>
          <ul className='flex flex-col items-center gap-4'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className='font-montserrat leading-normal text-lg hover:text-primary'>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex flex-col items-center gap-4 mt-4'>
            <TransparentButton label="Log in" />
            <Button label="Sign up" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
