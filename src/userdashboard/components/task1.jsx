import UserHeader from "../layout";
import Button from "../../components/Button";
import { framer } from "../../assets";

export default function Task(){
    return(
        <div className="w-screen h-screen bg-[#0D0C14] flex flex-col">
            <UserHeader/>
            <div className="w-full h-[88%] flex flex-col items-center justify-center">
                <div className="w-full h-[30%] flex justify-center items-center gap-20">
                    <Button className="w-48 h-48"><img src={framer} className="w-48"></img></Button>
                    <Button href="/task" ><h1 className="text-4xl">Python</h1><h2 className="text-xl">(Анхан шат)</h2></Button>
                </div>
                <div className="w-full h-[70%] flex flex-row justify-center gap-x-20 pt-10">
                    <div className="h-[60%] w-[40%] flex justify-between flex-col">
                        <div className="w-full h-1/4 border-4 border-green-300 rounded-2xl flex items-center">
                            <h1 className="text-4xl pl-8 text-green-300" href="/python">1. Python</h1>
                        </div>
                        <div className="w-full h-1/4 border-4 border-gray-300 rounded-2xl flex items-center">
                            <Button className="text-4xl pl-8" href="/print">2. print("Welcome")</Button>
                        </div>
                        <div className="w-full h-1/4 border-4 border-gray-900 rounded-2xl flex items-center">
                            <h1 className="text-4xl pl-8">3. Хэвлэх</h1>
                        </div>
                    </div>
                    <div className="h-[60%] w-[40%] flex justify-between flex-col">
                        <div className="w-full h-1/4 border-4 border-gray-900 rounded-2xl flex items-center">
                            <h1 className="text-4xl pl-8">4. Syntax</h1>
                        </div>
                        <div className="w-full h-1/4 border-4 border-gray-900 rounded-2xl flex items-center">
                            <h1 className="text-4xl pl-8">5. Хувьсагч</h1>
                        </div>
                        <div className="w-full h-1/4 border-4 border-gray-900 rounded-2xl flex items-center">
                            <h1 className="text-4xl pl-8">6. print("Welcome")</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}