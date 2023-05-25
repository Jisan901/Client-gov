import useAuth from "../utilities/hooks/useAuth"
import imge from "../assets/logo.png"
import useServerAuth from "../utilities/hooks/useServerAuth"
import {useNavigate, Link} from "react-router-dom"
import { useState } from "react";
import toast from "react-hot-toast"
function Login() {
    const [pending, setPending] = useState(false);
    console.log(useAuth());
    const {signIn}=useAuth();
    const {login} = useServerAuth();
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault()
        setPending(true)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(res=>{
            console.log(res);
            login({email:res?.user?.email,password:res?.user?.uid})
            .then(res=>{
                setPending(false)
            })
            navigate("/")
            })
        .catch((err)=>{
            console.log(err);
            toast.error(err.message)
            setPending(false)
        })
    }
    return (
        <div className="py-10 px-2 min-h-screen flex justify-center items-center flex-col">
            <form className="max-w-xs w-full shadow-xl rounded-lg p-4 mx-auto flex justify-center flex-col items-center bg-base-100" onSubmit={handleSubmit}>
                <img height="60" width="60" src={imge} alt="logo" />
                <h1 className="text-3xl text-center mt-2 font-bold">বাংলাদেশ সমাজ কল্যাণ মন্ত্রণালয় লগইন</h1>
                <input className="input input-bordered mt-2 w-full" type="text" name="email" placeholder="ইমেইল"/>
                
                <input className="input input-bordered mt-2 w-full" type="text" name="password" placeholder="পাসওয়ার্ড"/>
                <div className="w-full">
                    
                <Link to="/forget" className="my-2 text-accent">পাসওয়ার্ড ভুলে গেছি</Link>
                <br />
                <span className="mt-1">কোনো একাউন্ট নেই ? <Link to="/signup" className="text-accent">সাইনআপ</Link></span>
                </div>
                
                <button className="btn btn-primary text-white w-full bg-gradient-to-r from-primary to-accent mt-2" type="submit" disabled={pending}>লগইন</button>
            </form>
        </div>
    )
}

export default Login;