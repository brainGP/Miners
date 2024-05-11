import UserHeader from "../layout";
import Button from "../../components/Button";

export default function Task(){
    return(
        <div className="w-screen h-screen bg-[#0D0C14] flex flex-col">
            <UserHeader/>
            <div className="w-full h-[88%] flex flex-row items-center justify-center gap-20">
                <Button className="w-[10%] h-[10%] text-base border-2 border-x-gradient-start border-y-gradient-end" href="/task">Буцах</Button>
                <div className="w-1/2 h-full gap-20 flex justify-center items-center flex-col ">
                    <div className="w-full h-[40%] pt-10">
                        <h1 className="text-center font-semibold text-4xl">print("HELLO WORLD!")</h1>
                        <h1 className="text-center text-3xl font-mono">Дараах кодыг дээд талийн код шиг дагаж хийгээрэй.</h1>
                    </div>
                    <div className="h-[20%] w-full flex flex-row justify-center">
                        <h1 className="text-6xl">print(</h1>
                        <div className="w-40 h-16 border-2 rounded-md"></div>
                        <h1 className="text-6xl">)</h1>
                    </div>
                    <div className="h-[40%] w-full flex flex-row justify-between">
                        <Button className="w-30 h-20 border-2 rounded-lg flex justify-center items-center bg-green-300">
                            <h1 className="text-xl font-semibold">"Hello World!"</h1>
                        </Button>
                        <Button className="w-30 h-20 border-2 rounded-lg flex justify-center items-center">
                            <h1 className="text-xl font-semibold">hello world!</h1>
                        </Button>
                        <Button className="w-30 h-20 border-2 rounded-lg flex justify-center items-center">
                            <h1 className="text-xl font-semibold">(hello world!)</h1>
                        </Button>
                    </div>
                </div>
                <Button className="w-[10%] h-[10%] text-base border-2 border-y-gradient-start border-x-gradient-end" href="/task2">Дараагийн</Button>
            </div>
        </div>
    );
}