import React from 'react';

const Hero = () => {
  return (
    <section className="mt-[-90px] bg-center h-screen w-screen text-white flex items-center" 
      style={{
        backgroundImage: `url('./hero-BG.png')`,
        backgroundSize: '100% 100%',
      }}
    >
    <div className="container mx-auto">
    <div className="pt-[114px] pl-[32px] sm:pl-[50px] md:pl-[40px]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8 xl:col-span-6">
          <h2 className='text-[32px] xs:text-[38px] sm:text-[50px] md:text-[65px] leading-[40px] xs:leading-[48px] sm:leading-[60px] md:leading-[95px] font-semibold mb-[20px] sm:mb-[25px]'>Receive Unlimited</h2>
          <h2 className='text-[32px] xs:text-[38px] sm:text-[50px] md:text-[65px] leading-[40px] xs:leading-[48px] sm:leading-[60px] md:leading-[95px] font-semibold mb-[20px] sm:mb-[25px]'>Quantum Healing</h2>
          <p className='text-[20px] sm:text-[26px] md:text-[36px] font-medium leading-[26px] sm:leading-[40px] md:leading-[54px] mb-[30px] sm:mb-[26px] md:mb-[30px]'>Heal Yourself, Heal The World…</p>
          <button className='py-[10px] sm:py-[16px] px-[26px] sm:px-[30px] flex items-center gap-[30px] border border-solid text-[#FFD200] border-[#FFD200] rounded-[50px] relative after:absolute after:top-0 after:h-full after:w-0 after:rounded-[50px] after:z-[-1] z-[1] after:left-0 after:transition-all after:duration-500 after:opacity-0 after:invisible after:bg-[#7d6c23] hover:after:w-full hover:text-white  after:content-[""] hover:after:visible hover:after:opacity-[1] text-lg sm:text-[20px] leading-[22px] sm:leading-[24px] font-semibold'>SIGN UP <img src="./arrow_yellow.png" alt="" /></button>
        </div>
      </div> 
    </div>
   </div>
    </section>
  );
};

export default Hero;