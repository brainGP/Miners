import React from "react";
import { mole1 } from "../assets"; // Make sure to replace this with the correct path to your image
import Button from "./Button"; // Ensure this component is correctly implemented
import {
  faSearch,
  faHome,
  faCreditCard,
  faPlay,
  faRobot,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkspaceCard = ({ time, language, title }) => {
  return (
    <div className="p-4 bg-[#191726] rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-white text-lg">{title}</h2>
        <p className="text-gray-400">
          Workspace &mdash; {time} &mdash; {language}
        </p>
      </div>
      <Button className="text-white">...</Button>
    </div>
  );
};

const WorkspaceList = () => {
  const workspaces = [
    { time: "an hour ago", language: "Python 3", title: "Untitled" },
    { time: "2 hours ago", language: "C++", title: "Untitled" },
    { time: "3 hours ago", language: "Java", title: "Untitled" },
  ];

  return (
    <div className="w-3/4 h-full p-4 justify-between items-center">
      <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-white text-2xl">Workspaces</h1>
        <button className="text-white text-xs">+ New workspace</button>
      </div>
      <div className="flex flex-col space-y-4">
        {workspaces.map((workspace, index) => (
          <WorkspaceCard
            key={index}
            time={workspace.time}
            language={workspace.language}
            title={workspace.title}
          />
        ))}
      </div>
    </div>
  );
};

const Workspace = () => {
  return (
    <div className="w-screen h-screen bg-[#0D0C14]">
      {/* Header Section */}
      <div className="w-full h-[12%] bg-[#020203] flex justify-between px-4">
        <div className="h-full w-1/4 flex items-center space-x-4">
          <img src={mole1} className="w-24 aspect-square" alt="logo" />
          <div className="w-2/3 h-1/2 border-2 rounded-full border-purple-800 flex space-x-2 justify-center items-center px-4">
            <FontAwesomeIcon icon={faSearch} />
            <input
              id="search"
              type="search"
              placeholder="Хайлт"
              className="w-full h-full rounded-full bg-[#020203]"
            />
          </div>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center space-x-4">
          <Button>
            <FontAwesomeIcon icon={faHome} className="w-6 text-white" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPlay} className="w-6 text-white" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faCreditCard} className="w-6 text-white" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faRobot} className="w-6 text-white" />
          </Button>
        </div>
        <div className="w-1/6 h-full flex justify-center items-center space-x-4">
          <Button>
            <FontAwesomeIcon icon={faBell} className="w-6 text-white" />
          </Button>
          <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
        </div>
      </div>

      {/* Sidebar and Main Content */}
      <div className="w-full h-[88%] flex items-start">
        {/* Sidebar */}
        <div className="w-1/4 h-full bg-[#020203] rounded-br-2xl flex flex-col items-center justify-between p-4">
          <div className="w-10/12 h-1/3">
            <Button
              className="w-full h-1/5 rounded-lg hover:bg-[#191726]"
              href="/user"
            >
              Dashboard
            </Button>
            <Button
              className="w-full h-1/5 bg-[#191726] rounded-lg hover:bg-[#191726]"
              href="/workspace"
            >
              Workspace
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg hover:bg-[#191726]"
              href="/projects"
            >
              Projects
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg hover:bg-[#191726]"
              href="/learning"
            >
              Learning
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg hover:bg-[#191726]"
              href="/chatbot"
            >
              Chatbot
            </Button>
          </div>
          <Button
            className="w-10/12 h-10 border border-gray-300 rounded-lg flex items-center justify-center"
            href="/login"
          >
            Log out
          </Button>
        </div>

        {/* Main Content */}
        <WorkspaceList />
      </div>
    </div>
  );
};

export default Workspace;
