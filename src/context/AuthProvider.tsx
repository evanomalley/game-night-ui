import { createContext, FunctionComponent, useState } from "react";

export type authData = {
    email?: string
    accessToken?: string
  }

  const defAuth: authData = {
    email: '',
    accessToken: '',
  }

interface AppAuthContextInterface {
    authData: authData | undefined,
    setAuth: (authInfo: authData) => void,
    persist: boolean,
    setPersist: (value: boolean) => void,
}

const AuthContext = createContext<AppAuthContextInterface>({authData: defAuth, setAuth: () => {}, persist: false, setPersist: () => {}});

export const AuthProvider: FunctionComponent = ({ children }) => {
    const [authState, setAuthState] = useState<authData>();
    let p = false;
    //this needs to be moved to be handled better
    try {
        p = !!JSON.parse(localStorage.getItem("persist") || "");
    } catch (e) {}
    const [persist, setPersist] = useState(p);
    
    return(
        <AuthContext.Provider value={{authData: authState, setAuth: setAuthState, persist: persist, setPersist: setPersist}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;