import React from "react";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

const Portfolio = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="w[100%] h-[100vh] ">
          <CircleLoader
            className=" mx-auto mt-64"
            color={"#328171"}
            loading={loading}
            size={60}
          />
        </div>
      ) : (
        <div className=" bg-slate-800">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#dfccd4] to-[#d5d4e4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div>
            <div className="">
              <div>
                <div className="flex justify-center items-center">
                  <p className=" text-gray-300 underline italic font-semibold mb-8 mt-10 lg:text-2xl sm:text-xl">
                    My Skill
                  </p>
                </div>
              </div>
              <div className=" flex flex-wrap justify-center items-center">
                <div className=" mr-4 ">
                  <img
                    className=" mx-auto rounded-sm"
                    src="../public/html.png"
                    alt="html"
                  />
                  <p className="text-center  text-slate-400 mt-2 p-4">HTML</p>
                </div>
                <div className=" mr-4">
                  <img
                    className="mx-auto rounded-sm  "
                    src="../public/css.png"
                    alt="html"
                  />
                  <p className="text-center  text-slate-400 mt-2 p-4">CSS</p>
                </div>
                <div className=" mr-4">
                  <img
                    className="mx-auto rounded-sm "
                    src="../public/js.png"
                    alt="html"
                  />
                  <p className="text-center  text-slate-400 mt-2 p-4">
                    JAVASCRIPT
                  </p>
                </div>
                <div className=" mr-4">
                  <img
                    className="mx-auto rounded-sm "
                    src="../public/react.png"
                    alt="html"
                  />
                  <p className="text-center text-slate-400 mt-2 p-4">
                    REACT JS
                  </p>
                </div>
                <div className=" mr-4">
                  <img
                    className="mx-auto rounded-sm "
                    src="../public/github.png"
                    alt="html"
                  />
                  <p className="text-center text-slate-400 mt-2 p-4">GITHUB</p>
                </div>
                <div className=" mr-4">
                  <img
                    className="mx-auto rounded-sm "
                    src="../public/bootstrap.png"
                    alt="html"
                  />
                  <p className="text-center text-slate-400 mt-2 p-4">
                    BOOTSTRAP
                  </p>
                </div>
                <div className="mr-4">
                  <img
                    className=" mx-auto rounded-sm "
                    src="../public/tailwind.png"
                    alt="html"
                  />
                  <p className="text-center text-slate-400 mt-2 p-4">
                    TAILWIND CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" mt-14">
              <div>
                <div className="flex flex-wrap justify-center items-center">
                  <p className=" text-gray-300 underline italic font-semibold lg:text-2xl sm:text-xl">
                    Certificate
                  </p>
                </div>
              </div>
              <div className=" flex flex-wrap justify-center items-center">
                <div className=" p-8 hover:scale-125 duration-700">
                  <img
                    className=" rounded-md shadow-lg shadow-slate-500 mx-auto"
                    src="../public/react1.png"
                    alt="html"
                  />
                </div>
                <div className=" p-8 hover:scale-125 duration-700">
                  <img
                    className=" shadow-lg shadow-slate-500  rounded-md mx-auto"
                    src="../public/react2.png"
                    alt="html"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className=" text-gray-300 font-semibold text-center p-3 lg:text-2xl sm:text-xl ">
                Sertifikat React JS frontend Web Developer
              </p>
              <p className=" text-gray-300 font-semibold text-center lg:text-xl sm:text-xl">
                SAN BERCODE 2022
              </p>
            </div>
            <div className=" mt-14">
              <div>
                <div className="flex flex-wrap justify-center items-center">
                  <p className=" text-gray-300 underline italic font-semibold mt-10 lg:text-2xl sm:text-xl">
                    Portfolio
                  </p>
                </div>
              </div>
              <div className=" p-10 flex flex-wrap justify-center items-center">
                <div className=" border bg-gray-200 m-10 rounded-lg w-[500px] hover:scale-125 duration-700">
                  <img
                    className=" rounded-t-md shadow-lg shadow-slate-500 mx-auto  "
                    src="../public/project 1.jpg"
                    alt="html"
                  />
                  <p className=" text-slate-600 font-semibold text-center p-3 lg:text-xl sm:text-xl ">
                    Authenticationss, Landing Page & Fetching Data Lowongan
                    Pekerjaan
                  </p>
                  <p className=" text-slate-600 font-semibold text-center lg:text-xl sm:text-xl ">
                    REACT JS
                  </p>
                </div>
                <div className=" w-[500px] m-10 rounded-lg bg-gray-200 hover:scale-125 duration-700">
                  <img
                    className=" shadow-lg shadow-slate-500  rounded-t-lg mx-auto"
                    src="../public/Project 2.jpg"
                    alt="html"
                  />
                  <p className=" text-slate-600 font-semibold text-center p-3 lg:text-xl sm:text-xl ">
                    Authenticationss, Landing Page, Fetching Data, & Filter
                    Search Lowongan Pekerjaan
                  </p>
                  <p className=" text-slate-600 font-semibold text-center lg:text-xl sm:text-xl ">
                    REACT JS
                  </p>
                </div>
                <div className="w-[500px] m-10 rounded-lg bg-gray-200 hover:scale-125 duration-700 ">
                  <img
                    className="  rounded-t-lg shadow-lg shadow-slate-500 "
                    src="../public/Project3.jpg"
                    alt="html"
                  />
                  <p className=" text-slate-600 font-semibold text-center p-3 lg:text-xl sm:text-xl ">
                    Landing Page Kopi Sehati dan Sejiwa
                  </p>
                  <p className=" text-slate-600 font-semibold text-center lg:text-xl sm:text-xl ">
                    HTML CSS JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
