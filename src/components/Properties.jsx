import React from "react";
import Card from "./ui/Card";

function Properties({ data = [], showData }) {
  const loopData = showData ? showData : data;
  return (
    <ul className=" mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {loopData.map((item) => (
        <li key={item._id}>
          <Card property={item} />
        </li>
      ))}
    </ul>
  );
}

export default Properties;
