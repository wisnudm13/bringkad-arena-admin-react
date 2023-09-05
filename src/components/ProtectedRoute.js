import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import BringkadArenaAPI from "../services/InternalAPI";


export function ProtectedRoutes () {
    const [isAuth, setIsAuth] = useState();
  
    useEffect(() => {
        BringkadArenaAPI.validateTokenAdmin()
        .then(function (res) {
            setIsAuth(true);

        }).catch(function (err) {
            setIsAuth(false)
        })
    });
    
    if (isAuth === undefined) return null; // or loading indicator, etc...
  
    return isAuth === true ? <Outlet /> : <Navigate to="/login" />;
}