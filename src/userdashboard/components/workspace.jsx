import React from "react";
import Button from "../../components/Button";
import UserHeader from "../layout";

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
      <UserHeader/>
      {/* Sidebar and Main Content */}
      <div className="w-full h-[88%] flex items-start">
        {/* Sidebar */}
        <div className="w-1/4 h-full bg-[#020203] rounded-br-2xl flex flex-col items-center justify-between p-4">
          <div className="w-10/12 flex flex-col space-y-2">
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
              className="w-full h-1/5 rounded-lg hover:bg-[#191726] border-b-1"
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
