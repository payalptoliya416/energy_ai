import React from "react";

const WhoToSendEnergy = () => {
  const options = [
    { title: "Yourself", image: "./yourself.png"},
    { title: "Friends and Family", image: "./friends-family.png"},
    { title: "Home", image: "./home.png"},
    { title: "Business", image: "./business.png"},
    { title: "Pets", image: "./pets.png"},
    { title: "Clients", image: "./clients.png"},
    { title: "Plants", image: "./plants.png"},
    { title: "Water", image: "./water.png"},
  ];

  return (
    <section className=" bg-white mt-[50px] sm:mt-[40px] md:mt-[60px] lg:mt-[90px] xl:mt-[90px]">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
          Who Can You Send Energy To?
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="text-center rounded-lg shadow-md pt-0 pb-4"
            >
              <div className="relative icon">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-gray-800 text-center text-2xl mt-8">{option.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
            <button 
              className="font-semibold mt-[40px] px-6 py-3 text-center rounded-full shadow-md w-120 mx-auto"
              style={{ color: "#FFD200", border: "1px solid #FFD200" }}
            >
              START YOUR FREE 30-DAY TRIAL ➜
            </button>
          </div>
      </div>
    </section>
  );
};

export default WhoToSendEnergy;