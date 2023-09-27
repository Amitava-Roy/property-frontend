import React from "react";
import { HiMiniWindow } from "react-icons/hi2";
import { HiCheckBadge } from "react-icons/hi2";
import { HiServerStack } from "react-icons/hi2";

function Card({ property }) {
  const is2Bhk = property.type === "2bhk" ? true : false;
  const locationString =
    property.location.slice(0, 1).toUpperCase() +
    property.location.slice(1) +
    `, Mumbai, India`;
  return (
    <div className="flex flex-row sm:flex-col w-full p-2 sm:p-0 sm:w-56  lg:w-60 rounded-lg overflow-hidden mb-6">
      <img
        className="h-48 w-[40%] sm:w-full object-fit"
        src={property.imgUrl}
      />
      <div className="flex justify-between md:justify-normal flex-col w-[60%] sm:w-auto flex-grow md:flex-col py-2 px-4 bg-gray-200/50">
        <p className="mb-2">
          <span className="text-blue-600/100 font-medium text-base ">
            ₹ {property.price}
          </span>
          <span className="text-xs text-slate-600/100 font-normal">
            /month
          </span>
        </p>
        <h4 className="font-bold text-lg text-slate-800">
          {property.name}
        </h4>
        <p className="font-light text-sm text-slate-500 mb-1">
          {locationString}
        </p>
        <div className="h-[2px] w-full bg-slate-500 mb-1 "></div>
        <div className="flex justify-between text-xs font-thin">
          <p className="flex items-center">
            <span className="mr-1">
              <HiMiniWindow />
            </span>
            {is2Bhk ? "2 beds" : "3 beds"}
          </p>
          <p className="flex items-center">
            <span className="mr-1">
              <HiCheckBadge />
            </span>
            {is2Bhk ? "1 bathroom" : "2 bathroom"}
          </p>
          <p className="flex items-center">
            <span className="mr-1">
              <HiServerStack />
            </span>
            {is2Bhk ? "5m" : "10m"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
