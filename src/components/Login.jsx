import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { brainwave } from "../assets";
import Button from "./Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:9000/api/users/login`,
        {
          email,
          role,
          password,
        }
      );
      navigate("/");
      alert("Амжилттай нэвтэрлээ."); // Consider using a more user-friendly notification system
    } catch (err) {
      console.error(err);
      alert("Login failed!"); // Display error message to the user
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E0C15] p-4 sm:p-8 pt-0 relative">
      <div className="absolute top-0 left-0 m-4">
        <Button
          className="hidden lg:flex undefined bg-dark rounded-lg gradient-border hover:before:blur before:transition before:ease-in-out before:duration-300"
          href="/"
        >
          Буцах
        </Button>
      </div>
      <ButtonGradient />
      <div className="w-[480px] h-[480px] bg-[#D735FF] absolute -right-[40px] top-0 blur-[160px] rounded-full animate-move-shape"></div>
      <div className="w-[480px] h-[480px] bg-[#28FFE2] absolute -left-[40px] bottom-0 blur-[160px] rounded-full animate-move-shape"></div>
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in relative border border-gray-500">
        <div className="flex justify-center mb-6">
          <img
            src={brainwave}
            alt="Dminers"
            className="h-40 w-40 sm:h-48 sm:w-48 absolute -top-24"
            // Adjusted size
          />
        </div>

        <h1 className="text-xl sm:text-4xl text-white text-center m-8 animate-slide-in-left">
          Miners
        </h1>
        <form onSubmit={onSubmit}>
          <div className="mb-4 relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              className="w-full px-3 py-2 text-gray-900 bg-gray-700 rounded-lg focus:outline-none border-2 pl-8"
              placeholder="Имэйл"
              style={{
                borderImage: "linear-gradient(to bottom, #89F9E8, #FACB7B) 1",
              }}
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className="mb-4 relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChangePassword}
              className="w-full px-3 py-2 text-gray-900 bg-gray-700 rounded focus:outline-none border-2 pl-8"
              placeholder="Нууц үг"
              style={{
                borderImage: "linear-gradient(to bottom, #D87CEE, #FACB7B) 1",
              }}
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <span
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-gray-400">
              Намайг сана
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white text-gray-700 rounded-lg focus:outline-none focus:ring-2 border-white backdrop-blur-2xl focus:ring-purple-500 gradient-border"
            >
              Нэвтрэх
            </button>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <Button
              type="button"
              className="w-full sm:w-auto flex items-center justify-center py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 gradient-border"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Google
            </Button>
            <a
              type="button"
              className="w-full sm:w-auto flex items-center justify-center py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 gradient-border"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </a>
          </div>
        </form>
        <p className="text-center text-gray-400 mt-4">
          <Link
            to="/forgot-password"
            className="text-indigo-500 hover:underline"
          >
            Нууц үгээ мартсан
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
