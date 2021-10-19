import { useContext } from "react";
import { AuthContextProvider } from "../Context/AuthContext";
const useAuth = () =>{
    return useContext(AuthContextProvider)
}
export default useAuth