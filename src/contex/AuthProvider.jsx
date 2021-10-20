import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContex = createContext();
// Contex api
const AuthProvider = ({children}) => {
    const allContex = useFirebase()
    return (
        <AuthContex.Provider value={allContex} >
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;