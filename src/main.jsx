import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Login from "./components/Login.jsx";
import SignUp from "./components/Signup.jsx";

import User from "./userdashboard/components/user.jsx";
import Workspace from "./userdashboard/components/workspace.jsx";
import Projects from "./userdashboard/components/projects.jsx";
import Learning from "./userdashboard/components/learning.jsx";
import Chatbot from "./userdashboard/components/chatbot.jsx";
import Task from "./userdashboard/components/task.jsx";
import Python from "./userdashboard/components/python.jsx";
import Task1 from "./userdashboard/components/task1.jsx";
import Print from "./userdashboard/components/print.jsx";
import Print1 from "./userdashboard/components/print1.jsx";
import Task2 from "./userdashboard/components/task2.jsx";

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
        <Route path="/task" element={<Task/>}></Route>
        <Route path="/python" element={<Python/>}></Route>
        <Route path="/task1" element={<Task1/>}></Route>
        <Route path="/print" element={<Print/>}></Route>        
        <Route path="/print1" element={<Print1/>}></Route>    
        <Route path="/task2" element={<Task2/>}></Route>    
      </Routes>
    </Router>
  </React.StrictMode>
);
