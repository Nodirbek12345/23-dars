import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center pt-20 gap-5 w-[400px] rounded-3xl mt-[50px] bg-gray-400 m-auto h-[600px] ">
      <h1 className="text-center text-[40px]">Login</h1>
      <input
        type="text"
        className="bg-white rounded-2xl w-[300px] p-2"
        placeholder="Login"
        id=""
      />
      <input
        type="text"
        className="bg-white rounded-2xl w-[300px] p-2"
        placeholder="Password"
        id=""
      />
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

export default Login;
