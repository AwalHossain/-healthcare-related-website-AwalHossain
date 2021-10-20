import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
// This is private route. you cannot go without login
const PrivateRoute=({children, ...rest})=>{
    const {user, isLoading} = useAuth();
    if(isLoading){
        return (
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        )
    }
    return (
        <Route
        {...rest}
        render={({location})=>
        user.email ? children :
        <Redirect
        to={
            {
                pathname:'/login',
                state:{from:location}
            }
        }
        ></Redirect>    
        }
        >

        </Route>
    );

}

export default PrivateRoute;