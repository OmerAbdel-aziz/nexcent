import clientLogo from '../assets/icons/clientLogo.png'
import clientLogoI from '../assets/icons/clientLogoI.png'
import clientLogoII from '../assets/icons/clientLogoII.png'
import clientLogoIII from '../assets/icons/clientLogoIII.png'
import clientLogoIV from '../assets/icons/clientLogoIV.png'
import clientLogoV from '../assets/icons/clientLogoV.png'
import basketImage from '../assets/icons/basket.png';
import instagramImage from '../assets/icons/instagram.png';
import twitterImage from '../assets/icons/twitter.png';
import youtubeImage from '../assets/icons/youtube.png';



export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#features", label: "Features" },
  { href: "#products", label: "Products" },
  { href: '#testimonial', label: "Testimonial" },
  { href: "#faqs", label: "FAQs" },
];

export const clients = [
  { src: clientLogo, alt: "client logo 1" },
  { src: clientLogoI, alt: "client logo 2" },
  { src: clientLogoII, alt: "client logo 3" },
  { src: clientLogoIII, alt: "client logo 4" },
  { src: clientLogoIV, alt: "client logo 5" },
  { src: clientLogoV, alt: "client logo 3" },
   
];

export const footerLinks = [
  {
      title: "Company",
      links: [
          { name: "About us", link: "/" },
          { name: "Blog", link: "/" },
          { name: "Contact us", link: "/" },
          { name: "Pricing", link: "/" },
          { name: "Testimonial", link: "/" },
           
      ],
  },
  {
      title: "Support",
      links: [
          { name: "Help Center", link: "/" },
          { name: "Terms Of Service", link: "/" },
          { name: "Legal", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
  },
  
];

export const socialMedia = [
  { src: basketImage, alt: "basket logo" },
  { src: twitterImage, alt: "twitter logo" },
  { src: instagramImage, alt: "instagram logo" },
  { src: youtubeImage, alt: "youtube logo" },
];
