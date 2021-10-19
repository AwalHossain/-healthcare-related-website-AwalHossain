import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Location from '../../../Hooks/Location';
import useAuth from '../../../Hooks/useAuth'
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const path = Location();
    const history = useHistory();
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    console.log(email, password);
        const { register} = useAuth();
    const handleRegistration=(e)=>{
        e.preventDefault();
        register(email, password)
        .then((result) => {
            // Signed in 
            console.log(result.user);
            history.push(path)
            // ...
          })
          .catch(error=> alert(error.message))
    }

    return (
        <div className="container my-5">
                <div >

                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onChange={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onChange={handlePassword} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                 <button type="submit" onClick={handleRegistration} class="btn btn-primary">Submit</button>
            </div>
        </div>
    );
};

export default Register;