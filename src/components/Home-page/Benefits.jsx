import React from 'react';

const Benefits = () => {
  return (
    <section className="pt-[0px] sm:pt-[40px] md:pt-[30px] lg:pt-[30px] xl:pt-[60px] bg-no-repeat">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:gap-12">
        {/* Right Side - Image (Appears at the top on smaller screens) */}
        <div className="relative order-1 md:order-2">
          <img
            src="./benefits.png"
            alt="Meditation Banner"
            className="rounded-lg mx-auto w-full max-w-[100%] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]"
          />
        </div>

        {/* Left Side - Text (Appears below the image on smaller screens) */}
        <div className="order-2 md:order-1">
          <div className="space-y-6">
            {/* First Icon and Text */}
            <div className="flex items-start gap-6 md:gap-8">
              <img
                src="./ben-1.png"
                alt="Microscope Icon"
                className="h-20 md:h-24 lg:h-28 xl:h-32" // Increase icon size on larger screens
              />
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                  Silent, Powerful, and Boundless
                </h3>
                <p className="text-gray-600 mt-[20px] text-base md:text-lg lg:text-xl xl:text-2xl">
                  Tap into the invisible energy that reshapes your reality.
                </p>
              </div>
            </div>

            {/* Second Icon and Text */}
            <div className="flex items-start gap-6 md:gap-8">
              <img
                src="./ben-2.png"
                alt="Healers Icon"
                className="h-20 md:h-24 lg:h-28 xl:h-32" // Increase icon size on larger screens
              />
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                  Non-Invasive and Sustainable
                </h3>
                <p className="text-gray-600 mt-[20px] text-base md:text-lg lg:text-xl xl:text-2xl">
                  No pills or procedures, just eco-friendly energy that benefits both you and the environment.
                </p>
              </div>
            </div>

            {/* Third Icon and Text */}
            <div className="flex items-start gap-6 md:gap-8">
              <img
                src="./ben-3.png"
                alt="Technology Icon"
                className="h-20 md:h-24 lg:h-28 xl:h-32" // Increase icon size on larger screens
              />
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                  Anytime, Anywhere
                </h3>
                <p className="text-gray-600 mt-[20px] text-base md:text-lg lg:text-xl xl:text-2xl">
                  Experience the magic of instant energy transmission anywhere, anytime, with no special
                  equipment—just your phone or computer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
