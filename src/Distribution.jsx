import { ChevronDown } from "lucide-react";

export default function Distribution(){
    return(
        <div className="distributionBox bg-white rounded-lg h-[296px] p-6 border-[#F0F1F5] border w-[33%]">
           <div className="title flex items-center justify-between mb-6">
             <h3 className='text-[#2D3039] text-[18px] font-bold'>Department Distribution</h3>
             <div className="filter flex items-center gap-2 h-8 bg-[#F0F1F5] px-3 py-2 rounded-lg">
                <span>Weekly</span>
                <ChevronDown />
             </div>
            </div>
             <div className="distributionCard">
                    <div className="cont flex items-center justify-between mb-6">
                        <div className="department flex items-center gap-2">
                           <div className="square h-6 rounded-sm w-[36px] bg-[#0018A6]"></div>
                           <span className='text-[#2D3039] font-regular'>Pediatrics</span>
                        </div>
                        <div className="state">
                            <span className='text-lg font-normal text-[#2D3039]'>200</span>
                        </div>
                     </div>

                       <div className="cont flex items-center justify-between mb-6">
                        <div className="department flex items-center gap-2">
                           <div className="square h-6 rounded-sm w-[48px] bg-[#00875A]"></div>
                           <span className='text-[#2D3039] font-regular'>Neurology</span>
                        </div>
                        <div className="state">
                            <span className='text-lg font-normal text-[#2D3039]'>160</span>
                        </div>
                     </div>
                       <div className="cont flex items-center justify-between mb-6">
                        <div className="department flex items-center gap-2">
                           <div className="square h-6 rounded-sm w-[80px] bg-[#FFB020]"></div>
                           <span className='text-[#2D3039] font-regular'>Cardiology</span>
                        </div>
                        <div className="state">
                            <span className='text-lg font-normal text-[#2D3039]'>120</span>
                        </div>
                     </div>
                       <div className="cont flex items-center justify-between">
                        <div className="department flex items-center gap-2">
                           <div className="square h-6 rounded-sm w-[120px] bg-[#6B707B]"></div>
                           <span className='text-[#2D3039] font-regular'>Others</span>
                        </div>
                        <div className="state">
                            <span className='text-lg font-normal text-[#2D3039]'>100</span>
                        </div>
                     </div>
             </div>
       
        </div>
    );
}