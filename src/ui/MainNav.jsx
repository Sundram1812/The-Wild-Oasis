import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome,HiOutlineCalendarDays,HiOutlineHomeModern,HiOutlineUsers, HiOutlineCog6Tooth } from "react-icons/hi2";

const liStyle =
"text-grey-500 font-semibold hover:bg-grey-100 my-1 w-[100%] flex item-center group";
const navLinkStyle = "w-full block px-4 py-2.5 pr-6 flex items-center gap-3 group-hover:text-grey-800";
const iconStyle = "sidebarIcon text-grey-500 text-[1.1rem] stroke-2 group-hover:text-brand-700";

function MainNav() {
  return (
    <ul className="sideBarUl flex w-[100%] flex-col py-3">
      <li className={liStyle}>
        <NavLink to="/dashboard" className={navLinkStyle}>
          <HiOutlineHome className={iconStyle} />
          <span>Home</span>
        </NavLink>
      </li>
      <li className={liStyle}>
        <NavLink to="/bookings" className={navLinkStyle}>
        <HiOutlineCalendarDays className={iconStyle} />
          Bookings
        </NavLink>
      </li>

      <li className={liStyle}>
        <NavLink to="/cabins" className={navLinkStyle}>
        <HiOutlineHomeModern className={iconStyle} />
          Cabins
        </NavLink>
      </li>

      <li className={liStyle}>
        <NavLink to="/users" className={navLinkStyle}>
        <HiOutlineUsers className={iconStyle} />
          Users
        </NavLink>
      </li>

      <li className={liStyle}>
        <NavLink to="/settings" className={navLinkStyle}>
        <HiOutlineCog6Tooth className={iconStyle} />
          Settings
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
