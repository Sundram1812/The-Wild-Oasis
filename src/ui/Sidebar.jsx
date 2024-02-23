import React from "react";
import { styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <div className="  row-[1/-1] flex flex-col gap-4 px-6 py-4 my-3">
      <Logo />
      <MainNav />
    </div>
  );
}

export default Sidebar;
