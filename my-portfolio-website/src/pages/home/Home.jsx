import React from "react";
import Hero from "../../component/Hero";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

const Home = () => {
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
        <Hero />
      )}
    </div>
  );
};

export default Home;
