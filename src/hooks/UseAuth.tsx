import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

//hook into the auth context
export const useAuth = () => {
    const authContext = useContext(AuthContext);

    useDebugValue(authContext, authContext => authContext?.authData ? "Logged In" : "Logged Out")
    
    return authContext;
}
