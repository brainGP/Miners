import React from "react";
import Button from "../../components/Button";
import ChatMain from "../../components/chatbot/ChatMain";
import UserHeader from "../layout";

export default function User() {
  return (
    <div className="w-screen h-screen bg-[#0D0C14]">
      <UserHeader />
      <div className="w-full h-[88%] flex items-start">
        <div className="w-1/4 h-full bg-[#020203] rounded-br-2xl flex flex-col items-center justify-between p-4">
          <div className="w-10/12 h-1/3 space-y-2">
            <Button
              className="w-full h-1/5 rounded-lg hover:bg-[#191726]"
              href="/user"
            >
              Эхлэл
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg hover:bg-[#191726]"
              href="/workspace"
            >
              Эхлүүлсэн төслүүд
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg hover:bg-[#191726]"
              href="/projects"
            >
              Төслүүд
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg hover:bg-[#191726]"
              href="/learning"
            >
              Миний сургалтууд
            </Button>
            <Button
              className="w-full h-1/5 bg-[#191726] border-b-1 rounded-lg"
              href="/chatbot"
            >
              Чатбот
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
