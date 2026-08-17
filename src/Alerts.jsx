import { CircleAlert, CircleCheck} from "lucide-react";

export default function Alerts(){
    return(
        <div className="box bg-white rounded-lg h-[255px] p-6 border-[#F0F1F5] border w-[67%]">
            <h3 className='text-[#2D3039] text-[18px] font-bold mb-4'>Operational Alerts</h3>
            <div className="boxContent w-full">
               <div className="bg-[#FFF4E0] border border-[#FFB020] h-19 mb-4 flex items-center gap-5 rounded-lg p-2">
                 <div style={{color:"#FFB020"}}>
                    <CircleAlert/>
                 </div>
                <div className="text">
                    <h4 className="text-[14px]">High Occupancy in Cardiology</h4>
                    <p className='text-[#6B707B] font-medium text-[12px]'>Icu beds are at 90% capacity. Consider rerouting non-emergency cases.</p>
                </div>
            </div>
            <div className="bg-[#E6F5EA] border border-[#00875A] h-19  flex items-center gap-5 rounded-lg p-2">
                <div style={{color :"#00875A"}}>
                   <CircleCheck/>
                </div>
                <div className="text">
                    <h4 className="text-[14px]">Effciency Increase</h4>
                    <p className='text-[#6B707B] font-medium text-[12px]'>Average discharge time improved by 15% this week.</p>
                </div>
            </div>
        </div>
    </div>
         
    );
}