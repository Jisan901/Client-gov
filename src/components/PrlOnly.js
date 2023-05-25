import {Navigate} from "react-router-dom"
import toast from "react-hot-toast"
import useServerUser from "../utilities/hooks/useServerUser";

function PrlOnly({children}) {
    const {user,loading}=useServerUser();
    
    if (loading) {
        return <h1 className="text-3xl mt-2 text-center">Loading...</h1>
    }
    
    if (user?.isPrl==="prl") {
        return <>{children}</>
    }
    else{
        toast.error("your account is not PRL type")
        return <Navigate to="/" />
    }
}

export default PrlOnly;