import useServerUser from "../utilities/hooks/useServerUser";
import {Navigate} from "react-router-dom"
import toast from "react-hot-toast"
function NormalOnly({children}) {
    const {user,loading} = useServerUser();
    
    if (loading) {
        return <h1 className="text-3xl mt-2 text-center">Loading...</h1>
    }
    
    if (user?.isPrl==="noneprl") {
        return <>{children}</>
    }
    else{
        toast.error("your account is PRL type")
        return <Navigate to="/" />
    }
}

export default NormalOnly;