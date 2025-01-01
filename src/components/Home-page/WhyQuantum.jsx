import React from "react";

const WhyQuantum = () => {
  return (
    <section className="mt-[30px] sm:mt-[40px] md:mt-[70px] lg:mt-[70px] xl:mt-[60px] bg-yellow-50 overflow-hidden relative">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch h-full">
        {/* Left Side - Image */}
        <div className="relative h-full max-h-[1100px]">
          <img
            src="./WhyQuantum.png"
            alt="Meditation Banner"
            className="h-full w-full object-cover"
          />
          <img
              src="./WhyQuantum-icon.png"
              alt=""
              className="absolute -bottom-[13%] left-[39%] sm:left-[2%] md:left-[60%] md:-bottom-[8%] lg:left-[71%] lg:-bottom-[8%] xl:left-[78%] xl:-bottom-[8%] 2xl:-bottom-[4%] 2xl:left-[88%] w-[100px] sm:w-auto"
            />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col justify-center bg-yellow-50 px-12 py-8 max-h-[1100px] overflow-y-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Why Quantum Medicine Changes Everything...
          </h1>
          <div className="space-y-4">
            {[
              "Silent, Invisible, Limitless Energy",
              "100% Non-Invasive, No Pills, No Procedures",
              "Eco-Friendly - Zero Waste, Heals Environment",
              "Low-Cost Healthcare for Everyone",
              "Personalized Energy Broadcast Settings",
              "Turn Your Phone's EMF's into beneficial energy",
              "Send or Receive it Anywhere in the World - INSTANTLY",
              "No equipment is needed other than your phone or computer",
              "It's Easy and Effective",
              "You can leave it on 24/7 (Set and forget)",
              "You can schedule it according to your daily routine",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src="./round-arrow.png" alt="" />
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
          <button
            className="text-white font-semibold mt-[30px] px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 w-full md:w-80 WhyQuantumBtn"
            style={{ backgroundColor: "#FFD200" }}
          >
            START YOUR FREE 30-DAY TRIAL ➜
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyQuantum;
