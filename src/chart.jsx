import { ChevronDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function Chart(){
    return(
        <div className="chartCard bg-white rounded-lg h-[296px] p-6 border-[#F0F1F5] border w-[67%]">
          <div className="chartTitle mb-5 flex justify-between items-center">
               <div className="text">
                   <h3 className="text-[#2D3039] text-[18px] font-bold">Patient Inflow Trends</h3>
                   <p className="text-[#8D929B] text-[12px]">Weekly Comparison of new vs returning patients</p>
               </div>
               <div className="choice flex items-center gap-1">
                  <form action="">
                     <input type="radio" name="patient" className="mr-2" id="new"/>
                     <label htmlFor="new" className="mr-2">New</label>
                     <input type="radio" name="patient" id="returning" className="mr-2 outline-0"/>
                     <label htmlFor="returning"className="mr-2">Returning</label>
                  </form>
                   <div className="filter flex items-center gap-2 h-8 bg-[#F0F1F5] px-3 py-2 rounded-lg">
                        <span>Weekly</span>
                        <ChevronDown />
                   </div>
               </div>
           </div>
           <div className="chart-container ">
               <PatientInflowChart />                   
           </div>
           <span className="observe text-[#00875A]">+18.3% New patients in the last month</span>
        </div>
     
    );
}

function PatientInflowChart() {
  const data = [
  { day: "Mon", newPatients: 90, returning: 120 },
  { day: "Tue", newPatients: 160, returning: 200 },
  { day: "Wed", newPatients: 140, returning: 170 },
  { day: "Thu", newPatients: 210, returning: 250 },
  { day: "Fri", newPatients: 150, returning: 190 },
  { day: "Sat", newPatients: 100, returning: 130 },
];  
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={141}>
        <LineChart data={data} style={{paddingLeft: '8px'}}>
          <CartesianGrid strokeDasharray="0" vertical={false} />

          <XAxis className="pl-2"
            dataKey="day"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Line
            type="linear"
            dataKey="newPatients"
            stroke="#1026B3"
            strokeWidth={2}
            dot={false}
          />

          <Line
            type="linear"
            dataKey="returning"
            stroke="#008F63"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}