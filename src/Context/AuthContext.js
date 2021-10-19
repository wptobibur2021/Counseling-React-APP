import React, { createContext } from "react";
import useFirebase from '../Hooks/useFirebase';

export const AuthContextProvider = createContext('')
export default function AuthContext({children}) {
    const allContext = useFirebase()
    return (
        <AuthContextProvider.Provider value={allContext}>
            {children}
        </AuthContextProvider.Provider>
    )
}





