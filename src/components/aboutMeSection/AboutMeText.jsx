import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        From crafting scalable backends to optimizing complex algorithms, I
        thrive on turning logic into seamless user experiences. With expertise
        in full-stack development, I build robust APIs, manage databases, and
        ensure performance stays top-notch. My DSA proficiency in C++ helps me
        break down problems efficiently, whether it's a coding challenge or a
        real-world bug. Passionate about clean code and system design, I believe
        every function should have a purpose—just like every semicolon.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</button>
    </div>
  );
};

export default AboutMeText;
