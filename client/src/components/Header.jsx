import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const tabs = ['Dashboard', 'Notes', 'AI Assistant', 'Search'];

export default function Header(){

    const [active,setActive] = useState(0);

        return (
        <header className="flex min-w-full bg-blue-200 items-center px-8 py-2 justify-between shadow-md">
            <div className="flex justify-between flex-wrap ">
                <p className="font-bold text-xl">NoteAI</p>
                <nav className="flex pl-16 gap-10" >
                    {
                        tabs.map((tab,i)=>(
                            <button 
                            
                            key={tab}
                            onClick={()=>setActive(i)}
                            className={`transitioin-colors ${active===i?'text-blue-500':'text-black'}`}
                            >
                                {tab}
                            </button>
                        ))      
                    }
                </nav>
            </div>
            <div className="flex gap-3 items-center">
                <div className="bg-pink-500 w-8 h-8 rounded-full"></div>
                <p className="">Alex Morgan</p>
                <span className=""><MdKeyboardArrowDown size={20}/></span>
            </div>
        </header>
    )
}



