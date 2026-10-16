import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import logo from '../assets/doc-success-svgrepo-com.svg';
import Areachart from '../component/AreaChart.jsx'
const Dashboard = () => {

    return(
    <>
        <div className="min-w-full min-h-screen bg-black">

            {/* Header */}

            <header className="flex justify-between items-center mx-8 pt-4 ">
                
                <div className="flex">

                    <div className="ml-6 w-13 h-13 ">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="ml-5 flex flex-col">
                        <h3 className="text-white text-[21px] font-bold">NoteAI</h3>
                        <h5 className="text-white text-[13px] -mt-1">Your intelligent note companion</h5>
                    </div>

                </div>

                <div className="h-10 text-white  text-[24px] mr-4 ">
                    <FaRegBell className="h-[40px]"/>
                </div>

            </header>

            {/* Card section */}

            <section className="min-w-full h-auto px-[200px] py-14 flex justify-between ">

                <div className="h-[190px] w-[220px] bg-gray-600 border rounded-xl flex flex-col px-4">
                    <div className="flex justify-between items-center mt-4">
                        <img src={logo} alt="logo" className="w-10 " />
                        <button className="text-green-500 bg-gray-700 rounded-md px-2  text-sm">+12%</button>
                    </div>

                    <p className="text-gray-400 text-[20px] font-bold">Notes</p>

                    <div className="mt-3">
                            <h1 className="text-white font-bold text-[36px]">248</h1>
                            <p className="text-gray-400 font-bold">Total saved notes</p>
                    </div>                              
                </div>

                <div className="h-[190px] w-[220px] bg-gray-600 border rounded-xl flex flex-col px-4">
                    <div className="flex justify-between items-center mt-4">
                        <img src={logo} alt="logo" className="w-10 " />
                        <button className="text-green-500 bg-gray-700 rounded-md px-2  text-sm">+12%</button>
                    </div>

                    <p className="text-gray-400 text-[20px] font-bold">Notes</p>

                    <div className="mt-3">
                            <h1 className="text-white font-bold text-[36px]">248</h1>
                            <p className="text-gray-400 font-bold">Total saved notes</p>
                    </div>                    
                </div>


            </section>

            {/* Chart sect */}
            <section className="w-full flex justify-center">

                <div className="bg-white w-[900px] rounded-xl">

                <div className="flex justify-between mx-16 p-4">
                    <div className="">
                        <h3 className="font-bold">Daily Productivity</h3>
                        <p className="">Your note activity this week</p>
                    </div>
                    <button className="text-black font-bold bg-gray-100 rounded-md px-3 text-sm">This week</button>
                    {/* <span className="">This week</span> */}
                </div>

                <div className="w-full px-3">
                    <Areachart className=""/>
                </div>

                </div>

            </section>

            {/* Action section  */}
            <section className="mt-6 w-full flex justify-center">

                <div className="bg-white w-[900px] px-15 py-10 rounded-xl">

                <div className="text-black font-bold text-[16px] ">Quick Actions</div>
                <div className="">Jump into your most used tools</div>

                <div className="flex mt-14 justify-between">
                    <div className="flex flex-col border items-center p-2 rounded-md w-[90px]">
                        <span className="text-[24px] font-bold">+</span>
                        New Note
                    </div>
                     <div className="flex flex-col border items-center p-2 rounded-md w-[90px]">
                        <span className="text-[24px] font-bold">+</span>
                        Ask AI
                    </div>
                     <div className="flex flex-col border items-center p-2 rounded-md w-[90px]">
                        <span className="text-[24px] font-bold">+</span>
                        Search
                    </div>
                    
                </div>
                </div>

            </section>

            {/* Note card section  */}
          
            <section className="mt-6 w-full flex justify-center">

                <div className="bg-white w-[900px] px-15 py-4 rounded-xl">

                <div className="">
                    <h2 className="font-bold text-[17px]">Recent Notes</h2>
                    <h4 className="text-[15px]">Latest captured ideas and summaries </h4>
                </div>
            {/*  */}
                <div className="mt-7 flex flex-row justify-between hover:border hover:rounded-xl px-3 py-2 items-center">
                    <div className="flex flex-row items-center">
                        <div className="">Logo</div>

                        <div className="ml-7">
                            <p className="">Project roadmap brainstorm</p>
                            <p className="text-[13px]">AI summaries . Time</p>
                        </div>   
                    </div>

                    <div className=""><FaAngleRight/></div>
                </div>
            {/*  */}
                <div className="mt-7 flex flex-row justify-between hover:border hover:rounded-xl px-3 py-2 items-center">
                    <div className="flex flex-row items-center">
                        <div className="">Logo</div>

                        <div className="ml-7">
                            <p className="">Project roadmap brainstorm</p>
                            <p className="text-[13px]">AI summaries . Time</p>
                        </div>   
                    </div>

                    <div className=""><FaAngleRight/></div>
                </div>
            {/*  */}
                <div className="mt-7 flex flex-row justify-between hover:border hover:rounded-xl px-3 py-2 items-center">
                    <div className="flex flex-row items-center">
                        <div className="">Logo</div>

                        <div className="ml-7">
                            <p className="">Project roadmap brainstorm</p>
                            <p className="text-[13px]">AI summaries . Time</p>
                        </div>   
                    </div>

                    <div className=""><FaAngleRight/></div>
                </div>

                </div>
                

            </section>

            {/* Footer */}
           
            <footer className="mt-6 w-full flex justify-center">

                <div className="bg-white min-w-full px-31 py-1 flex flex-row justify-between ">

                       <div className="flex flex-col border items-center p-2 rounded-md w-[90px]">
                            <span className="text-[24px] font-bold">+</span>
                            Notes
                        </div>

                       <div className="flex flex-col border items-center p-2 rounded-md w-[90px]">
                        <span className="text-[24px] font-bold">+</span>
                            AI Assistant
                    </div>

                       <div className="flex flex-col border items-center p-2 rounded-md w-[90px]">
                        <span className="text-[24px] font-bold">+</span>
                            Search
                    </div>

                       <div className="flex flex-col border items-center p-2 rounded-md w-[90px]">
                        <span className="text-[24px] font-bold">+</span>
                            Profile
                    </div>

                </div>

            </footer>

        </div>
    </>
    )

};

export default Dashboard;
