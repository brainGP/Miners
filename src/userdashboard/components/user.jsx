// import React from "react";
import Button from "../../components/Button";
import UserHeader from "../layout";

export default function User() {
  return (
    <div className="w-screen h-screen bg-[#0D0C14]">
      <UserHeader/>
      <div className="w-full h-[88%] flex justify-end">
      <div className="w-1/4 h-full bg-[#020203] rounded-br-2xl flex flex-col items-center justify-between p-4">
          <div className="w-10/12 h-1/3 space-y-2">
            <Button className="w-full h-1/5 rounded-lg bg-[#191726]" href="/user">
              Dashboard
            </Button>
            <Button className="w-full h-1/5 rounded-lg hover:bg-[#191726]" href="/workspace">
              Workspace
            </Button>
            <Button
              className="w-full h-1/5 rounded-lg hover:bg-[#191726]"
              href="/projects"
            >
              Projects
            </Button>
            <Button className="w-full h-1/5 rounded-lg hover:bg-[#191726]" href="/learning">
              Learning
            </Button>
            <Button className="w-full h-1/5 rounded-lg border-b-1 hover:bg-[#191726]" href="/chatbot">
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
        <div className="w-3/4 h-full flex justify-between items-center flex-col pt-8">
          <div className="w-11/12 h-80 flex justify-between items-center gap-4">
            <div className="h-full flex-1 bg-[#191726] rounded-2xl flex justify-center items-center flex-col">
              <div className="w-4/5 h-10 text-xl text-white">Сүүлд хийсэн</div>
              <div className="w-4/5 h-2/3 border border-gray-300 rounded-3xl"></div>
            </div>
            <div className="h-full flex-1 bg-[#191726] rounded-2xl flex justify-center items-center flex-col">
              <div className="w-4/5 h-10 text-xl text-white">Шинэчлэл</div>
              <div className="w-4/5 h-2/3 border border-gray-300 rounded-3xl"></div>
            </div>
          </div>
          <div className="w-11/12 h-80 flex flex-col justify-center bg-[#191726] items-center px-20 rounded-2xl">
            <div className="h-10 w-full text-xl text-white">
              Таньд санал болгох
              </div>
            <div className="h-3/5 w-full flex gap-12">
              {["gray-500", "yellow-300", "blue-300", "red-300"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`h-full flex-1 border border-${color} rounded-3xl flex flex-col items-center py-4`}
                  >
                <div className="w-full h-full flex flex-col">
                      <h1 className="w-full h-1/5 flex justify-center items-center text-xl text-white">
                        Web
                      </h1>
                      <h2 className="w-full h-2/5 flex text-sm text-center px-2 text-white">
                        Website-ийн талаар үндсэн ойлголттой болон, web design,
                        page гэх мэт зүйлсийг сурж авна.
                      </h2>
                </div>
                    <Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE] text-white">
                      Үзэх
                    </Button>
              </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
