import imge from "../assets/logo.png"
import useServerUser from "../utilities/hooks/useServerUser";
import { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
function ApplyAsNormal() {
    const {user}=useServerUser();
    const navigate=useNavigate()
    const [next, setNext] = useState("");
    const [pending, setPending] = useState(false);
    const setRet = e=>{
        const myDate=e.target.value.split("-")
        const newDate=new Date(parseInt(myDate[0])+3, myDate[1]-1, myDate[2]).toISOString().split('T')[0]
        setNext(newDate)
    }
    
    const handleSubmit= e =>{
        e.preventDefault()
        setPending(true)
        
        const uid = user?._id?.$oid
        const last_vacation = e.target.vacation.value
        fetch(process.env.REACT_APP_SERVER_API+"application",{
            method:"POST",
            headers:{
                authorization:"Bearer "+localStorage.getItem("access_token"),
                "content-type":"application/json"
            },
            body:JSON.stringify({
                userId:uid,
                last_vacation,
                isPrl:false,
                email:user?.email
            })
        })
        .then(res=>res.json())
        .then(data=>{
            setPending(false)
            if (data.acknowledged===true) {
                toast.success("আবেদনটি গ্রহণ হয়েছে")
                navigate('/')
            }
        })
        .catch(err=>{toast.error("ত্রুটি আছে");setPending(false)})
        
    }

    return (
        <div className="py-10 px-2 min-h-screen flex justify-center items-center flex-col">
            <form onSubmit={handleSubmit} className="max-w-xs md:max-w-lg w-full shadow-xl rounded-lg p-4 mx-auto flex justify-center flex-col items-center bg-base-100">
                <img height="60" width="60" src={imge} alt="logo" />
                <h1 className="text-3xl text-center mt-2 font-bold">বাংলাদেশ সমাজ কল্যাণ মন্ত্রণালয় সাধারণ আবেদন</h1>
                
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
                
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">শেষ শান্তি বিনোদন ছুটির দিন</span>
                  </label>
                  <input className="input input-bordered mt-2 w-full" type="date" name="vacation" onChange={setRet}/>
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">পরবর্তী শান্তি বিনোদন ছুটির দিন <small>(Y-M-D)</small></span>
                  </label>
                  <input className="input input-bordered mt-2 w-full" type="text" name="retired" placeholder="Next vacation" value={next} />
                </div>
                
                </div>
                <button className="btn btn-primary text-white w-full bg-gradient-to-r from-primary to-accent mt-2" type="submit" disabled={pending}>আবেদন</button>
            </form>
        </div>
    
    )
}

export default ApplyAsNormal;