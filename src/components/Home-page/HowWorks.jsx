import React from 'react';

const HowWorks = () => {
  return (
    <section className="pt-[25px] xs:pt-[38px] sm:pt-[50px] md:pt-[90px]">
      <div className="grid grid-cols-12">
        {/* Left Section */}
        <div
          className="col-span-12 lg:col-span-6 order-2 lg:order-1"
          style={{
            backgroundImage: `url('./how-work-bg.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="py-[70px] px-[50px] xl:pt-[70px] xl:ps-[135px] xl:pe-[50px] xl:pb-[70px]">
            <h2 className="text-[24px] xs:text-[30px] sm:text-[40px] 2xl:text-[46px] leading-[28px] xs:leading-[34px] sm:leading-[46px] font-semibold mb-[25px]">
              How QiEnergy.Ai Works
            </h2>
            <p className="text-base sm:text-lg leading-lg sm:leading-[30px] font-light mb-[30px]">
              Usually, we think energy moves straight from one point to another. But there's a special kind of energy
              called quantum energy that doesn't follow this rule. It works in a more amazing way that can connect
              things no matter how far apart they are.
            </p>
            <p className="text-base sm:text-lg leading-lg sm:eading-[30px] font-light mb-[30px]">
              This special connection is called quantum entanglement. It's like an invisible link between two things. If
              something happens to one, the other one feels it too, even if they're really far away. This is why
              sometimes a mom can just "know" when her child needs her, even if they're not together.
            </p>
            
            <button
              className="py-[8px] sm:py-[16px] px-[20px] sm:px-[30px] flex items-center gap-[10px] sm:gap-[30px] border border-solid text-[#fff] border-[#FFD200] rounded-[50px] text-xs sm:text-[20px] leading-lg sm:leading-[24px]"
              style={{ backgroundColor: '#FFD200' }}
            >
              Start Your Free 30-Day Trial
              <img src="./arrow.png" alt="" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <div className="relative h-full">
            <img src="./hard.png" alt="" className="object-cover w-full h-full" />
            <img
              src="./rounded.png"
              alt=""
              className="absolute -bottom-[13%] left-[39%] sm:left-[2%] md:left-[34%] md:-bottom-[19%] lg:-left-[26%] lg:-bottom-[8%] xl:-left-[18%] xl:-bottom-[8%] 2xl:-bottom-[4%] 2xl:-left-[10%] w-[100px] sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
