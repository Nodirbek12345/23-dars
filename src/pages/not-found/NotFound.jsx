import React from "react";
import notFound from "../../assets/404.jpg";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black h-screen">
      <img src={notFound} className="h-[600px]  m-auto object-cover " alt="" />
      <div className="flex justify-center gap-7">
        <button
          className="bg-white p-2 rounded-lg w-[80px] font-medium"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="bg-white p-2 rounded-lg w-[80px] font-medium"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
