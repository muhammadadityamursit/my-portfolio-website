import React from "react";

const Hero = () => {
  return (
    <div className=" ">
      <div className="bg-slate-800">
        <div className="relative  isolate px-6 pt-14 lg:px-8">
          <div>
            <div>
              <div className=" flex items-center justify-center mt-24">
                <img
                  className=" rounded-full hover:scale-125 duration-700"
                  width="250"
                  src="../public/adityaa.jpg"
                  alt="adityaa"
                />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu  overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative  left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8D8991] to-[#C2BBBA] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl sm:py-12 lg: py-20">
            <div className="flex flex-wrap justify-center">
              <div className="font-semibold text-xl text-gray-300 lg:text-2xl">
                Hello, I'm Muhammad Aditya Mursyid{" "}
              </div>
            </div>
            <div className="text-center mt-8">
              <h1 className="text-3xl font-bold  text-gray-100 lg:text-4xl ">
                Front-End Web Developer
              </h1>
              <div className="flex flex-wrap justify-center">
                <div className=" text-gray-500 lg:text-sm sm:text-base">
                  Frontend web developer - ReactJS developer
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://wa.me/qr/JGIPWFVXWHBTB1"
                  className="rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's Talk !
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8D8991] to-[#C2BBBA] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
