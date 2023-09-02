import { useEffect, useLayoutEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import axios from '../tools/axios'
import { validateTokenAdmin } from '../services/bringkad_arena/Auth';

export function ProtectedRoutes () {
    const [isAuth, setIsAuth] = useState();
  
    useEffect(() => {
        validateTokenAdmin()
        .then(function (res) {
            setIsAuth(true);

        }).catch(function (err) {
            setIsAuth(false)
        })
    });
    
    if (isAuth === undefined) return null; // or loading indicator, etc...
  
    return isAuth ===true ? <Outlet /> : <Navigate to="/login" />;
}