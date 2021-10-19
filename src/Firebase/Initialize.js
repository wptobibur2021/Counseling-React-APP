import { initializeApp } from "firebase/app";
import firebaseConfig from "./Congif";
const AuthFirebase = () =>{
    initializeApp(firebaseConfig);
}
export default AuthFirebase