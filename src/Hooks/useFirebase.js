import { useEffect, useState } from "react";
import { getAuth,signOut,createUserWithEmailAndPassword ,onAuthStateChanged , GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle =()=>{
      return signInWithPopup(auth, googleProvider)

    }
    const register = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmail=(email,password)=>{
    return    signInWithEmailAndPassword(auth, email, password)

    }
    useEffect(()=>{
    const unscribed=    onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return ()=> unscribed
    },[])


    const logOut =()=>{
        signOut(auth)
        .then(()=>{

        })
        .catch(error=> alert(error.message))
    }

    return {
        signInWithGoogle,
        user,
        logOut,
        register,
        signInWithEmail
    }

};

export default useFirebase;