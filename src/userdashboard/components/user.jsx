// import React from "react";
import Button from "../../components/Button";
import UserHeader from "../layout";
import { framer } from "../../assets";

export default function User() {
  return (
    <div className="w-screen h-screen bg- ">
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
              <div className="w-4/5 h-10 text-xl text-white font-semibold">Санал болгосон</div>
              <div className="w-4/5 h-2/3 border border-gray-300 rounded-3xl flex justify-center items-center ">
                <Button className="w-48 h-48"><img src={framer} className="w-48"></img></Button>
                <Button href="/task" ><h1 className="text-4xl">Python</h1><h2 className="text-xl">(Анхан шат)</h2></Button>
              </div>
            </div>
            <div className="h-full flex-1 bg-[#191726] rounded-2xl flex justify-center items-center flex-col">
              <div className="w-4/5 h-10 text-lg text-white font-semibold">Python хэлийг та юунд ашиглаж болох вэ?</div>  
              <div className="w-4/5 h-2/3 rounded-2xl text-xl pl-4 gap-2 flex flex-col">
                <h1>- Дата аналитик</h1>
                <h1>- Машин сургалт</h1>
                <h1>- Веб хөгжүүлэлт</h1>
                <h1>- Автоматжуулалт</h1>
                <h1>- Програм загварчлах</h1>
              </div>
            </div>
          </div>
          <div className="w-11/12 h-80 flex flex-col justify-center bg-[#191726] items-center px-20 rounded-2xl">
            <div className="h-10 w-full text-xl text-white">
              Таньд санал болгох
              </div>
            <div className="h-3/5 w-full flex gap-12 flex-row">
              <div className="w-1/6 h-full border border-yellow-300 rounded-xl flex flex-col justify-between items-center py-4"><h1 className="text-xl text-center font-semibold">CPP</h1><h1 className="text-center">Анхан шат</h1><Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE] text-white">Үзэх</Button></div>
              <div className="w-1/6 h-full border border-red-300 rounded-xl flex flex-col justify-between items-center py-4"><h1 className="text-xl text-center font-semibold">Java</h1><h1 className="text-center">Анхан шат</h1><Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE] text-white">Үзэх</Button></div>
              <div className="w-1/6 h-full border border-green-300 rounded-xl flex flex-col justify-between items-center py-4"><h1 className="text-xl text-center font-semibold">Python</h1><h1 className="text-center">Дунд шат</h1><Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE] text-white">Үзэх</Button></div>
              <div className="w-1/6 h-full border border-yellow-300 rounded-xl flex flex-col justify-between items-center py-4"><h1 className="text-xl text-center font-semibold">CPP</h1><h1 className="text-center">Дунд шат</h1><Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE] text-white">Үзэх</Button></div>
              <div className="w-1/6 h-full border border-blue-300 rounded-xl flex flex-col justify-between items-center py-4"><h1 className="text-xl text-center font-semibold">Flutter</h1><h1 className="text-center">Анхан шат</h1><Button className="w-2/3 h-1/5 bg-gradient-to-t from-[#482378] to-[#8640DE] text-white">Үзэх</Button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
