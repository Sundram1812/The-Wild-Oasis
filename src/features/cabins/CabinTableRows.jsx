import React from "react";

function CabinTableRows({ cabin }) {
  console.log(cabin);

  const { name, maxCapacity, regularPrice, image, discount } = cabin;
//   grid-cols-[8rem_8rem_1fr_8rem_8rem_8rem]
  return (
    <div className=" grid grid-cols-[.5fr_.8fr_1.5fr_.8fr_.8fr_.7fr] justify-between  items-center bg-white gap-6 py-6 sm:py-7 md:py-3 lg:py-0">

      <img src={image} alt="cabin" width={"120rem"} height={'100%'} className="" />
      <div className="w-full h-auto text-sm flex items-center">
        <span className="text-grey-700 font-semibold">{name}</span>
      </div>

      <div className="h-[30px] w-full text-sm flex items-center">
        <span className="font-semibold text-gray-700">Fits upto {maxCapacity} guests</span>
      </div>

      <div className="h-[30px] w-full text-sm flex items-center">
        <span className="text-xs font-bold">${regularPrice}</span>
      </div>

      <div className="h-[30px] w-full text-sm flex items-center">
        <span className="text-xs font-bold text-green-600">${discount}</span>
      </div>

      <div className="h-[30px] w-full text-sm self-center text-start">
        <button className="text-xs font-semibold uppercase border border-grey-300 bg-red-50 rounded-md px-6 py-1">DELETE</button>
      </div>
    </div>
  );
}

export default CabinTableRows;
