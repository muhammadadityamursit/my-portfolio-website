import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Portfolio from "../pages/porfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import LayoutLanding from "../widges/LayoutLanding";

const RouteComponent = () => {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutLanding>
                <Home />
              </LayoutLanding>
            }
          />
          <Route
            path="/portfolio"
            element={
              <LayoutLanding>
                <Portfolio />
              </LayoutLanding>
            }
          />
          <Route
            path="/contact"
            element={
              <LayoutLanding>
                <Contact />
              </LayoutLanding>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteComponent;
