import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="">
      <Navbar fluid className=" px-2 bg-slate-800 border-b-2">
        <Navbar.Brand className="px-8">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <a
              href="https://github.com/muhammadadityamursit"
              className=" text-gray-300"
            >
              Muhammad Aditya Mursyid
            </a>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="z-50" />
        <Navbar.Collapse className="px-8 z-50">
          <Link
            className="px-2 py-1 rounded-md text-gray-300  hover:bg-slate-400 hover:text-white hover:transition ease-out duration-700 "
            to="/"
          >
            Home
          </Link>
          <Link
            className="px-2 py-1 rounded-md text-gray-300 hover:bg-slate-400 hover:text-white hover:transition ease-out duration-700 "
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="px-2 py-1 rounded-md text-gray-300  hover:bg-slate-400 hover:text-white hover:transition ease-out duration-700 "
            to="/contact"
          >
            Contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
