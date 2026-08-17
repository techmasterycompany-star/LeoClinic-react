import { CircleDollarSign , MoveUpRight } from "lucide-react";

export default function StaticsOne(){
    return(
        <div className="card bg-white w-full h-43 rounded-3xl flex items-start justify-between p-6 shadow-black-50 shadow-1xl">
             <div className="content">
                <div className="ICON mb-8 w-[42px] h-[42px] flex items-center justify-center text-[#0018A6] p-2 rounded-xl bg-[#F0F1F5] ">
                   <CircleDollarSign />
                </div>
                 <div className="text text-left">
                    <span>Total Revenue</span>
                    <h2 className='mt-2'>$328,4500.00</h2>
                 </div> 
             </div>
             <div>
                <div className='state flex items-center gap-1/4'>
                 <div className="up" style={{ color: "#00875A"}}>
                    <MoveUpRight />
                 </div>   
                 <span style={{ color: "#00875A"}}>+12.5%</span>
                </div>
             </div>
        </div>
    );
}