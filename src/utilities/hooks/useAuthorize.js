import axios from "axios";
import useAuth from "./useAuth";
function useAuthorize() {
        const fetchData = async(access)=>{
            if (access) {
                
            const data = await axios.post("/user/authorize",{
                token:`bearer ${access}`
            })
            console.log(data);
            }
        }
        return fetchData
}

export const useAuthorizeBy=()=>{
    const {user} = useAuth()
    return async ()=>{
        
        const data = await axios.post("/user/authorize",{
                token:`bearer ${user?.accessToken}`
            })
            console.log(data)
    }
}

export default useAuthorize;