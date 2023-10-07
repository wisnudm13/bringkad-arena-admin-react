import React from "react";
import { Navigate } from "react-router-dom";

import localStorage from "../utilities/localStorage";

const PrivateRoute = ({ children }) => {
	const userToken = localStorage().get("userToken");
	if (!userToken) return <Navigate to="/login" />;
	return children;
};

export { PrivateRoute };
