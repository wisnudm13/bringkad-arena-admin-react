import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import BringkadArenaAPI from "../services/InternalAPI";


export function ProtectedRoutes () {
    const [isAuth, setIsAuth] = useState();
  
    useEffect(() => {
        async function validateToken() {
            const loginResponse = await BringkadArenaAPI.validateTokenAdmin()
            console.log(loginResponse)

            if (loginResponse.status !== 200) {
                setIsAuth(false);
                localStorage.clear();

            } else {
                setIsAuth(true)
            }
        }

        validateToken()
        

    });

    console.log(isAuth)
    
    if (isAuth === undefined) return null; // or loading indicator, etc...
  
    return isAuth === true ? <Outlet /> : <Navigate to="/login" />;
}