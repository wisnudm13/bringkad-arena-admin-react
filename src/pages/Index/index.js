import React from "react";
import { Navigate } from "react-router-dom";
import localStorage from "../../utilities/localStorage";

const Index = () => {
	if (localStorage().get("userToken")) {
		return <Navigate to="/dashboard" from="/" />;
	} else {
		return <Navigate to="/login" from="/" />;
	}
};
export default Index;
