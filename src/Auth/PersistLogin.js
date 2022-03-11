import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshTokens from './useRefreshTokens';
import useAuth from './useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshTokens();
    console.clear();
    const { auth } = useAuth();
    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;
    }, [])

    useEffect(() => {
    }, [isLoading])

    return (
        <>
        {

             isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
        }
                   
        </>
    )
}

export default PersistLogin