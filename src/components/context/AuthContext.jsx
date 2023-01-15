import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect,signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
const AuthContext = createContext();
export  const AuthContextProvider = ({children})=>{

    const googleSignIn = async ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        // signInWithRedirect(auth, provider);
    }
    const [user, setUser] = useState({})

    const logOut =()=>{
        signOut(auth);
    }
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser);
        console.log('User',currentUser);
    })
     return ()=>{
        unsubscribe();
     };
    }, []);
    
    return(
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
        {children}
        </AuthContext.Provider>
    )
} 

export const UserAuth = ()=>{
    return useContext(AuthContext);
}