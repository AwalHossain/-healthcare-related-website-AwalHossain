import { useContext } from "react"
import { AuthContex } from "../contex/AuthProvider"
// useing useAuth
const useAuth =()=>{
    return useContext(AuthContex)

}

export default useAuth;