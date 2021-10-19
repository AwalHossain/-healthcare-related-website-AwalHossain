import { useHistory, useLocation } from "react-router";

const Location =()=>{
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    return redirect_uri;
   
}

export default Location;