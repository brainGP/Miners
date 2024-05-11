import UserHeader from "../layout";
import Button from "../../components/Button";
import { framer } from "../../assets";

export default function Task(){
    return(
        <div className="w-screen h-screen bg-[#0D0C14] flex flex-col">
            <UserHeader/>
            <div className="w-full h-[88%] flex flex-row items-center justify-center gap-20">
                <Button className="w-[10%] h-[10%] text-base border-2 border-x-gradient-start border-y-gradient-end" href="/task">Буцах</Button>
                <div className="w-1/2 h-full gap-12 flex justify-center items-center flex-col">
                    <img src={framer} alt="Logo" className="w-48 h-48"></img>
                    <h1 className="text-2xl font-medium w-2/3 text-center font-mono">Python нь өргөн хэрэглээтэй, ерөнхий зориулалтын өндөр түвшний програмчлалын хэл. Кодыг уншихад хялбар байлгахаар бүтээгдсэн хэл бөгөөд Си гэх мэт хэл дээр бичсэнээс цөөн тооны мөр код ашиглан санаагаа кодод буулгах зорилготой. Жижиг, том гэлтгүй ямар ч хэмжээтэй програмыг гаргацтай байдлаар бичих боломжийг олгодог.</h1>
                </div>
                <Button className="w-[10%] h-[10%] text-base border-2 border-y-gradient-start border-x-gradient-end" href="/task1">Дараагийн</Button>
            </div>
        </div>
    );
}