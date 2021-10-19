import { useState,useEffect } from "react";
import AuthFirebase from "../Firebase/Initialize";
import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
AuthFirebase()
const useFirebase = () =>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // use State
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sineInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //     setUser(result.user)
        // })
        // .catch((error) =>{
        //     setError(error.message)
        // })
    }
    // Email and Password Handle Methods
    const emailHandle = e =>{
        setEmail(e.target.value)
    }

    const passwordHandle = e =>{
        setPassword(e.target.value)
    }

    // New User Registration

    const newUserCreate = () =>{
       // e.preventDefault()
       return createUserWithEmailAndPassword(auth, email, password)
        // .then((result) =>{
        //     setUser(result.user)
        // })
        // .catch((error) =>{
        //     setError(error.message)
        // })
    }

    // sineInWithPasswordEmail
    const sineInWithPasswordEmail = () =>{
        //e.preventDefault()
        return signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     setUser(result.user)
        // })
        // .catch((error) => {
        //     setError(error.message)
        // })
    }

    // onAuthStateChanged 
    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }
        })
    }, [])
    

    // Sine out

    const logOut = () =>{
        signOut(auth).then(() => {
           setUser({})
           toast.success('Successfully created!');
        }).catch((error) => {
            setError(error.message)
        });
    }

    return{user, error, logOut, newUserCreate, sineInWithGoogle, emailHandle, passwordHandle, sineInWithPasswordEmail}

}
export default useFirebase;