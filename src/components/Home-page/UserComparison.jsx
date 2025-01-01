import React from "react";

const UserComparison = () => {
  const data = [
    { title: "Sleep", nonUsers: 50, users: 90, nonUsersColor: '#D0D6F5', usersColor: '#6219A4' },
    { title: "Remove Stress and Anxiety", nonUsers: 40, users: 85, nonUsersColor: '#D0D6F5' ,usersColor: '#2CA5A6' },
    { title: "Elevate Mood", nonUsers: 30, users: 95, nonUsersColor: '#D0D6F5' ,usersColor: '#2DA06F' },
    { title: "Focus and Motivation", nonUsers: 60, users: 90, nonUsersColor: '#D0D6F5' ,usersColor: '#CCAC2A' },
    { title: "Energy", nonUsers: 35, users: 85, nonUsersColor: '#D0D6F5' ,usersColor: '#CE8534' },
    { title: "Meditation", nonUsers: 50, users: 80, nonUsersColor: '#D0D6F5' ,usersColor: '#C62A39' },
  ];

  return (
    <section className="relative bg-blue-50 pb-[180px] pt-[110px] mt-[4rem]">
      <div className="container mx-auto px-6"> 
        <div className="usercomparison flex items-center justify-center text-center text-[32px] xs:text-[15px] sm:text-[50px] md:text-[26px] font-bold gap-[15rem] xs:gap-[14rem] sm:gap-[14rem] md:gap-[15rem]">
          <span className="comparison pl-[124px] xs:pl-[61px] sm:pl-[235px] md:pl-[108px]">Non-Users</span>
          <span className="comparison">QIENERGY.AI USERS</span>
        </div>

        <div className="relative flex flex-col items-center space-y-8 pt-[6rem]">
          {data.map((item, index) => (
            <div key={index} className="category flex items-center space-x-6 w-full gap-[12rem]">
            <div className="relative w-full h-6 rounded-full" style={{ backgroundColor: '#E8EFF9' }}>
              <div className="absolute top-0 h-6 bg-gradient-to-r rounded-full"
                  style={{
                    width: `${item.nonUsers}%`,
                    backgroundColor: `${item.nonUsersColor}`,
                    right: 0,
                    transformOrigin: "right",
                  }}
                ></div>
              </div>

              <div className="relative w-full h-6 rounded-full" style={{ backgroundColor: '#E8EFF9'}}>
                <div
                  className="absolute left-0 top-0 h-6 bg-gradient-to-r rounded-full"
                  style={{ width: `${item.users}%`,
                          backgroundColor: `${item.usersColor}`
                        }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute mt-[-11rem] left-1/2 transform -translate-x-1/2 -translate-y-[50%] bg-white rounded-md pt-[4rem] pb-8 text-center h-[650px] w-[175px] xs:w-[235px] sm:w-[235px] md:w-[235px] px-6 shadow-xl">
          <h4 className="text-4xl font-semibold text-[#001B48] mb-6">
            VS
          </h4>
          <h4 className="text-xl font-semibold text-[#001B48] mb-6">
            Wellness Assessments
          </h4>
          <ul className="space-y-4">
            <li className="text-xl font-normal text-[#001B48]">SLEEP</li>
            <li className="text-xl font-normal text-[#001B48]">REMOVE STRESS AND ANXIETY</li>
            <li className="text-xl font-normal text-[#001B48]">ELEVATE MOOD</li>
            <li className="text-xl font-normal text-[#001B48]">FOCUS AND MOTIVATION</li>
            <li className="text-xl font-normal text-[#001B48]">ENERGY</li>
            <li className="text-xl font-normal text-[#001B48]">MEDITATION</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserComparison;
