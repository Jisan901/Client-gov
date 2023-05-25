import { useContext } from "react";
import {userContext} from "../contexts/AuthContext";
function useAuth() {
    return  {...useContext(userContext)};
}

export default useAuth;