import { registerValues } from "../pages/register/ValidateRegisterInfo";
import axios from "./axios";
import { ENDPOINTS } from "./enpoints.json"


export class ApiEndPointsUtil {

    //authentication calls

    //register
    static async registerNewUser(values: Partial<registerValues>) {
        try {
			const respone = await axios.post(ENDPOINTS.REGISTER_URL, 
				JSON.stringify(values),
					{
                        headers: { 'Content-Type' : 'application/json' },
                        withCredentials: true
					}
				);
			return respone;
		} catch (err){
            return err;
		}
    }

    //login
    static async login(values: Partial<registerValues>) {
        try {
			const respone = await axios.post(ENDPOINTS.LOGIN_URL, 
				JSON.stringify(values),
					{
                        headers: { 'Content-Type' : 'application/json' },
                        withCredentials: true
					}
				);
			return respone;
		} catch (err){
            return err
		}
    }

    //game data calls
}

