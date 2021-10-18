import { useEffect, useState } from "react";
import { getAuth,signOut,createUserWithEmailAndPassword ,onAuthStateChanged , GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    const register = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    console.log(result.user);
    // ...
  })
  .catch(error=> alert(error.message))
    }
    const signInWithEmail=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch(error => alert(error.message))
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