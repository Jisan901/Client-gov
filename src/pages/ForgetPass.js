import useAuth from "../utilities/hooks/useAuth"
import imge from "../assets/logo.png"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import toast from "react-hot-toast"
function ForgetPass() {
    const [pending, setPending] = useState(false);
    const { forgetPassword}=useAuth();
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault()
        setPending(true)
        const form = e.target;
        const email = form.email.value;

        forgetPassword(email)
        .then(res=>{
            console.log(res);
            toast.success("ইমেইল পাঠানো হয়েছে, আপনার মেইল এ স্প্যাম অথবা ইনবক্স এ খুজুন")
            navigate("/login")
            })
        .catch((err)=>{
            console.log(err);
            toast.error("কোনো ত্রুটি আছে")
            setPending(false)
        })
    }
    return (
        <div className="py-10 px-2 min-h-screen flex justify-center items-center flex-col">
            <form className="max-w-xs w-full shadow-xl rounded-lg p-4 mx-auto flex justify-center flex-col items-center bg-base-100" onSubmit={handleSubmit}>
                <img height="60" width="60" src={imge} alt="logo" />
                <h1 className="text-3xl text-center mt-2 font-bold">পাসওয়ার্ড ভুলে গেছি</h1>
                <input className="input input-bordered mt-2 w-full" type="text" name="email" placeholder="ইমেইল"/>
                
                <button className="btn btn-primary text-white w-full bg-gradient-to-r from-primary to-accent mt-2" type="submit" disabled={pending}>সেন্ড</button>
            </form>
        </div>
    )
}

export default ForgetPass;