import imge from "../assets/logo.png"
import useAuth from "../utilities/hooks/useAuth"
import useServerAuth from "../utilities/hooks/useServerAuth"
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import { useState } from "react";

function Signup() {
    const [pending, setPending] = useState(false);
    const { createUser, updateUser }=useAuth();
    const {signup} = useServerAuth();
    const navigate = useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setPending(true)
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const birthday = form.birthday.value;
        const isPrl = form.isPrl.value;
        const workplace = form.workplace.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email,password)
        .then(res=>{
            updateUser(res.user,{
                displayName:name
            })
            signup({name,phone,birthday,isPrl,workplace,email,password:res?.user?.uid})
            .then(res=>{
            toast.success("অ্যাকাউন্ট খোলা হয়েছে")
            
            setPending(false)
            navigate('/')
            }
            )
        })
        .catch(error=>{
            setPending(false)
            toast.error("কোনো ত্রুটি আছে")
        })
        
    }
    
    return (
        <div className="py-10 px-2 min-h-screen flex justify-center items-center flex-col">
            <form onSubmit={handleSubmit} className="max-w-xs w-full shadow-xl rounded-lg p-4 mx-auto flex justify-center flex-col items-center bg-base-100">
                <img height="60" width="60" src={imge} alt="logo" />
                <h1 className="text-3xl text-center mt-2 font-bold">বাংলাদেশ সমাজ কল্যাণ মন্ত্রণালয় সাইনআপ</h1>
                
                <input className="input input-bordered mt-2 w-full" type="text" name="name" placeholder="নাম"/>
                
                
                <input className="input input-bordered mt-2 w-full" type="tel" name="phone" placeholder="+8801234567890"/>
                
                
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">জন্ম তারিখ</span>
                  </label>
                  <input className="input input-bordered mt-2 w-full" type="date" name="birthday" placeholder="Date of birth"/>
                </div>

                
                <div className="w-full flex justify-between items-center my-3">
                    <label className="flex items-center justify-center flex-row-reverse gap-2">
                    পিআরএল 
                    <input type="radio" name="isPrl" className="radio radio-primary" checked value="prl"/>
                    </label>
                    <label className="flex items-center justify-center gap-2">
                    সাধারণ
                    <input type="radio" name="isPrl" className="radio radio-primary" value="noneprl" />
                    </label>
                </div>

                <select className="select mt-2 select-bordered w-full" name="workplace">
                  <option disabled selected>Workplace</option>
                  <option value="school">স্কুল</option>
                  <option value="library">আদালত</option>
                  <option value="supplier">সরকারি অফিস</option>
                  <option value="madman">পাগল</option>
                </select>
                
                
                <input className="input input-bordered mt-2 w-full" type="email" name="email" placeholder="ইমেইল"/>
                
                
                <input className="input input-bordered mt-2 w-full" type="password" name="password" placeholder="পাসওয়ার্ড"/>
                
                <button className="btn btn-primary text-white w-full bg-gradient-to-r from-primary to-accent mt-2" type="submit" disabled={pending}>সাইনআপ</button>
            </form>
        </div>
    )
}

export default Signup;