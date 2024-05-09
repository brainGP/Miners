import React from "react";
import { mole1 } from "../assets";
import Button from "./Button";
import { background } from "../assets";
import {
  faSearch,
  faHome,
  faCreditCard,
  faPlay,
  faRobot,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatMain from "./chatbot/ChatMain";

export default function User() {
  return (
    <div className="w-screen h-screen bg-[#0D0C14]">
      <div className="w-full h-[12%] bg-[#020203] flex justify-between">
        <div className="h-full w-1/4 flex justify-end items-center">
          <img src={mole1} className="w-24 aspect-square"></img>
          <div className="w-2/3 h-1/2 border-2 rounded-full border-purple-800 flex space-x-2  justify-center items-center px-4">
            <FontAwesomeIcon icon={faSearch} />
            <input
              id="search"
              type="search"
              placeholder="Хайлт"
              className="w-full h-full rounded-full bg-[#020203]"
            />
          </div>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center">
          <Button>
            <FontAwesomeIcon icon={faHome} className="w-12" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPlay} className="w-12" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faCreditCard} className="w-12" />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faRobot} className="w-12" />
          </Button>
        </div>
        <div className="w-1/6 h-full flex justify-center items-center">
          <Button>
            <FontAwesomeIcon icon={faBell} />
          </Button>
          <div className="w-12 h-12 bg-slate-400 rounded-full">
            <img></img>
          </div>
        </div>
      </div>
      <div className="w-full h-[85%] flex justify-end">
        <div className="w-1/4 h-full bg-[#020203] rounded-br-2xl flex flex-col items-center justify-between p-4">
          <div className="w-10/12 h-1/3">
            <Button className="w-full h-1/5 rounded-lg " href="/user">
              Dashboard
            </Button>
            <Button className="w-full h-1/5 rounded-lg" href="/workspace">
              workspace
            </Button>
            <Button className="w-full h-1/5 rounded-lg" href="/projects">
              projects
            </Button>
            <Button className="w-full h-1/5 rounded-lg" href="/learning">
              learning
            </Button>
            <Button
              className="w-full h-1/5 bg-[#191726] border-b-1 rounded-lg"
              href="/chatbot"
            >
              chatbot
            </Button>
          </div>
          <Button
            className="w-10/12 h-10 border border-gray-300 rounded-lg flex items-center justify-center"
            href="/login"
          >
            Log out
          </Button>
        </div>
        <div className="w-3/4 h-full ">
          <div
            className="w-full md:px-[120px] px-0 pt-10 bg-gray-50 border-b border-gray-300 h-full flex flex-col justify-between overflow-y-auto"
            id="chatbot"
          >
            <div className="w-full h-80 rounded-xl flex p-12 flex-col gap-4 items-center">
              <div className="w-16 h-16 rounded-full dark:bg-white shadow-lg flex justify-center items-center bg-gray-200">
                <img
                  src="/msg.svg"
                  className="w-12 invert dark:invert-0"
                  alt="msg"
                />
              </div>
              <h1 className="font-light text-2xl text-black">
                How can I help you?
              </h1>
            </div>
            <ChatMain />
          </div>
        </div>
      </div>
    </div>
  );
}
