import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthProvider";
import axios from "./api/axios";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setAuth({ user, pwd, roles, accessToken });
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error?.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }

      errRef.current.focus();
    }
  };

  return (
    <div className="bg-[#135D66] p-6 w-full text-white m-auto max-w-[420px] min-h-[400px] flex justify-center">
      <div className="w-full">
        <>
          {success ? (
            <section>
              <h1>You are logged in!</h1>
              <br />
              <p>
                <Link to={"/"}>Explore</Link>
              </p>
            </section>
          ) : (
            <section>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col">
                <h1 className="text-2xl font-bold mb-3">Login</h1>

                <label className="mt-3" htmlFor="username">
                  Username:
                </label>
                <input
                  type="text"
                  required
                  onChange={(e) => setUser(e.target.value)}
                  ref={userRef}
                  id="username"
                  autoComplete="off"
                  value={user}
                />

                <label htmlFor="password" className="mt-4">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  value={pwd}
                />

                <button className="mt-8 mb-5">Sign In</button>

                <p>
                  Need an Account?
                  <br />
                  <Link to={"/register"}>
                    <span className="underline">Sign Up</span>
                  </Link>
                </p>
              </form>
            </section>
          )}
        </>
      </div>
    </div>
  );
};

export default Login;
