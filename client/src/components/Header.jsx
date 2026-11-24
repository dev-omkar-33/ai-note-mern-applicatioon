import { useState,useRef,useLayoutEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const tabs = ['Dashboard', 'Notes', 'AI Assistant', 'Search'];

export default function Header(){

    const [active,setActive] = useState(0);
    const [line,setLine] = useState({left:0,width:0});
    const refs = useRef([]);

    useLayoutEffect(() => {
    const el = refs.current[active]
    setLine({ left: el.offsetLeft, width: el.offsetWidth })
    }, [active]);
    
     return (
     <header className="flex min-w-full bg-blue-200 items-center px-8 py-2 justify-between shadow-md">
            <div className="flex justify-between flex-wrap ">
            <p className="font-bold text-xl">NoteAI</p>
                <nav className="flex pl-16 gap-10 relative" >
                    {
                        tabs.map((tab,i)=>(
                            <button
                            key={tab}
                            onClick={()=>setActive(i)}
                            className={ `pb-1 transition-colors ${active===i?'text-blue-500':'text-black'}`}
                            ref={(el)=>{refs.current[i]= el}}
                            >
                                {tab}
                            </button>
                        ))      
                    }
                    <span className="absolute bottom-0 h-1 bg-blue-300 transition-all duration-300"   style={{ left: line.left, width: line.width }}/>
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



