// import React from "react";
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

export default function User() {
  return(
    <div className="w-screen h-screen bg-[#0D0C14]">
      <div className="w-full h-[6rem] bg-[#020203] flex justify-between">
        <div className="h-full w-1/4 flex justify-end items-center">
          <img src={mole1} className="w-24 aspect-square"></img>
          <div className="w-2/3 h-1/2 border-2 rounded-full border-purple-800 flex space-x-2  justify-center items-center px-2"> 
            <FontAwesomeIcon icon={faSearch}/>
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
            <FontAwesomeIcon icon={faHome} className="w-12"/>
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPlay} className="w-12"/>
          </Button>
          <Button>
            <FontAwesomeIcon icon={faCreditCard} className="w-12"/>
          </Button>
          <Button>
            <FontAwesomeIcon icon={faRobot} className="w-12"/>
          </Button>
        </div>
        <div className="w-1/6 h-full flex justify-center items-center">
          <Button>
              <FontAwesomeIcon icon={faBell}/>
          </Button>
          <div className="w-12 h-12 bg-slate-400 rounded-full">
            <img></img>
          </div>
        </div>
      </div>
      <div className="w-full h-[85%] flex justify-end">
        <div className="w-1/4 h-full bg-[#020203] rounded-br-2xl flex flex-col items-center justify-between p-4">
          <div className="w-10/12 h-1/3">
            <Button className="w-full h-1/5 bg-[#191726] rounded-lg " href="/user">Dashboard</Button>
            <Button className="w-full h-1/5 rounded-lg" href="/workspace">workspace</Button>
            <Button className="w-full h-1/5 rounded-lg" href="/projects">projects</Button>
            <Button className="w-full h-1/5 rounded-lg" href="/learning">learning</Button>
            <Button className="w-full h-1/5 rounded-lg border-b-1" href="/chatbot">chatbot</Button>
          </div>
          <Button className="w-10/12 h-10 border border-gray-300 rounded-lg flex items-center justify-center" href="/login">
            Log out 
          </Button>
        </div>
        <div className="w-3/4 h-full flex justify-between items-center flex-col pt-8">
          <div className="w-11/12 h-80 flex justify-between items-center gap-4 ">
            <div className="h-full flex-1 bg-black rounded-2xl flex justify-center items-center flex-col">
              <div className="w-4/5 h-10 text-xl">Сүүлд хийсэн</div>
              <div className="w-4/5 h-2/3 border rounded-3xl"></div>
            </div>
            <div className="h-full flex-1 bg-black rounded-2xl flex justify-center items-center flex-col">
              <div className="w-4/5 h-10 text-xl">Шинэчлэл</div>
              <div className="w-4/5 h-2/3"></div>
            </div>
          </div>
          <div className="w-11/12 h-80 flex flex-col justify-center bg-black items-center px-20 rounded-2xl">
            <div className="h-10 w-full text-xl">Таньд санал болгох</div>
            <div className="h-3/5 w-full flex gap-12  ">
            <div className="h-full flex-1 border border-gray-500 rounded-3xl flex flex-col items-center py-4">
                <div className="w-full h-full flex flex-col">
                  <h1 className="w-full h-1/5 flex justify-center items-center text-xl">Web</h1>
                  <h2 className="w-full h-2/5 flex text-sm text-center">Website-ийн талаар үндсэн ойлголттой болон, web design, page гэх мэт зүйлсийг сурж авна.</h2>
                </div>
                <Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE]">Үзэх</Button>
              </div>
              <div className="h-full flex-1 border border-yellow-300 rounded-3xl flex flex-col items-center py-4">
                <div className="w-full h-full flex flex-col">
                  <h1 className="w-full h-1/5 flex justify-center items-center text-xl">Web</h1>
                  <h2 className="w-full h-2/5 flex text-sm text-center">Website-ийн талаар үндсэн ойлголттой болон, web design, page гэх мэт зүйлсийг сурж авна.</h2>
                </div>
                <Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE]">Үзэх</Button>
              </div>
              <div className="h-full flex-1 border border-blue-300 rounded-3xl flex flex-col items-center py-4">
                <div className="w-full h-full flex flex-col">
                  <h1 className="w-full h-1/5 flex justify-center items-center text-xl">Web</h1>
                  <h2 className="w-full h-2/5 flex text-sm text-center">Website-ийн талаар үндсэн ойлголттой болон, web design, page гэх мэт зүйлсийг сурж авна.</h2>
                </div>
                <Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE]">Үзэх</Button>
              </div>
              <div className="h-full flex-1 border border-red-300 rounded-3xl flex flex-col items-center py-4">
                <div className="w-full h-full flex flex-col">
                  <h1 className="w-full h-1/5 flex justify-center items-center text-xl">Web</h1>
                  <h2 className="w-full h-2/5 flex text-sm text-center">Website-ийн талаар үндсэн ойлголттой болон, web design, page гэх мэт зүйлсийг сурж авна.</h2>
                </div>
                <Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE]">Үзэх</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}