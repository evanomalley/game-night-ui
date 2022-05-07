import axios from "../api/axios";
import { ENDPOINTS } from "../api/enpoints.json";
import { useAuth } from "./UseAuth";

export const useLogOut = () => {
    const auth = useAuth();

    const logout = async () => {
       auth.setAuth({});
       try{
        await axios.get(ENDPOINTS.LOGOUT_URL, {
            withCredentials: true
        });
       } catch (err) {
            console.error(err);
       }
    }

    return logout;
};