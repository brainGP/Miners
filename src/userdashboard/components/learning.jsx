import React from "react";
import Button from "../../components/Button";
import UserHeader from "../layout";

export default function Learning() {
  return (
    <div className="w-screen h-screen bg-[#0D0C14] text-white">
      <UserHeader/>
      <div className="w-full h-[88%] flex items-start">
        <div className="w-1/4 h-full bg-[#020203] rounded-br-2xl flex flex-col items-center justify-between p-4">
          <div className="w-10/12 flex flex-col space-y-2">
            <Button className="w-full h-1/5 rounded-lg text-white hover:bg-[#191726]" href="/user">
              Dashboard
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg text-white hover:bg-[#191726]"
              href="/workspace"
            >
              Workspace
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg text-white hover:bg-[#191726]"
              href="/projects"
            >
              Projects
            </Button>
            <Button
              className="w-full h-1/5 bg-[#191726] rounded-lg text-white"
              href="/learning"
            >
              Learning
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg text-white border-b-1 hover:bg-[#191726]"
              href="/chatbot"
            >
              Chatbot
            </Button>
          </div>
          <Button
            className="w-10/12 h-1/5 border border-gray-300 rounded-lg flex items-center justify-center text-white"
            href="/login"
          >
            Log out
          </Button>
        </div>
        <div className="w-3/4 h-full bg-[#0D0C14] p-8">
          <div className="bg-[#191726] p-4 rounded-lg">
            <h2 className="text-2xl font-bold">My learning</h2>
            <div className="flex space-x-4 mt-4">
              <button className="py-2 px-4 bg-purple-800 rounded-lg text-white">
                In progress
              </button>
              <button className="py-2 px-4 rounded-lg text-white">
                Complete
              </button>
            </div>
            <div className="mt-6 p-4 bg-[#28243D] rounded-lg">
              <h3 className="text-xl font-semibold">
                Сургалт: Анхан шатны C++
              </h3>
              <p className="mt-2">Сэдэв: Анхан шатны C++: Hello World</p>
              <div className="mt-4 w-full h-2 bg-[#3D3A58] rounded-lg">
                <div
                  className="h-full bg-purple-800 rounded-lg"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
