import { initializeApp } from "firebase/app";
import firebaseConfig from "./firbase.config";

const initializeAuth=()=>{
    initializeApp(firebaseConfig)
}

export default initializeAuth;