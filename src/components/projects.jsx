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

export default function Projects() {
  return (
    <div className="w-screen h-screen bg-[#0D0C14] text-white">
      <div className="w-full h-[12%] bg-[#020203] flex justify-between px-4">
        <div className="h-full w-1/4 flex items-center space-x-4">
          <img src={mole1} className="w-24 aspect-square" alt="Logo" />
          <div className="w-2/3 h-1/2 border-2 rounded-full border-purple-800 flex space-x-2 justify-center items-center px-4">
            <FontAwesomeIcon icon={faSearch} />
            <input
              id="search"
              type="search"
              placeholder="Хайлт"
              className="w-full h-full rounded-full bg-[#020203] text-white outline-none"
            />
          </div>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center space-x-4">
          <Button>
            <FontAwesomeIcon icon={faHome} className="w-6" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPlay} className="w-6" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faCreditCard} className="w-6" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faRobot} className="w-6" />
          </Button>
        </div>
        <div className="w-1/6 h-full flex justify-center items-center space-x-4">
          <Button>
            <FontAwesomeIcon icon={faBell} />
          </Button>
          <div className="w-12 h-12 bg-slate-400 rounded-full">
            <img src="" alt="User" />
          </div>
        </div>
      </div>
      <div className="w-full h-[85%] flex">
        <div className="w-1/4 h-full bg-[#020203] rounded-br-2xl flex flex-col items-center justify-between p-4">
          <div className="w-10/12 space-y-2">
            <Button className="w-full h-10 rounded-lg" href="/user">
              Dashboard
            </Button>
            <Button className="w-full h-10 rounded-lg" href="/workspace">
              Workspace
            </Button>
            <Button
              className="w-full h-10 bg-[#191726] rounded-lg"
              href="/projects"
            >
              Projects
            </Button>
            <Button className="w-full h-10 rounded-lg" href="/learning">
              Learning
            </Button>
            <Button className="w-full h-10 rounded-lg" href="/chatbot">
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
        <div className="w-3/4 h-full p-6 bg-[#191726]">
          <div className="h-1/6 w-full text-3xl flex justify-center items-center ">
            Танд бодит туршлага болохуйц төслүүд
          </div>
          <div className="h-5/6 w-full grid grid-cols-3 gap-4 ">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-[#191726] flex flex-col justify-center items-center p-4 border rounded-3xl"
              >
                <h3 className="text-xl mb-2">Spotify</h3>
                <p className="text-center">
                  React дээр playlist үүсгэж болохуйц site хийх
                </p>
              </div>
            ))}
          </div>
          <div className="w-full text-right mt-4">
            <Button href="/all-projects">Бүх төслүүдийг харах</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
