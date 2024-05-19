import React from "react";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import localStorage from "../utilities/localStorage";
import BringkadArenaAPI from "../services/InternalAPI";

const PrivateRoute = ({ children }) => {
	const [isAdmin, setIsAdmin] = useState();

	useEffect(() => {
        async function validateToken() {
            const loginResponse = await BringkadArenaAPI.validateTokenAdmin()

            if (loginResponse.status !== 200) {
				setIsAdmin(false)
				localStorage().clear()

            } else{
				setIsAdmin(true)

			}

        }

        validateToken()
    });

	if (isAdmin === undefined) return null;
  
    return isAdmin === true ? children : <Navigate to="/login" />;

};

export { PrivateRoute };
