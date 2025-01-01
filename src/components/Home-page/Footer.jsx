import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 pt-[45px]" style={{ backgroundColor: '#0d1b4c' }}>
      <div className="container mx-auto text-center">
        <p className="text-[14px] xs:text-[14px] sm:text-[14px] md:text-[18px] pb-6">QiEnergy.ai - All Rights Reserved</p>
        <p className="text-[14px] xs:text-[14px] sm:text-[14px] md:text-[18px] pb-6">Disclaimer - Privacy Policy - Terms Of Service</p>
        <p className="text-[14px] xs:text-[14px] sm:text-[14px] md:text-[18px]">QiEnergy.Ai products and services have not been evaluated by the FDA and are not intended to diagnose, treat, prevent, mitigate or cure any disease. Our programs </p>
        <p className="text-[14px] xs:text-[14px] sm:text-[14px] md:text-[18px]">assist in meditative practices. There are no guarantees concerning the level of success you may experience. The testimonials used may not apply to the purchaser and </p>
        <p className="text-[14px] xs:text-[14px] sm:text-[14px] md:text-[18px]">are not intended to guarantee that anyone will achieve the same or similar results. Each individual success depends on dedication, desire and motivation. Read our </p>
        <p className="text-[14px] xs:text-[14px] sm:text-[14px] md:text-[18px]">disclaimer page for full details.</p>
      </div>
    </footer>
  );
};

export default Footer;