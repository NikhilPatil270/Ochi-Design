import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-30 md:mt-40  px-6 md:px-20">
        {["We Create", "eye opening", "presentations"].map((item, index) => {
          return <div className="masker">
                <div key={index} className='w-fit flex items-center font-["FoundersGrotesk-Semibold"]'>

                <h1 className='text-[7.5vw]  md:text-9xl
                leading-[3rem]
                sm:text-6xl sm:leading-[3rem] xl:leading-[7vw] lg:leading-[6rem] tracking-tight uppercase '>{item}</h1>
            </div>
          </div>;
        })}
      </div>
      <div
        className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center px-6 md:px-20 py-2
        "
      >
        {[
          "For public and private companies",
          "From the first ptich to IPO",
        ].map((item, index) => (
          <p key={index} className="tracking-tight leading-none font-light ">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className=" uppercase rounded-full border py-1 px-2 border-zinc-700 hover:bg-white hover:text-black font-light  text-md">
            Start the project
          </div>
          <div className="w-8 h-8 flex items-center justify-center font rounded-full border border-zinc-700">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
