import React from 'react'

function CabinTableHeading() {
  return (
    <div className=" grid w-full grid-cols-[.5fr_.8fr_1.5fr_.8fr_.8fr_.7fr]  py-4 gap-6">
    <div className=" h-[30px] text-center w-full"></div>
    <div className=" h-[30px] uppercase text-sm w-full text-grey-800 font-bold">cabin</div>
    <div className=" h-[30px] uppercase text-sm w-full text-grey-800 font-bold">Capacity</div>
    <div className=" h-[30px] uppercase text-sm w-full text-grey-800 font-bold">price</div>
    <div className=" h-[30px] uppercase text-sm w-full text-grey-800 font-bold">discount</div>
    <div className=" h-[30px] uppercase text-sm w-4 text-grey-800"></div>
  </div>
  )
}

export default CabinTableHeading