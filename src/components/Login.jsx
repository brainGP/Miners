import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");
  const [password, setPassword] = useState("");

  const onchangeEmail = (e) => setEmail(e.target.value);
  const onchangePassword = (e) => setPassword(e.target.value);
  const navigate = useNavigate();

  const onSubmit = async () => {
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
    <div className="bg-gray-800 flex items-center justify-center min-h-screen">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-80">
        <div className="w-[400px] h-[400px] bg-[#D735FF] absolute -right-[92px] top-0 blur-[120px] rounded-full "></div>
        <div className="w-[400px] h-[400px] bg-[#28FFE2] absolute -left-[92px] bottom-0 blur-[120px] rounded-full "></div>
        <h2 className="text-3xl text-center text-white mb-6">Dminers</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-400" for="username">
              Нэвтрэх нэр
            </label>
            <div className="flex items-center border border-gray-700 px-3 py-2 mt-1 relative bg-dark rounded-[4px] hover:before:blur  before:transition before:ease-in-out before:duration-300">
              <input
                id="username"
                type="text"
                className="bg-gray-900 text-white w-full outline-none"
                placeholder="Нэвтрэх нэр"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400" for="password">
              Нууц үг
            </label>
            <div className="flex items-center border border-gray-700 rounded px-3 py-2 mt-1">
              <input
                id="password"
                type="password"
                className="bg-gray-900 text-white w-full outline-none"
                placeholder="Нууц үг"
              />
              <span className="material-icons text-gray-400 ml-2 cursor-pointer">
                visibility_off
              </span>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <input
              id="remember"
              type="checkbox"
              className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 rounded"
            />
            <label for="remember" class="ml-2 block text-gray-400">
              Намайг сана
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Нэвтрэх
          </button>
        </form>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-white text-gray-900 py-2 px-4 rounded flex items-center w-full justify-center mr-2">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="h-5 w-5 mr-2"
              alt="Google"
            />
            Google
          </button>
          <button class="bg-white text-gray-900 py-2 px-4 rounded flex items-center w-full justify-center ml-2">
            <img
              src="https://www.svgrepo.com/show/157810/facebook.svg"
              className="h-5 w-5 mr-2"
              alt="Facebook"
            />
            Facebook
          </button>
        </div>
        <div className="text-center mt-4">
          <a href="#" class="text-indigo-500 hover:underline">
            Нууц үгээ мартсан
          </a>
        </div>
      </div>
      <script src="https://fonts.googleapis.com/icon?family=Material+Icons"></script>
    </div>
  );
};

export default Login;
