import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect,signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
import { Navigate } from "react-router-dom";
const AuthContext = createContext();
export  const AuthContextProvider = ({children})=>{

    const googleSignIn = async ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        // signInWithRedirect(auth, provider);
    }
    const [user, setUser] = useState({name:"",profileImg:""})

    const logOut =()=>{
        signOut(auth);
        // <Navigate to='/' />
    }
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser);
        console.log('User',user);
        // console.log(currentUser.displayName);
        if(user && user.name && user.profileImg)
        axios.post("http://localhost:5000/signin",user)
    })
     return ()=>{
        unsubscribe();
     };
    }, [user]);
    
    return(
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
        {children}
        </AuthContext.Provider>
    )
} 

export const UserAuth = ()=>{
    return useContext(AuthContext);
}