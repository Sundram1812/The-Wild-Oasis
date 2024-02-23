import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../services/apiCabins";
import CabinTableHeading from "../features/cabins/CabinTableHeading";
import CabinTableRows from "../features/cabins/CabinTableRows";

function Cabins() {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  console.log(cabins);
  if (isLoading) return <p>Loading...</p>;
  if(error)return <p>{error.message}</p>

  return (
    <div className=" min-w-[98%]">
      <h1>All Cabins</h1>

      <CabinTableHeading />


      {cabins.map((cabin) => {
        return <CabinTableRows cabin={cabin} key={cabin.id} />
      })}
    </div>
  );
}

export default Cabins;
