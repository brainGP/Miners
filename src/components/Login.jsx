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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-black bg-opacity-25 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col space-y-6">
          <h1 className="text-white text-2xl font-bold">Dminers</h1>
          <input
            type="text"
            placeholder="Нэвтрэх нэр"
            className="input text-white bg-gray-800 rounded border border-gray-700"
          />
          <input
            type="password"
            placeholder="Нууц үг"
            className="input text-white bg-gray-800 rounded border border-gray-700"
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-white">
              <input type="checkbox" className="checkbox" />
              Намайг сана
            </label>
            <a href="#" className="text-sm text-blue-200 hover:text-blue-400">
              Нууц үгээ мартсан
            </a>
          </div>
          <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Нэвтрэх
          </button>
          <div className="flex justify-center space-x-4">
            <button className="p-2 rounded-full text-white bg-blue-600">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
            <button className="p-2 rounded-full text-white bg-red-500">
              <i className="fab fa-google"></i> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
