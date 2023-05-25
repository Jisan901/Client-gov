import imge from "../assets/logo.png"
import useServerUser from "../utilities/hooks/useServerUser";
import { useState,useEffect } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
function ApplyAsPrl() {
    const {user}=useServerUser();
    const navigate=useNavigate()
    const [next, setNext] = useState("");
    const [retYear, setRetYear] = useState(62);
    const [pending, setPending] = useState(false);

    useEffect(() => {
    const myDate=user?.birthday.split("-")||["2000","1","1"]
    const newDate=new Date(parseInt(myDate[0])+retYear, myDate[1]-1, myDate[2]).toISOString().split('T')[0]
    setNext(newDate)
    }, [user,retYear]);
    
    
    
    const handleSubmit= e =>{
        e.preventDefault()
        setPending(true)
        
        const uid = user?._id?.$oid
        const birthday = e.target.birthday.value
        fetch(process.env.REACT_APP_SERVER_API+"application",{
            method:"POST",
            headers:{
                authorization:"Bearer "+localStorage.getItem("access_token"),
                "content-type":"application/json"
            },
            body:JSON.stringify({
                userId:uid,
                birthday,
                isPrl:true,
                email:user?.email,
                retYear:retYear,
                warrior:retYear===62
            })
        })
        .then(res=>res.json())
        .then(data=>{
            setPending(false)
            if (data.acknowledged===true) {
                toast.success("আবেদন সফল হয়েছে")
                navigate('/')
            }
        })
        .catch(err=>{toast.error(err.message);setPending(false)})
        
    }

    return (
        <div className="py-10 px-2 min-h-screen flex justify-center items-center flex-col">
            <form onSubmit={handleSubmit} className="max-w-xs md:max-w-lg w-full shadow-xl rounded-lg p-4 mx-auto flex justify-center flex-col items-center bg-base-100">
                <img height="60" width="60" src={imge} alt="logo" />
                <h1 className="text-3xl text-center mt-2 font-bold">পিআরএল এর আবেদন</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
        
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">নাম</span>
                  </label>
                  <input className="input input-bordered mt-2 w-full" type="text" name="name" value={user?.name}/>
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">ফোন</span>
                  </label>
                  <input className="input input-bordered mt-2 w-full" type="text" name="phone" value={user?.phone}/>
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">ইমেইল</span>
                  </label>
                  <input className="input input-bordered mt-2 w-full" type="email" name="email" value={user?.email}/>
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">কর্মস্থল</span>
                  </label>
                  <input className="input input-bordered mt-2 w-full" type="text" name="workplace" value={user?.workplace}/>
                </div>
                
                <div className="w-full md:col-span-2 flex justify-between items-center my-3">
                    <label className="flex items-center justify-center gap-2">
                    মুক্তিযোদ্ধা 
                    <input onClick={()=>setRetYear(62)} type="radio" name="radio-3" className="radio radio-primary"  />
                    </label>
                    <label className="flex items-center justify-center gap-2">
                    সাধারণ
                    <input onClick ={()=>setRetYear(59)} type="radio" name="radio-3" className="radio radio-primary" />
                    </label>
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">জন্ম তারিখ  <small>(Y-M-D)</small></span>
                  </label>
                  <input className="input input-bordered mt-2 w-full" type="text" name="birthday" placeholder="Date of birth" value={user?.birthday} disabled/>
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">পিআরএল গমন এর তারিখ <small>(Y-M-D)</small></span>
                  </label>
                  <input className="input input-bordered mt-2 w-full" type="text" name="retired" placeholder="Retirement" value={next}/>
                </div>
                
                </div>
                <button disabled={pending} className="btn btn-primary text-white w-full bg-gradient-to-r from-primary to-accent mt-2" type="submit">আবেদন</button>
            </form>
        </div>
    
    )
}

export default ApplyAsPrl;