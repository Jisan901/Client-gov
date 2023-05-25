import { useState, useEffect } from "react";
function Swaper() {
    const [count, setCount] = useState(1);
    
    useEffect(()=>{
        setInterval(function() {
            setCount(current=>current===3?1:current+1)
        }, 4000);
    },[])
    return (
        <div>
            
        <div className="overlay-main min-h-screen">
            
        </div>
    <div className="swaper min-h-screen">
            <div className={count===1?"fadeIn":"fadeOut"} style={{backgroundImage:"url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0_%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A6%AF%E0%A6%BC_%E0%A6%B8%E0%A6%82%E0%A6%B8%E0%A6%A6_%E0%A6%AD%E0%A6%AC%E0%A6%A8_24.jpg/800px-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0_%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A6%AF%E0%A6%BC_%E0%A6%B8%E0%A6%82%E0%A6%B8%E0%A6%A6_%E0%A6%AD%E0%A6%AC%E0%A6%A8_24.jpg')"}} alt="banner1" ></div>
            <div className={count===2?"fadeIn":"fadeOut"} style={{backgroundImage:"url('https://images.theconversation.com/files/388314/original/file-20210308-13-un5d1h.jpg?ixlib=rb-1.1.0&rect=40%2C0%2C3789%2C2578&q=45&auto=format&w=926&fit=clip')"}} alt="banner2" ></div>
            <div className={count===3?"fadeIn":"fadeOut"} style={{backgroundImage:"url('https://new-media.dhakatribune.com/en/uploads/2022/07/27/whatsapp-image-2022-06-29-at-60644-pm-1.jpeg')"}} alt="banner3" ></div>
        </div>
        </div>
    )
}

export default Swaper;