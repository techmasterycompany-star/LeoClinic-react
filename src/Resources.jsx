export default function Resources(){
    return(
         <div className="resourcesBox  bg-white rounded-lg h-[255px] p-6 border-[#F0F1F5] border w-[33%]">
            <h3 className='text-[#2D3039] text-[18px] font-bold mb-2'>Resource Allocation</h3>
            <div className="resourceContent">
            <div className="data mb-1">
                <span className="text-[12px]">Staffing</span>
                <div className="progressBar  w-full h-3 bg-[#F0F1F5] rounded-xl mt-[6px]">
                    <span className='relative block h-full rounded-xl after:absolute after:top-[-32px] after:right-[-36px] after:text-[#2D3039] after:text-[12px] after:content-["88%"] bg-[#0018A6] w-[88%]'></span>
                </div>
            </div>
            <div className="data mb-4">
                <span className="text-[12px]">Staffing</span>
                <div className="progressBar  w-full h-3 bg-[#F0F1F5] rounded-xl mt-[6px]">
                    <span className='relative block h-full rounded-xl after:absolute after:top-[-32px] after:right-[-124px] after:text-[#2D3039] after:text-[12px] after:content-["64%"] bg-[#FFB020] w-[64%]'></span>
                </div>
            </div>
            <div className="data mb-4">
                <span className="text-[12px]">Pharmacy Stock</span>
                <div className="progressBar  w-full h-3 bg-[#F0F1F5] rounded-xl mt-[6px]">
                    <span className='relative block h-full rounded-xl after:absolute after:top-[-32px] after:right-[-20px] after:text-[#2D3039] after:text-[12px] after:content-["94%"] bg-[#00875A] w-[94%]'></span>
                </div>
            </div>
            <div className="data">
                <span className="text-[12px]">Equipment</span>
                <div className="progressBar w-full h-3 bg-[#F0F1F5] rounded-xl mt-[6px]">
                    <span className='relative block h-full rounded-xl after:absolute after:top-[-32px] after:right-[-136px] after:text-[#2D3039] after:text-[12px] after:content-["61%"] bg-[#6B707B] w-[61%]'></span>
                </div>
            </div>
            </div>
       
        </div>
    );
}
