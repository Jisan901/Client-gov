import toast from "react-hot-toast";
function useServerAuth() {
    return {
        signup : async(data)=>{
            const res = await fetch(process.env.REACT_APP_SERVER_API+"signup",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const dataS = await res.json()
            if (dataS?.token) {
                localStorage.setItem("access_token",dataS.token)
            }
            toast(dataS?.message)
            return dataS
        },
        login : async(data)=>{
            const res = await fetch(process.env.REACT_APP_SERVER_API+"login",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const dataS = await res.json()
            toast(dataS?.message)
            if (dataS?.token) {
                localStorage.setItem("access_token",dataS.token)
            }
            return dataS
        }
    }
}

export default useServerAuth;