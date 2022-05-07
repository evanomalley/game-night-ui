import { axiosPrivate } from "../api/axios";
import { useEffect} from "react";
import { useRefreshToken } from "./UseRefreshToken";
import { useAuth } from "./UseAuth";
import { AxiosRequestConfig } from "axios";

export const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const auth = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                if(config.headers === undefined){
                    config.headers = {};
                }
                if (!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth?.authData?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        )

        const responeIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if(error?.response?.status === 403 && !prevRequest?.sent){
                    prevRequest.sent = true;
                    const newToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responeIntercept);
        }
    },[auth, refresh])

    return axiosPrivate;
}