import { useState, useEffect } from "react";
import toast from 'react-hot-toast'
function useServerUser() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API+"user",{
            headers:{
                authorization:"Bearer "+localStorage.getItem("access_token")
            }
        })
        .then(res=>res.json())
        .then(data=>{setUser(data);setLoading(false)})
        .catch(err=>toast.error("something went wrong"))
    }, []);
    return {user,loading}
}

export default useServerUser;