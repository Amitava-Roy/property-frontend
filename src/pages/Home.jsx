import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchProperties } from "../api-services.js/property";
import { useForm } from "react-hook-form";
import Properties from "../components/Properties";
import Spinner from "../components/Spinner";

function Home() {
  const [range, setRange] = useState(2000);
  const { register, handleSubmit, reset } = useForm();
  const { data, isLoading, error } = useQuery({
    queryKey: ["property"],
    queryFn: fetchProperties,
  });
  const [showData, setShowData] = useState();
  const [filter, setFilter] = useState(false);

  let filteredProperty;

  function onSubmit(value) {
    setFilter(true);
    if (data.data) {
      //location filter
      if (value.location !== "none") {
        filteredProperty = data.data.filter(
          (item) => item.location === value.location
        );
      } else {
        filteredProperty = data.data;
      }

      //Date filter
      if (value.calender !== "") {
        filteredProperty = filteredProperty.filter(
          (item) => {
            const movingDate = new Date(
              item.movingDate
            ).getTime();
            const filterDate = new Date(
              value.calender
            ).getTime();
            console.log(
              new Date(item.movingDate).toDateString(),
              new Date(value.calender).toDateString()
            );
            return filterDate > movingDate ? true : false;
          }
        );
      }
      //Price filter
      if (typeof range === "string") {
        filteredProperty = filteredProperty.filter(
          (item) => item.price <= Number(range)
        );
      }
      console.log("befor data", filteredProperty);

      if (value.type !== "none") {
        filteredProperty = filteredProperty.filter(
          (item) => item.type === value.type
        );
      }
      setShowData(filteredProperty);
      // console.log("data", filteredProperty);
      //change button
    }
  }
  return (
    <div className="w-10/11 md:p-2 md:w-4/5  m-auto md:mt-6 gap-3">
      <h4 className="mb-2 font-normal text-lg text-slate-600">
        Serch Propertties for Rent
      </h4>
      <div className="bg-gray-200/60 md:p-4 rounded-lg">
        <form
          className="flex flex-wrap flex-col md:flex-row items-center gap-6 md:gap-0 justify-between divide-x"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col ">
            <label htmlFor="city"> city</label>
            <select
              name="location"
              {...register("location")}
              defaultValue={"none"}
              id="city"
            >
              <option value={"none"} hidden>
                Select Location
              </option>
              <option value={"andheri"}>
                Andheri, Mumbai
              </option>
              <option value={"navi"}>Navi Mumbai</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="calender">
              Select Moving Date
            </label>
            <input
              name="calender"
              type="date"
              id="calender"
              {...register("calender")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="priceRange">
              Select Price Range
            </label>
            <input
              value={range}
              onChange={(e) => {
                setRange(e.target.value);
              }}
              name="price"
              type="range"
              min={2000}
              max={10000}
              step={1000}
              id="priceRange"
              // {...register("price")}
            />
            <span>less than{range}</span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Property Type</label>
            <select
              defaultValue={"none"}
              {...register("type")}
            >
              <option value={"none"} hidden>
                Select Property Type
              </option>
              <option value="2bhk"> 2 BHK</option>
              <option value="3bhk"> 3 BHK</option>
              <option value="4bhk"> 4 BHK</option>
            </select>
          </div>
          <button
            className=" self-center px-4 py-2 rounded-[20px] bg-blue-600 font-bold text-slate-100 "
            type="submit"
          >
            Apply
          </button>
        </form>
      </div>
      {isLoading && <Spinner />}
      <Properties data={data?.data} showData={showData} />
    </div>
  );
}

export default Home;
