import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center m-auto">
      <h1 className="text-2xl font-bold">Welcome to the Homepage</h1>

      <div className="flex justify-center gap-5 mt-8">
        <button>
          <Link to={"/login"}>login</Link>
        </button>
        <button>
          <Link to={"/register"}>Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
