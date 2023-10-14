import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as action from "redux/action";

import LoginLayout from "components/Login";
// import {
// 	containsNumber,
// 	containsSpecialCharacter,
// 	containsUppercase,
// } from "utilities/helper";
import localStorage from "utilities/localStorage";
// import qs from "query-string";

const defaultFormData = {
	email_or_username: "",
	password: "",
};

const defaultFormValidation = {
	status: false,
	fields: {
		email_or_username: { status: false, message: "" },
		password: { status: false },
	},
};

const Login = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isShowSnackbar, setIsShowSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [formData, setFormData] = useState({
		...defaultFormData,
	});
	const [formValidation, setFormValidation] = useState({
		...defaultFormValidation,
	});
	const [page, setPage] = useState("login");

	const recaptchaRef = useRef(null);

	const { action, userLogIn, userRenewPassword } = props;

	// useEffect(() => {
	// 	const parsed = qs.parse(location.search);

	// 	if (parsed?.token) {
	// 		setFormData({
	// 			...formData,
	// 			token: parsed?.token,
	// 		});
	// 		setPage("newPassword");
	// 	}
	// }, []);

	useEffect(() => {
		console.log("____________________")
		console.log(userLogIn.type)
		if (userLogIn?.type) {
			const { type, data } = userLogIn;
			console.log("===========")
			console.log(type)
			console.log(data)
			if (type === 200) {
				localStorage().save("userToken", data.authorizationToken);
				window.location.href = "/dashboard";
			} else if (type === 400) {
				console.log("dawaqeesz")
				setIsLoading(false);
				setSnackbarMessage("Login failed");
				setIsShowSnackbar(true);
				handleFormReset();

				setTimeout(() => {
					setIsShowSnackbar(false);
				}, 3000);
			}
		}
	}, [userLogIn]);

	const handleFormChange = (e, data) => {
		const { name, value } = data;

		setFormData((state) => ({ ...state, [name]: value }));

		handleFormValidation(name, value);
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;

		setFormData((state) => ({
			...state,
			[name]: value.trim(),
		}));

		handleFormValidation(name, value.trim());
	};

	const handleFormValidation = (name, value) => {
		if (name === "email_or_username") {
			if (value === "") {
				formValidation["fields"][name]["status"] = false;
				formValidation["fields"][name]["message"] = "";

			} else {
				formValidation["fields"][name]["status"] = true;
			}

		} else if (name === "password") {
			if (value === "") {
				formValidation["fields"]["password"]["status"] = false;
			} else {
				formValidation["fields"]["password"]["status"] = true;
			}
		}

		const emailValid = formValidation.fields.email_or_username.status;
		const passwordValid = formValidation.fields.password.status;

		if (emailValid && passwordValid) {
			setFormValidation((state) => ({
				...state,
				status: true,
			}));
		} else {
			setFormValidation((state) => ({
				...state,
				status: false,
			}));
		}

		setFormValidation((state) => ({ ...state, formValidation }));
	};

	const handleLogIn = () => {
		setIsLoading(true);

		const actionParams = {
			sdk: {
				parent: "adminsAPI",
				child: "loginAdmin",
			},
			key: {
				group: "Admins",
				value: "userLogIn",
			},
		};

		action.fetch({
			...actionParams,
			data: {
				email_or_username: formData.email_or_username,
				password: formData.password,
			},
		});
	};

	const handleFormReset = () => {
		setFormData({
			...defaultFormData,
		});

		setFormValidation({
			...defaultFormValidation,
		});
	};

	const handleCloseSnackbar = () => {
		setIsShowSnackbar(false);
	};

	function passwordResetPageHandler(e) {
		e.preventDefault();
		switch (page) {
			case "login":
				setPage("password");
				break;
			// case "password":
			// 	handleForgotPassword();
			// 	break;
			case "emailDelivered":
				handleFormReset();
				setPage("login");
				break;
			// case "newPassword":
			// 	handleRenewPassword();
			// 	break;
			case "passwordSuccess":
				setPage("login");
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		handleLogIn();
	};

	const handleBack = () => {
		setPage("login");
	};

	return (
		<div>
			<LoginLayout
				adminTitle="Bringkad Arena Admin"
				isLoading={isLoading}
				isShowSnackbar={isShowSnackbar}
				formData={formData}
				formValidation={formValidation}
				onChange={handleFormChange}
				onBlur={handleBlur}
				onCloseSnackbar={handleCloseSnackbar}
				onSubmit={handleSubmit}
				onForgetPassword={passwordResetPageHandler}
				page={page}
				message={snackbarMessage}
				onBack={handleBack}
			/>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		userLogIn: state.reducer.Admins.userLogIn,
		userForgotPassword: state.reducer.Admins?.userForgotPassword,
		userRenewPassword: state.reducer.Admins?.userRenewPassword,
	};
}

function mapDispatchToProps(dispatch) {
	return { action: bindActionCreators(action, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
