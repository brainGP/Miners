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
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-4">
          Let's get started
        </h1>
        <p className="text-center text-sm text-gray-600 mb-4">
          Don't have an account?
          <Link to="/register" className="text-blue-500 hover:underline ml-1">
            Sign up
          </Link>
        </p>
        <div className="space-y-4">
          <a
            href="https://www.google.com"
            className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-center text-gray-600 hover:bg-gray-50"
          >
            <img
              src="/images/google.png"
              alt="Google sign-in"
              className="inline-block mr-2"
              width={24}
            />
            Sign in with Google
          </a>
          <a
            href="https://www.facebook.com"
            className="block w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm text-center hover:bg-blue-700"
          >
            <FaFacebook className="inline mr-2" />
            Sign in with Facebook
          </a>
        </div>
        <p className="text-center text-gray-500 my-4">Or</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="space-y-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              onChange={onchangeEmail}
              placeholder="example@gmail.com"
            />
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              onChange={onchangePassword}
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
