import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRefreshToken } from "../hooks/UseRefreshToken";
import { useAuth } from "../hooks/UseAuth";

const PersistedLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { authData, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifiyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        // console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !authData?.accessToken && persist
      ? verifiyRefreshToken()
      : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
};

export default PersistedLogin;
