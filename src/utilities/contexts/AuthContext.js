import React,{useState,createContext,useEffect} from 'react';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile,sendPasswordResetEmail} from 'firebase/auth';
import app from '../firebase/firebase.init';


const auth = getAuth(app);


export const userContext = createContext();


function AuthContext({children}) {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    
    
    
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    
    const signIn = (email,password) =>
    {
    return signInWithEmailAndPassword(auth,email,password);
    }
    
    
    
    const logOut = () => {
    localStorage.clear("access_token")
    setUser(null)
    return signOut(auth);
    }
    
    
    
    const updateUser = (Cuser,data)=> {
        return updateProfile(Cuser,data);
    }
    
    
    
    const forgetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    
    
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            
            if(localStorage.getItem("access_token")){
            fetch(process.env.REACT_APP_SERVER_API+"lookup",{
                headers:{
                    authorization:`Bearer ${localStorage.getItem("access_token")}`
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if (!data?.status===true) {
                    logOut()
                    localStorage.clear("access_token")
                }
            })}
            
            
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    
    
    
    const contextValue = {user,createUser,signIn,logOut,updateUser,loading,forgetPassword};
    
    

  return (
    <userContext.Provider value={contextValue}>
        {children}
    </userContext.Provider>
  );
}

export default AuthContext;
