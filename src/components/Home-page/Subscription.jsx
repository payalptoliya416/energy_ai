import React from 'react';

const Subscription = () => {
  return (
    <section
      className="relative text-center bg-cover bg-center"
      style={{ backgroundImage: `url('./subscription-bg.png')`, marginTop: '0px' }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative container mx-auto px-6">
          <h1
            className="text-[19px] xs:text-[22px] sm:text-[34px] md:text-[36px] pt-[19px] xs:pt-[22px] sm:pt-[34px] md:pt-[45px] font-bold"
            style={{ color: '#FFD200' }}
          >
            Unleash Your True Potential
          </h1>
          <h3 className="mb-6 pt-[19px] xs:pt-[22px] sm:pt-[34px] md:pt-[22px] text-[20px] xs:text-[22px] sm:text-[26px] md:text-[28px] leading-[27px]">Activate Your Quantum Energy and Energize Your Life Today!</h3>
          <p className="text-[16px] xs:text-[16px] sm:text-[16px] md:text-[18px] pt-[22px] leading-[27px]">
              Elevate your vitality and well-being with our Quantum Energy Service. Experience continuous serenity and 
          </p>
          <p className='text-[16px] xs:text-[16px] sm:text-[16px] md:text-[18px] pb-[22px]'>relaxation by connecting yourself, your pets, and your spaces to the quantum energy field.</p>
          <div className='pb-[45px]'>
          <button style={{ backgroundColor: '#FFD200' }} className="text-[#fff] border border-[#FFD200] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#FFD200] hover:text-white transition duration-300">
            START YOUR FREE 30-DAY TRIAL ➜
          </button>
        </div>
        </div>
    </section>
  );
};

export default Subscription;