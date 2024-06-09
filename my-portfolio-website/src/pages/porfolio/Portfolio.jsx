import React from "react";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import Logo2 from "../../static/images/bootstrap.png";
import Logo3 from "../../static/images/css.png";
import Logo4 from "../../static/images/github.png";
import Logo5 from "../../static/images/html.png";
import Logo6 from "../../static/images/js.png";
import Logo7 from "../../static/images/react.png";
import Logo8 from "../../static/images/react1.png";
import Logo9 from "../../static/images/react2.png";
import Logo10 from "../../static/images/tailwind.png";
import Logo11 from "../../static/images/project 1.png";
import Logo12 from "../../static/images/Project 2.png";
import Logo13 from "../../static/images/Project3.png";
import Logo14 from "../../static/images/warung-profile.jpg";
import "../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
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
        <div>
          <div className="relative isolate px-6 pt-14 lg:px-8">
            {/* <div
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
            </div> */}
          </div>
          <div>
            <div className="">
              <div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="skill flex justify-center items-center"
                >
                  <p className=" text-gray-300 font-semibold mb-8 mt-10 lg:text-2xl sm:text-xl">
                    My Skill :
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="flex flex-wrap justify-center items-center"
              >
                <div className="  m-5  ">
                  <img className=" mx-auto rounded-md" src={Logo5} alt="html" />
                  {/* <p className="text-center  text-slate-400 mt-2 p-4">HTML</p> */}
                </div>
                <div className="  m-5">
                  <img className="mx-auto rounded-md  " src={Logo3} alt="css" />
                  {/* <p className="text-center  text-slate-400 mt-2 p-4">CSS</p> */}
                </div>
                <div className="  m-5">
                  <img className="mx-auto rounded-md " src={Logo6} alt="js" />
                  {/* <p className="text-center  text-slate-400 mt-2 p-4">
                    JAVASCRIPT
                  </p> */}
                </div>
                <div className="  m-5">
                  <img
                    className="mx-auto rounded-md "
                    src={Logo7}
                    alt="react"
                  />
                  {/* <p className="text-center text-slate-400 mt-2 p-4">
                    REACT JS
                  </p> */}
                </div>
                <div className="  m-5">
                  <img
                    className="mx-auto rounded-md "
                    src={Logo4}
                    alt="github"
                  />
                  {/* <p className="text-center text-slate-400 mt-2 p-4">GITHUB</p> */}
                </div>
                <div className="  m-5">
                  <img
                    className="mx-auto rounded-md "
                    src={Logo2}
                    alt="bootstrap"
                  />
                  {/* <p className="text-center text-slate-400 mt-2 p-4">
                    BOOTSTRAP
                  </p> */}
                </div>
                <div className=" m-5">
                  <img
                    className=" mx-auto rounded-md "
                    src={Logo10}
                    alt="tailwind"
                  />
                  {/* <p className="text-center text-slate-400 mt-2 p-4">
                    TAILWIND CSS
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" mt-14">
              <div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="certificate flex flex-wrap justify-center items-center"
                >
                  <p className=" mb-5 text-gray-300 font-semibold lg:text-2xl sm:text-xl">
                    Certificate :
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                className=" flex flex-wrap justify-center items-center"
              >
                <div className=" p-14 hover:scale-110 duration-700">
                  <img
                    className=" rounded-md shadow-lg shadow-slate-500 mx-auto"
                    src={Logo8}
                    alt="react1"
                  />
                </div>
                <div className=" p-14 hover:scale-110 duration-700">
                  <img
                    className=" shadow-lg shadow-slate-500  rounded-md mx-auto"
                    src={Logo9}
                    alt="react2"
                  />
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000">
              <p className=" text-gray-300 font-semibold text-center p-3 lg:text-2xl sm:text-xl ">
                React JS frontend Web Developer
              </p>
              <p className=" text-gray-300 font-semibold text-center lg:text-xl sm:text-xl">
                SAN BERCODE 2022
              </p>
            </div>
            <div className=" mt-14">
              <div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="project flex flex-wrap justify-center items-center"
                >
                  <p className=" text-gray-300 font-semibold mt-10 lg:text-2xl sm:text-xl">
                    Latest Project :
                  </p>
                </div>
              </div>
              <div className=" p-10 flex flex-wrap justify-center items-center">
                <div
                  data-aos="zoom-in-up"
                  className=" bg-gray-200 m-5 rounded-lg w-[500px] hover:scale-110 duration-700"
                >
                  <img
                    className=" rounded-t-md shadow-lg shadow-slate-500 mx-auto  "
                    src={Logo11}
                    alt="project 1"
                  />
                  <p className=" text-slate-600 font-semibold text-center p-3 lg:text-xl sm:text-base ">
                    Authenticationss, Landing Page & Fetching Data Lowongan
                    Pekerjaan
                  </p>
                  <p className=" text-slate-600 font-semibold text-center lg:text-xl sm:text-xl ">
                    REACT JS
                  </p>
                </div>
                <div
                  data-aos="zoom-in-up"
                  className=" w-[500px] m-5 rounded-lg bg-gray-200 hover:scale-110 duration-700"
                >
                  <img
                    className=" shadow-lg shadow-slate-500  rounded-t-lg mx-auto"
                    src={Logo12}
                    alt="Project 2"
                  />
                  <p className=" text-slate-600 font-semibold text-center p-3 lg:text-xl sm:text-base ">
                    Authenticationss, Landing Page, Fetching Data, & Filter
                    Search Lowongan Pekerjaan
                  </p>
                  <p className=" text-slate-600 font-semibold text-center lg:text-xl md:text-base ">
                    REACT JS
                  </p>
                </div>
                <div
                  data-aos="zoom-in-up"
                  className="w-[500px] m-5 rounded-lg bg-gray-200 hover:scale-110 duration-700 "
                >
                  <img
                    className="  rounded-t-lg shadow-lg shadow-slate-500 "
                    src={Logo13}
                    alt="Project3"
                  />
                  <p className=" text-slate-600 font-semibold text-center p-3 lg:text-xl sm:text-xl ">
                    Landing Page Kopi Sehati dan Sejiwa
                  </p>
                  <p className=" text-slate-600 font-semibold text-center lg:text-xl sm:text-xl ">
                    HTML CSS JS
                  </p>
                </div>
                <div
                  data-aos="zoom-in-up"
                  className="w-[500px] m-5 rounded-lg bg-gray-200 hover:scale-110 duration-700 "
                >
                  <img
                    className="  rounded-t-lg shadow-lg shadow-slate-500 "
                    src={Logo14}
                    alt="Project3"
                  />
                  <p className=" text-slate-600 font-semibold text-center p-3 lg:text-xl sm:text-xl ">
                    Warung Profile - Bakso Sapi Setiakawan
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
