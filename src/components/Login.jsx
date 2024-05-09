// import { FaFacebook } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("admin");
//   const [password, setPassword] = useState("");

//   const onchangeEmail = (e) => setEmail(e.target.value);
//   const onchangePassword = (e) => setPassword(e.target.value);
//   const navigate = useNavigate();

//   const onSubmit = async () => {
//     try {
//       const response = await axios.post(
//         `http://localhost:9000/api/users/login`,
//         {
//           email,
//           role,
//           password,
//         }
//       );
//       navigate("/");
//       alert("Амжилттай нэвтэрлээ."); // Consider using a more user-friendly notification system
//     } catch (err) {
//       console.error(err);
//       alert("Login failed!"); // Display error message to the user
//     }
//   };

//   return (
//     <div className="bg-[#0E0C15] flex items-center justify-center min-h-screen">
//       <div className="bg-[#0E0C15] border-2 border-gray-600 p-8 rounded-lg shadow-lg w-80">
//         <div className="w-[480px] h-[480px] bg-[#D735FF] absolute -right-[40px] top-0 blur-[160px] rounded-full "></div>
//         <div className="w-[480px] h-[480px] bg-[#28FFE2] absolute -left-[40px] bottom-0 blur-[160px] rounded-full "></div>
//         <h2 className="text-3xl text-center text-white mb-6">Dminers</h2>
//         <form>dad</form>
//         <div className="flex items-center justify-between mt-4">
//           <button className="bg-white text-gray-900 py-2 px-4 rounded flex items-center w-full justify-center mr-2">
//             <img
//               src="https://www.svgrepo.com/show/355037/google.svg"
//               className="h-5 w-5 mr-2"
//               alt="Google"
//             />
//             Google
//           </button>
//           <button className="bg-white text-gray-900 py-2 px-4 rounded flex items-center w-full justify-center ml-2">
//             <img
//               src="https://www.svgrepo.com/show/157810/facebook.svg"
//               className="h-5 w-5 mr-2"
//               alt="Facebook"
//             />
//             Facebook
//           </button>
//         </div>
//         <div className="text-center mt-4">
//           <a href="#" class="text-indigo-500 hover:underline">
//             Нууц үгээ мартсан
//           </a>
//         </div>
//       </div>
//       <script src="https://fonts.googleapis.com/icon?family=Material+Icons"></script>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faLock, faEye } from "@fortawesome/free-solid-svg-icons";
// import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ButtonGradient from "../assets/svg/ButtonGradient";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("admin");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const onChangeEmail = (e) => setEmail(e.target.value);
//   const onChangePassword = (e) => setPassword(e.target.value);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `http://localhost:9000/api/users/login`,
//         {
//           email,
//           role,
//           password,
//         }
//       );
//       navigate("/");
//       alert("Амжилттай нэвтэрлээ."); // Consider using a more user-friendly notification system
//     } catch (err) {
//       console.error(err);
//       alert("Login failed!"); // Display error message to the user
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 sm:p-8">
//       <ButtonGradient />
//       <div className="w-[480px] h-[480px] bg-[#D735FF] absolute -right-[40px] top-0 blur-[160px] rounded-full "></div>
//       <div className="w-[480px] h-[480px] bg-[#28FFE2] absolute -left-[40px] bottom-0 blur-[160px] rounded-full "></div>
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in relative">
//         <div className="flex justify-center mb-6">
//           <img
//             src="path_to_logo_image"
//             alt="Dminers"
//             className="h-16 w-16 sm:h-20 sm:w-20"
//           />
//         </div>
//         <h2 className="text-xl sm:text-2xl text-white text-center mb-6 animate-slide-in-left">
//           Dminers
//         </h2>
//         <form onSubmit={onSubmit}>
//           <div className="mb-4 relative">
//             <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
//               <FontAwesomeIcon icon={faUser} />
//             </span>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={onChangeEmail}
//               className="w-full px-3 py-2 text-gray-900 bg-gray-700 focus:outline-none border-2 pl-8 "
//               placeholder="Имэйл"
//               style={{
//                 borderImage: "linear-gradient(to bottom, #89F9E8, #FACB7B) 1",
//               }}
//             />
//           </div>
//           <div className="mb-4 relative ">
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={onChangePassword}
//               className="w-full px-3 py-2 text-gray-900 bg-gray-700 focus:outline-none border-2 pl-8"
//               placeholder="Нууц үг"
//               style={{
//                 borderImage: "linear-gradient(to bottom, #D87CEE, #FACB7B) 1",
//               }}
//             />
//             <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
//               <FontAwesomeIcon icon={faLock} />
//             </span>
//             <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
//               <FontAwesomeIcon icon={faEye} />
//             </span>
//           </div>
//           <div className="mb-4 flex items-center">
//             <input
//               id="remember-me"
//               type="checkbox"
//               className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"
//             />
//             <label htmlFor="remember-me" className="ml-2 block text-gray-400">
//               Намаыг сана
//             </label>
//           </div>
//           <div className="mb-4">
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"

//             >
//               Нэвтрэх
//             </button>
//           </div>
//           <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
//             <button
//               type="button"
//               className="w-full sm:w-auto flex items-center justify-center py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             >
//               <FontAwesomeIcon icon={faGoogle} className="mr-2" />
//               Google
//             </button>
//             <button
//               type="button"
//               className="w-full sm:w-auto flex items-center justify-center py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             >
//               <FontAwesomeIcon icon={faFacebook} className="mr-2" />
//               Facebook
//             </button>
//           </div>
//         </form>
//         <p className="text-center text-gray-400 mt-4">
//           <Link
//             to="/forgot-password"
//             className="text-indigo-500 hover:underline"
//           >
//             Нууц үгээ мартсан
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// // export default Login;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faLock,
//   faEye,
//   faEyeSlash,
// } from "@fortawesome/free-solid-svg-icons";
// import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ButtonGradient from "../assets/svg/ButtonGradient";
// import { brainwave } from "../assets";
// import Button from "./Button";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("admin");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const onChangeEmail = (e) => setEmail(e.target.value);
//   const onChangePassword = (e) => setPassword(e.target.value);
//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `http://localhost:9000/api/users/login`,
//         {
//           email,
//           role,
//           password,
//         }
//       );
//       navigate("/");
//       alert("Амжилттай нэвтэрлээ."); // Consider using a more user-friendly notification system
//     } catch (err) {
//       console.error(err);
//       alert("Login failed!"); // Display error message to the user
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 sm:p-8 pt-0 relative">
//       <div className="absolute top-0 left-0 m-4">
//         <Button
//           className="hidden lg:flex undefined gradientButton relative bg-dark rounded-[4px] hover:before:blur  before:transition before:ease-in-out before:duration-300 "
//           href="/"
//         >
//           Буцах
//         </Button>
//       </div>
//       <ButtonGradient />
//       <div className="w-[480px] h-[480px] bg-[#D735FF] absolute -right-[40px] top-0 blur-[160px] rounded-full animate-move-shape"></div>
//       <div className="w-[480px] h-[480px] bg-[#28FFE2] absolute -left-[40px] bottom-0 blur-[160px] rounded-full animate-move-shape"></div>
//       <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in relative border border-gray-500">
//         <div className="flex justify-center mb-6">
//           <img
//             src={brainwave}
//             alt="Dminers"
//             className="h-1 w-16 sm:h-20 sm:w-20 -translate-y-20"
//           />
//         </div>
//         <h1 className="text-xl sm:text-4xl text-white text-center m-8 animate-slide-in-left">
//           Miners
//         </h1>
//         <form onSubmit={onSubmit}>
//           <div className="mb-4 relative">
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={onChangeEmail}
//               className="w-full px-3 py-2 text-gray-900 bg-gray-700 rounded-lg focus:outline-none border-2 pl-8"
//               placeholder="Имэйл"
//               style={{
//                 borderImage: "linear-gradient(to bottom, #89F9E8, #FACB7B) 1",
//               }}
//             />
//             <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
//               <FontAwesomeIcon icon={faUser} />
//             </span>
//           </div>
//           <div className="mb-4 relative">
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={onChangePassword}
//               className="w-full px-3 py-2 text-gray-900 bg-gray-700 rounded focus:outline-none border-2 pl-8"
//               placeholder="Нууц үг"
//               style={{
//                 borderImage: "linear-gradient(to bottom, #D87CEE, #FACB7B) 1",
//               }}
//             />
//             <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
//               <FontAwesomeIcon icon={faLock} />
//             </span>
//             <span
//               className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
//               onClick={togglePasswordVisibility}
//             >
//               <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//             </span>
//           </div>
//           <div className="mb-4 flex items-center">
//             <input
//               id="remember-me"
//               type="checkbox"
//               className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"
//             />
//             <label htmlFor="remember-me" className="ml-2 block text-gray-400">
//               Намайг сана
//             </label>
//           </div>
//           <div className="mb-4">
//             <Button
//               type="submit"
//               href={"/user"}
//               className="w-full py-2 px-4 bg-white text-black border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex justify-center"
//             >
//               Нэвтрэх
//             </Button>
//           </div>
//           <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
//             <Button
//               type="button"
//               className="w-full sm:w-auto flex items-center justify-center py-2 px-4 bg-transparent text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             >
//               <FontAwesomeIcon icon={faGoogle} className="mr-2" />
//               Google
//             </Button>
//             <Button
//               type="button"
//               className="w-full bg-transparent sm:w-auto flex items-center justify-center py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             >
//               <FontAwesomeIcon icon={faFacebook} className="mr-2" />
//               Facebook
//             </Button>
//           </div>
//         </form>
//         <p className="text-center text-gray-400 mt-4">
//           <Link
//             to="/forgot-password"
//             className="text-indigo-500 hover:underline"
//           >
//             Нууц үгээ мартсан
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 sm:p-8 pt-0 relative">
      <div className="absolute top-0 left-0 m-4">
        <Button
          className="hidden lg:flex undefined bg-dark rounded-lg  hover:before:blur-sm before:transition before:ease-in-out before:duration-300"
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
            className="h-1 w-16 sm:h-20 sm:w-20 -translate-y-20"
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
              className="w-full px-3 py-2 text-white bg-gray-700 rounded-lg focus:outline-none border-2 pl-8 gradient-border"
              placeholder="Имэйл"
              style={{
                borderImage:
                  "linear-gradient(to top, #FFC876, #79FFF7, #9F53FF, #FF98E2) 1",
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
              className="w-full px-3 py-2 text-white bg-gray-700 rounded-lg focus:outline-none border-2 pl-8"
              placeholder="Нууц үг"
              style={{
                borderImage:
                  "linear-gradient(to bottom, #FFC876, #79FFF7, #9F53FF, #FF98E2) 1",
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
              className="w-full py-2 px-4 bg-white text-gray-700 rounded-lg focus:outline-none font-bold focus:ring-2 border-white backdrop-blur-2xl focus:ring-purple-500 hover:text-purple-500"
            >
              Нэвтрэх
            </button>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <Button
              type="button"
              className="w-full sm:w-auto flex items-center justify-center py-2 px-4 text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-500 "
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Google
            </Button>
            <Button
              type="button"
              className="w-full sm:w-auto flex items-center justify-center py-2 px-4  text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 "
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="mr-2"
                style={{
                  borderImage:
                    "linear-gradient(to top, #FFC876, #79FFF7, #9F53FF, #FF98E2) 1",
                }}
              />
              Facebook
            </Button>
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
