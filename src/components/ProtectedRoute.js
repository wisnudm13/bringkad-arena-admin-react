import { useEffect, useLayoutEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import axios from '../tools/axios'

export function ProtectedRoutes () {
    const [isAuth, setIsAuth] = useState();
    const authToken = localStorage.getItem("authToken")
  
    useEffect(() => {
        axios.post('/api/v1/admins/validate-token',{}, {
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },

        }).then(function (res) {
            setIsAuth(true);

        }).catch(function (err) {
            setIsAuth(false)
        })
    });
    
    if (isAuth === undefined) return null; // or loading indicator, etc...
  
    return isAuth ===true ? <Outlet /> : <Navigate to="/login" />;
}