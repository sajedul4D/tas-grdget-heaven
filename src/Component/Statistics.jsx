
import React from 'react';



import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from "recharts";
const Statistics = () => {
    const data = [
        {
          name: "Laptop",
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490
        },
        {
          name: "Iphone",
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590
        },
        {
          name: "HedPhone",
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350
        },
        {
          name: "Smart Watch",
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480
        },
        {
          name: "USB-C",
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460
        },
        {
          name: "tablet",
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380
        },
            {
                name: "Desktop",
                uv: 1400,
                pv: 680,
                amt: 1700,
                cnt: 380
              }
        
      ];
    return (
        <div>

<div className='bg-[#9538E2] pb-20 '>
          <div className="text-white text-center pt-10">
                <h1 className="font-bold text-4xl">Statistics</h1> <br />
                <p className="opacity-60 max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p> <br />
            </div>
          </div>  
     <div className='w-1/2 mx-auto text-center'>
     <ComposedChart
      width={1000}
      height={600}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      <Scatter dataKey="cnt" fill="red" />
    </ComposedChart>

     </div>
        </div>
    );
};

export default Statistics;