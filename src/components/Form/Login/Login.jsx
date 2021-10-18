import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signInWithGoogle,signInWithEmail} = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    console.log(email, password);
    const handleLogin=(e)=>{
        e.preventDefault();
        signInWithEmail(email, password)
    }

    return (
        <div>
            <main class="">
	<div class="w-50 mx-auto my-5">
		<section class="wrapper">
                <div class="heading">
                    <h1 class="text text-large">Sign In</h1>
                    <p class="text text-normal">New user? <span><Link to="/register">Create a new account</Link></span>
                    </p>
                </div>
                {/* Login form */}
                <form>
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
                 <button type="submit" onClick={handleLogin} class="btn btn-primary">Submit</button>
            </form>
			<div class="striped">
				<span class="striped-line"></span>
				<span class="striped-text">Or</span>
				<span class="striped-line"></span>
			</div>
            {/* Google Sign In */}
			<div class="method">
				<div class="method-control">
					{/* <a href="#" class="method-action">
						<i class="ion ion-logo-google"></i>
						<span></span>
					</a> */}
                    <button onClick={signInWithGoogle}>Sign in with Google </button>
				</div>
			</div>
		</section>
	</div>
</main>
        </div>
    );
};

export default Login;