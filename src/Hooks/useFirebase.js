import { useEffect, useState } from "react";
import { getAuth,signOut,createUserWithEmailAndPassword ,onAuthStateChanged , GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle =()=>{
      return signInWithPopup(auth, googleProvider)
        .finally(()=> setLoading(false))
    }
    const register = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmail=(email,password)=>{
    return    signInWithEmailAndPassword(auth, email, password)
    .finally(()=> setLoading(false))
    }
    useEffect(()=>{
    const unscribed=    onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setLoading(false)
        })
        return ()=> unscribed
    },[])


    const logOut =()=>{
        signOut(auth)
        .then(()=>{

        })
        .catch(error=> alert(error.message))
        .finally(()=> setLoading(false))
    }

    return {
        signInWithGoogle,
        setUser,
        user,
        logOut,
        register,
        isLoading,
        signInWithEmail
    }

};

export default useFirebase;