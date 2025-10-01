import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import logo from "../assets/img2.jpg"

const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-30 md:mt-40  px-6 md:px-20">
        {["We Create", "eye opening", "presentations"].map((item, index) => {
          return <div className="masker">
                <div key={index} className='w-fit flex items-center font-["FoundersGrotesk-Semibold"]'>
                  {index===1 && (<img className="w-[9vw] h-[6vw] mr-[1vw] rounded-md bg-red-500 relative top-[1.8vw] " src={logo} alt="logo" />)}
                  
                <h1 className='pt-[2vw] -mb-[1vw] text-[9vw] leading-[.65]  uppercase '>{item}</h1>
            </div>
          </div>;
        })}
      </div>
      <div
        className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-6 md:px-20 py-2
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
