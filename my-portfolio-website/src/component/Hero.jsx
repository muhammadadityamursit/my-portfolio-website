import React from "react";
import Logo1 from "../static/images/adityaa.jpg";

const Hero = () => {
  return (
    <div className=" ">
      <div>
        <div className="relative  isolate px-6 pt-14 lg:px-8">
          <div>
            <div>
              <div className=" flex items-center justify-center mt-24">
                <img
                  className=" rounded-full hover:scale-125 duration-700"
                  width="250"
                  src={Logo1}
                  alt="adityaa"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-2xl sm:py-12 lg: py-20">
            <div className="hero-one flex flex-wrap justify-center">
              <h1 className=" font-semibold text-xl text-center text-gray-300 lg:text-2xl">
                Hello, I'm Muhammad Aditya Mursyid{" "}
              </h1>
            </div>
            <div className="hero-two text-center mt-8">
              <h2 className="text-3xl font-bold  text-gray-100 lg:text-4xl ">
                Front-End Web Developer
              </h2>
              <div className="hero-three flex flex-wrap justify-center">
                <h3 className=" text-gray-500 text-sm lg:text-base">
                  Frontend web developer - ReactJS developer
                </h3>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://wa.me/qr/JGIPWFVXWHBTB1"
                  target="_blank"
                  className="rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's Talk !
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
