import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
  
    <header className="">
      <div className="absolute bg-white opacity-40 h-[56px] w-full"></div>
      <div className="absolute text-black font-medium flex gap-10 p-4 ">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/posts"}>Posts</NavLink>
      <NavLink to={"/comments"}>Comments</NavLink>
      <NavLink to={"/albums"}>Albums</NavLink>
      <NavLink to={"/todos"}>Todos</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
      <NavLink to={"/login"}>Login</NavLink></div>
    </header>
  );
};

export default Header;
