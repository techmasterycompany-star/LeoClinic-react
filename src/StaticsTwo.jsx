import { Clock4 , MoveDownLeft } from "lucide-react";

export default function StaticTwo(){
    return(
        <div className="card bg-white w-full  h-43 rounded-3xl flex items-start justify-between p-6 shadow-black-50 shadow-1xl">
             <div className="content">
                <div className="ICON mb-8 w-[42px] h-[42px] flex items-center justify-center text-[#0018A6] p-2 rounded-xl bg-[#F0F1F5]">
                  <Clock4 />
                </div>
                 <div className="text text-left">
                    <span>Pending Payments</span>
                    <h2 className='mt-2'>$18,240.00</h2>
                 </div> 
             </div>
             <div>
                <div className='state flex items-center gap-1/4'>
                    <div className="down" style={{ color: "#DA1E28"}}>
                        < MoveDownLeft />
                    </div>
                    <span style={{ color: "#DA1E28"}}>-3.4%</span>
                </div>
             </div>
        </div>
    );
}