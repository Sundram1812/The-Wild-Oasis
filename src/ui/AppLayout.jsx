import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

// const Main = styled.main`
//   background-color: var(--color-grey-100);
//   padding: 4rem 6rem 4.6rem;
// `;

// const StyledAppLayOut = styled.div`
//   display: grid;
//   grid-template-rows: auto 1fr;
//   grid-template-columns: 26rem 1fr;
//   height: 100vh;
// `;

function AppLayout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] grid-cols-[16rem_1fr]">
      <Header />
      <Sidebar />
      <main className=" bg-gray-50 py-4 px-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
