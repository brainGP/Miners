import React from "react";
import { mole1 } from "../assets";
import Button from "./Button";
import {
  faSearch,
  faHome,
  faCreditCard,
  faPlay,
  faRobot,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Learning() {
  return (
    <div className="w-screen h-screen bg-[#0D0C14] text-white">
      <div className="w-full h-[12%] bg-[#020203] flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <img src={mole1} className="w-24 aspect-square" alt="Logo" />
          <div className="flex items-center border-2 border-purple-800 rounded-full px-4">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
            <input
              id="search"
              type="search"
              placeholder="Хайлт"
              className="w-full h-full rounded-full bg-[#020203] text-white ml-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex space-x-4">
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
        <div className="flex items-center space-x-4">
          <Button>
            <FontAwesomeIcon icon={faBell} className="text-white" />
          </Button>
          <div className="w-12 h-12 bg-slate-400 rounded-full">
            <img
              src=""
              alt="User Avatar"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[88%] flex">
        <div className="w-1/4 h-full bg-[#020203] rounded-br-2xl flex flex-col items-center justify-between p-4">
          <div className="w-10/12 flex flex-col space-y-2">
            <Button className="w-full h-12 rounded-lg text-white" href="/user">
              Dashboard
            </Button>
            <Button
              className="w-full h-12 rounded-lg text-white"
              href="/workspace"
            >
              Workspace
            </Button>
            <Button
              className="w-full h-12 rounded-lg text-white"
              href="/projects"
            >
              Projects
            </Button>
            <Button
              className="w-full h-12 bg-[#191726] rounded-lg text-white"
              href="/learning"
            >
              Learning
            </Button>
            <Button
              className="w-full h-12 rounded-lg text-white"
              href="/chatbot"
            >
              Chatbot
            </Button>
          </div>
          <Button
            className="w-10/12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-white"
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
