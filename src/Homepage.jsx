import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center m-auto">
      <h1 className="text-2xl font-bold">Welcome to the Homepage</h1>

      <div className="flex justify-center gap-5 mt-8">
        <Link to={"/login"}>
          <button>login</button>
        </Link>
        <Link to={"/register"}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
