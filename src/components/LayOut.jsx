import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { HiMiniBars3 } from "react-icons/hi2";

function LayOut() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text-base font-bold text-slate-700/100 tracking-wider flex justify-between p-4 md:p-8 bg-gray-200 items-center md:gap-6 ">
        <h1 className="text-2xl md:text-4xl">Logo</h1>
        <MobileNavbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="md:hidden"
        >
          <HiMiniBars3 />
        </div>
        <nav className=" hidden md:flex md:flex-grow md:justify-between">
          <NavLink className={` md:block`}>
            <span className="text-xl md:text-2xl font-thin">
              Home
            </span>
          </NavLink>

          <div className=" md:flex md:gap-4 ">
            <NavLink>
              <span className="py-4 px-6 bg-blue-600/100 rounded-xl text-slate-50 hover:bg-slate-50 hover:text-blue-600/100">
                Login
              </span>
            </NavLink>
            <NavLink>
              <span className="py-4 px-6 bg-slate-50 rounded-xl border-2 border-sky-700 text-blue-600 hover:text-slate-50 hover:bg-sky-600">
                Signup
              </span>
            </NavLink>
          </div>
        </nav>
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
}

export default LayOut;
