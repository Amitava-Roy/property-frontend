import React from "react";
import { HiMiniXMark } from "react-icons/hi2";

function MobileNavbar({ isOpen, setIsOpen }) {
  function handleClose() {
    setIsOpen((state) => !state);
  }
  const state = !isOpen
    ? "translate-x-[-100%]  opacity-0"
    : "translate-x-[0%] opacity-1";
  return (
    <div
      className={`${state}  absolute w-screen h-screen  bg-slate-50/100 top-0 left-0 transition-all ease-linear duration-300  `}
    >
      <div
        onClick={handleClose}
        className="top-[1.5rem] right-[2.5rem] absolute"
      >
        <HiMiniXMark />
      </div>

      <ul className="mt-20 flex flex-col gap-8 justify-betwen items-center cursor-pointer ">
        <li>Home</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
