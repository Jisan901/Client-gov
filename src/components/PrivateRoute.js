import useAuth from '../utilities/hooks/useAuth'
import {Navigate} from 'react-router-dom'

function PrivateRoute({children}) {
    
    const { user, loading } = useAuth()
    
    if (loading) {
        return <h1 className="text-center mt-4 4xl">Loading...</h1>
    }
    if (!user?.uid) {
        return <Navigate to="/login"/>
    }
    else{
        return <>{children}</>
    }
}

export default PrivateRoute;