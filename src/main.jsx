import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Login from "./components/Login.jsx";
import SignUp from "./components/Signup.jsx";

import User from "./components/user.jsx";
import Workspace from "./components/workspace.jsx";
import Projects from "./components/projects.jsx";
import Learning from "./components/learning.jsx";
import Chatbot from "./components/chatbot.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />
        <Route path="/workspace" element={<Workspace/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/learning" element={<Learning/>}></Route>
        <Route path="/chatbot" element={<Chatbot/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
