// src/components/Signup.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { brainwave } from "../assets";
import Button from "./Button";

const Signup = () => {
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const onChangeUsername = (e) => setUsername(e.target.value); // Handler for username
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/userSignup`, {
        username, // Include username in the API call
        email,
        password,
      });
      navigate("/");
      alert("Амжилттай бүртгүүллээ."); // Consider using a more user-friendly notification system
    } catch (err) {
      console.error(err);
      alert("Signup failed!"); // Display error message to the user
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E0C15] p-4 sm:p-8 pt-0 relative">
      <div className="absolute top-0 left-0 m-4">
        <Button
          className="hidden lg:flex bg-dark rounded-lg hover:before:blur before:transition before:ease-in-out before:duration-300"
          href="/"
        >
          Буцах
        </Button>
      </div>
      <ButtonGradient />
      <div className="w-[420px] h-[420px] bg-[#D735FF] absolute -right-[40px] top-0 blur-[140px] rounded-full animate-move-shape"></div>
      <div className="w-[420px] h-[420px] bg-[#28FFE2] absolute -left-[40px] bottom-0 blur-[140px] rounded-full animate-move-shape"></div>
      <div className="bg-[#100E17] p-8 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-sm animate-fade-in relative border border-gray-500">
        <div className="flex justify-center mb-6">
          <img
            src={brainwave}
            alt="Dminers"
            className="h-32 w-32 sm:h-40 sm:w-40 absolute -top-20"
          />
        </div>
        <h1 className="text-xl sm:text-3xl text-white text-center mt-16 mb-6 animate-slide-in-left">
          Miners
        </h1>
        <form onSubmit={onSubmit}>
          <div className="mb-4 relative">
            <input
              id="username"
              type="text"
              value={username}
              onChange={onChangeUsername}
              className="w-full px-3 py-2 text-white bg-gray-700 focus:outline-none pl-8"
              placeholder="Бүртгүүлэх нэр"
              style={{
                border: "2px solid transparent",
                borderImage: "linear-gradient(to right, #89F9E8, #FACB7B) 1",
              }}
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className="mb-4 relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              className="w-full px-3 py-2 text-white bg-gray-700 focus:outline-none pl-8"
              placeholder="Бүртгүүлэх имэйл"
              style={{
                border: "2px solid transparent",
                borderImage: "linear-gradient(to right, #89F9E8, #FACB7B) 1",
              }}
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <div className="mb-4 relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChangePassword}
              className="w-full px-3 py-2 text-white bg-gray-700 focus:outline-none pl-8"
              placeholder="Нууц үг үүсгэх"
              style={{
                border: "2px solid transparent",
                borderImage: "linear-gradient(to right, #D87CEE, #FACB7B) 1",
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
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white text-gray-700 rounded-lg focus:outline-none focus:ring-2 border border-white backdrop-blur-2xl focus:ring-purple-500 hover:text-purple-500 hover:border-purple-500"
            >
              Бүртгүүлэх
            </button>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              type="button"
              className="w-full sm:w-auto flex items-center justify-center py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Google
            </button>
            <button
              type="button"
              className="w-full sm:w-auto flex items-center justify-center py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
