import React from "react";
import Button from "./Reusable/Button";
import Lottie from "lottie-react";
import heroImage from "../assets/Animation - 1713962820483.json";
import Resume from '../assets/Resume.pdf'

function Intro() {
  return (
    <div className="flex flex-col gap-y-6 lg:flex-row-reverse justify-between item-center">
      <div className="">
        <Lottie animationData={heroImage} className="w-full lg:w-[500px]" />
      </div>
      <div className="text-left  lg:h-96 flex flex-col justify-center px-2 lg:gap-y-4 gap-y-3 font-bold">
        <h1 className="text-6xl">Hii👋,</h1>
        <p className="text-5xl text-red-500">I am Manthan,</p>
        <p className="text-5xl">I love to build stuffs.</p>
        <p className=" font-normal text-left md:w-80 lg:w-96">
          I am 19 year old, doing BS in Computer Science, passionate about
          crafting innovative web apps, seeking an internship to further develop
          skills and contribute to the tech world's evolution.
        </p>
        <div>
          <button
            className="px-3 py-2 bg-blue-500 active:bg-blue-400 transition-all text-white"
          >
            <a href={Resume} download>
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
