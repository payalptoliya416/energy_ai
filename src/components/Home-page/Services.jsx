import React from 'react';

const Services = () => {
  return (
    <section
      className="pt-16 bg-gray-50 h-auto bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('./services-bg.jpg')` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative flex justify-center">
          <img
            src="./services_banner.png"
            alt="Meditation Banner"
            className="rounded-lg w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]"
          />
        </div>

        <div>
          <div className="space-y-12">
            <div className="flex items-start gap-4 sm:gap-6 xl:gap-8">
              <img
                src="./science-proven.png"
                alt="Microscope Icon"
                className="h-12 w-12 sm:h-16 sm:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24"
              />
              <div>
                <h3 className="text-lg sm:text-xl xl:text-2xl font-bold">
                  Scientifically Proven
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base xl:text-lg">
                  Backed by Research and Experts Worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6 xl:gap-8">
              <img
                src="./exercise.png"
                alt="Healers Icon"
                className="h-12 w-12 sm:h-16 sm:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24"
              />
              <div>
                <h3 className="text-lg sm:text-xl xl:text-2xl font-bold">
                  Trusted by Energy Healers
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base xl:text-lg">
                  Used by practitioners around the globe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6 xl:gap-8">
              <img
                src="./cutting-edge-1.png"
                alt="Technology Icon"
                className="h-12 w-12 sm:h-16 sm:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24"
              />
              <div>
                <h3 className="text-lg sm:text-xl xl:text-2xl font-bold">
                  Industry Leading Technology
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base xl:text-lg">
                  Patent-Pending Precision Engineering.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6 xl:gap-8">
              <img
                src="./thrive-community-1.png"
                alt="Community Icon"
                className="h-12 w-12 sm:h-16 sm:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24"
              />
              <div>
                <h3 className="text-lg sm:text-xl xl:text-2xl font-bold">
                  Thriving Community
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base xl:text-lg">
                  Join Life-Transforming Thousands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
