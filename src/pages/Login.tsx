import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import routes from "../routes";

const Login = () => {
  const [formData, setFormData] = useState({
    userOrEmail: "",
    password: "",
    signedIn: false,
  });
  const [errors, setErrors] = useState({ message: "" });
  const [registerSuccess, setRegisterSuccess] = useState({
    token: "",
    refreshToken: "",
    user: {
      id: "",
      username: "",
      email: "",
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.type === "checkbox") {
      setFormData({ ...formData, signedIn: target.checked });
    } else {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { userOrEmail, password } = formData;
    var controller = new AbortController()
    if (!userOrEmail || !password) {
      setErrors({ message: "Please fill the required fields" });
      return;
    }
    axios({
      method: "post",
      url: "http://localhost:4000/user/login",
      data: {
        userOrEmail: userOrEmail,
        password: password,
      },
      signal: controller.signal
    }).then((res) => {
      console.log(res.data);
      
    }).catch(err => {
      setErrors(err.response.data);
      console.error(err)
    });
  };

  // redirect user if token is set
  if (registerSuccess.token) {
 
    return <Navigate to={routes.HOME} />}
  return (
    <div>
      {errors.message && (
        <p className="p-3 md:w-1/5 bg-red-200 rounded-md text-gray-600">
          {errors.message}
        </p>
      )}
      <h1 className="mb-5 text-2xl font-medium">Login To Travel Log</h1>
      <form className="space-y-5" onSubmit={(e: FormEvent) => handleSubmit(e)}>
        <div className="form-grp space-y-2">
          <label htmlFor="userOrEmail">
            Username or Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="userOrEmail"
            placeholder="@username or email"
            value={formData.userOrEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            className="block py-2 px-3 border border-gray-200 outline-none rounded-lg bg-white"
          />
        </div>
        <div className="form-grp space-y-2">
          <label htmlFor="password">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            className="block py-2 px-3 border border-gray-200 outline-none rounded-lg bg-white"
          />
        </div>
        <div className="form-grp space-y-2">
          <label htmlFor="signedIn" className="mr-2 text-sm font-medium">
            Stay signed in?
          </label>
          <input
            type="checkbox"
            name="signedIn"
            className="cursor-pointer"
            checked={formData.signedIn}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </div>
        <button
          type="submit"
          className={`px-3 py-2 bg-red-600 hover:bg-red-700 text-gray-100 rounded-lg`}
        >
          Submit
        </button>
      </form>
      <p className="mt-3">
        Not signed up yet?{" "}
        <Link to={routes.REGISTER}>
          <b className="text-blue-500 underline">Register</b>
        </Link>
      </p>
    </div>
  );
};

export default Login;
