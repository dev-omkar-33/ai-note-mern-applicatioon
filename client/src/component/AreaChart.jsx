'use client';

import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Notes = [
  { day: "Mon", note1: 4, note2: 2 },
  { day: "Tues", note1: 3, note2: 5 },
  { day: "Wed", note1: 6, note2: 3 },
  { day: "Thur", note1: 2, note2: 7 },
  { day: "Fri", note1: 5, note2: 4 },
  { day: "Sat", note1: 7, note2: 6 },
];

const Areachart = () => {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={Notes}>
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 15]} ticks={[0, 5, 10, 15]} />
                    <Tooltip/>
                    <Legend/>
                    <CartesianGrid strokeDasharray="5 5"/>

                    <Area
                        type="monotone"
                        dataKey="note1"
                        stroke="#8884d8"
                        fill="#000000"
                        stackId="1"
                    />

                    <Area
                        type="monotone"
                        dataKey="note2"
                        stroke="#8884d8"
                        fill="#3b82f6"
                        stackId="1"
                    />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Areachart;