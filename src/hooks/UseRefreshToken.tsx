import axios from "../api/axios";
import { ENDPOINTS } from "../api/enpoints.json";
import { authData } from "../context/AuthProvider";
import { useAuth } from "./UseAuth";

export const useRefreshToken = () => {
    const auth = useAuth();

    const refreh = async () => {
       const response = await axios.get(ENDPOINTS.REFRESH_URL, {
           withCredentials: true
       });
       const prev = auth.authData as authData;
       auth.setAuth({...prev, accessToken: response.data.accessToken});
       return response.data.accessToken; 
    }

    return refreh;
};