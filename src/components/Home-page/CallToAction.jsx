import React from 'react';

const CallToAction = () => {
  return (
    <section
      className="relative text-white py-12 mt-[32px] xs:mt-[38px] sm:mt-[50px] md:mt-[65px] lg:mt-12 text-center bg-cover bg-center"
      style={{ backgroundImage: `url('./callAction.png')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-6">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          style={{ color: '#03F5F6' }}
        >
          QiEnergy.AI Sends Healing Energy Through Your Phone
        </h1>
        <p className="text-sm sm:text-md md:text-lg mb-6">
          Imagine tapping into a hidden energy source that rejuvenates your mind, body, and spirit.
          QiEnergy.AI does just that by connecting you to the power of quantum energy, filling your
          life with positive vibrations and shielding you from the stress and negativity that modern
          life brings.
        </p>
        <button className="text-[#03F5F6] border border-[#03F5F6] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#03F5F6] hover:text-white transition duration-300">
          START YOUR FREE 30-DAY TRIAL ➜
        </button>
        
      </div>
    </section>
  );
};

export default CallToAction;
