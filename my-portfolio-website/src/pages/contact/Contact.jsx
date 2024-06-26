import React from "react";
import { Button, Spinner } from "flowbite-react";
import { Alert } from "flowbite-react";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";
import { Await } from "react-router-dom";

const Contact = () => {
  const myAlert = document.querySelector(".my-alert");
  const btnKirim = document.querySelector(".btn-kirim");
  const btnLoading = document.querySelector(".btn-loading");
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
    });
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    btnLoading.classList.toggle("hidden");
    btnKirim.classList.toggle("hidden");
    console.log("Submitted");
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/adityamuhammad/google_sheets/zVDivjWZDLQMAGKC?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      // tampilkan tombol kirim dan hilangkan tombol loading
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      // tampilkan alert
      myAlert.classList.toggle("hidden");
      setData({ ...data, name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

  // const Submit = (e) => {
  //   const formEle = document.querySelector("form");
  //   e.preventDefault();

  //   // ketika tombol submit di klik
  //   // tampilkan tombol loading dan hilangkan tombol kirim
  //   btnKirim.classList.toggle("hidden");
  //   btnLoading.classList.toggle("hidden");

  //   console.log("Submitted");
  //   const formData = new FormData(formEle);
  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbxleitptUKKm8MhvWqd0YievmEg7xvby5pkn5amLEjtEEZ3UHbWHXOfj-EeVib8eL6i6A/exec",
  //     { method: "POST", body: formData }
  //   )
  //     .then((response) => {
  //       // tampilkan tombol kirim dan hilangkan tombol loading
  //       btnLoading.classList.toggle("hidden");
  //       btnKirim.classList.toggle("hidden");
  //       // tampilkan alert
  //       myAlert.classList.toggle("hidden");
  //       // reset form nya
  //       formEle.reset();
  //       console.log("Success!", response);
  //     })
  //     .catch((error) => {
  //       console.error("Error!", error.message);
  //     });
  // };

  return (
    <>
      <div className="">
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
            <section id="contact" className=" pt-20 pb-10 px-6">
              <div className="container">
                <div className="w-full px-4">
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="contact-form max-w-xl mx-auto text-center mn-16"
                  >
                    <h2 className="font-semibold text-gray-300  mb-4 text-xl lg:text-2xl">
                      Contact Me :
                    </h2>
                  </div>
                </div>
                <div>
                  <form
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="form m-8"
                    onSubmit={handleSubmit}
                    // onSubmit={(e) => Submit(e)}
                  >
                    <Alert
                      className="my-alert hidden mb-8 lg:w-2/3 lg:mx-auto"
                      color="success"
                      onDismiss={() => alert("Alert dismissed!")}
                    >
                      <span className="font-medium ">Thank You!</span> We have
                      received your message.
                    </Alert>
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                      <div className="w-full mb-8">
                        <label
                          htmlFor="name"
                          className="text-base font-bold text-gray-300"
                        >
                          Name
                        </label>
                        <input
                          placeholder="name"
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          className="w-full bg-gray-100  p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-slate-300"
                        ></input>
                      </div>
                      <div className="w-full mb-8">
                        <label
                          htmlFor="email"
                          className="text-base font-bold text-gray-300"
                        >
                          Email
                        </label>
                        <input
                          placeholder="email"
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          className="w-full bg-gray-100  p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-slate-300"
                        ></input>
                      </div>
                      <div className="w-full mb-8">
                        <label
                          htmlFor="message"
                          className="text-base font-bold text-gray-300"
                        >
                          Message
                        </label>
                        <textarea
                          placeholder="Message"
                          type="text"
                          name="message"
                          value={message}
                          onChange={handleChange}
                          className="w-full bg-gray-100  p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-slate-300 h-32"
                        ></textarea>
                      </div>
                      <div className="w-full ">
                        <div className="flex flex-row gap-3">
                          <button
                            type="submit"
                            className="btn-kirim text-base font-semibold text-gray-300 bg-slate-500  px-4 py-2 rounded-md  hover:opacity-80 hover:shadow-lg transition duration-500 "
                          >
                            Submit
                          </button>
                          <Button className=" btn-loading bg-slate-500 hidden">
                            <Spinner
                              aria-label="Spinner button example"
                              size="sm"
                            />
                            <span className="pl-3">Loading...</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            <div className=" pt-5">
              <div className="address mx-auto">
                <p className="text-center text-gray-300 font-semibold text-xl lg:text-2xl">
                  Address :
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.5623771244768!2d110.45354426854661!3d-6.967213650988295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f336ee3f8365%3A0xdc5db2277af55a43!2s2FM3%2B3HR%2C%20RT.04%2FRW.XII%2C%20Muktiharjo%20Kidul%2C%20Kec.%20Pedurungan%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1714187638262!5m2!1sid!2sid"
                  className=" bg-repeat bg-cover p-14"
                  width="100%"
                  height="500"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
