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
	email: "",
	password: "",
	registeredEmail: "",
	repeatPassword: "",
	newPassword: "",
};

const defaultFormValidation = {
	status: false,
	fields: {
		email: { status: false, message: "" },
		password: { status: false },
		captcha: { status: false },
		registeredEmail: {
			status: false,
			message: "",
		},
		newPassword: {
			status: false,
			message: "",
		},
		repeatPassword: {
			status: false,
			message: "",
		},
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
		if (userLogIn?.type) {
			const { type, data } = userLogIn;
			if (type === 200) {
				localStorage().save("userToken", data.authorizationToken);
				window.location.href = "/dashboard";
			} else if (type === 422) {
				setIsLoading(false);
				setSnackbarMessage("Login failed");
				setIsShowSnackbar(true);
				recaptchaRef.current.reset();
				handleFormReset();

				setTimeout(() => {
					setIsShowSnackbar(false);
				}, 3000);
			}
		}
	}, [userLogIn]);

	useEffect(() => {
		if (userRenewPassword?.type) {
			const { type, data } = userRenewPassword;
			if (type === 200) {
				setPage("passwordSuccess");
			} else if (type === 422 || type === 500) {
				setIsLoading(false);
				setSnackbarMessage(
					type === 500
						? "Internal Server Error"
						: "Link reset password telah expired, silakan request lupa password kembali"
				);
				setIsShowSnackbar(true);

				setTimeout(() => {
					setIsShowSnackbar(false);
				}, 3000);
			}
		}
	}, [userRenewPassword]);

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
		if (name === "email" || name === "registeredEmail") {
			if (value === "") {
				formValidation["fields"][name]["status"] = false;
				formValidation["fields"][name]["message"] = "";
			} else {
				let atpos = value.indexOf("@");
				let dotpos = value.lastIndexOf(".");
				if (
					atpos < 1 ||
					dotpos < atpos + 2 ||
					dotpos + 2 >= value.length
				) {
					formValidation["fields"][name]["status"] = false;
					formValidation["fields"][name]["message"] =
						"Email tidak valid";
				} else {
					formValidation["fields"][name]["status"] = true;
				}
			}
		} else if (name === "password") {
			if (value === "") {
				formValidation["fields"]["password"]["status"] = false;
			} else {
				formValidation["fields"]["password"]["status"] = true;
			}
		} else if (name === "newPassword") {
			if (value === "") {
				formValidation["fields"][name]["status"] = false;
			} else if (value.toString().length < 8) {
				formValidation["fields"][name]["status"] = false;
				formValidation["fields"][name]["message"] =
					"Panjang password minimal 8 karakter";
			} else if (
                console.log("tesss")
				// !containsUppercase(value) ||
				// !containsNumber(value) ||
				// !containsSpecialCharacter(value)
			) {
				formValidation["fields"][name]["status"] = false;
				formValidation["fields"][name]["message"] =
					"Password harus berupa perpaduan dari huruf besar, huruf kecil, angka, dan simbol";
			} else {
				formValidation["fields"][name]["status"] = true;
				formValidation["fields"][name]["message"] = "";
			}
			if (value !== formData.repeatPassword) {
				formValidation["fields"]["repeatPassword"]["status"] = false;
				formValidation["fields"]["repeatPassword"]["message"] =
					"Password tidak sesuai";
			} else {
				formValidation["fields"]["repeatPassword"]["status"] = true;
				formValidation["fields"]["repeatPassword"]["message"] = "";
			}
		} else if (name === "repeatPassword") {
			if (value === "") {
				formValidation["fields"][name]["status"] = false;
			} else if (value !== formData.newPassword) {
				formValidation["fields"][name]["status"] = false;
				formValidation["fields"][name]["message"] =
					"Password tidak sesuai";
			} else {
				formValidation["fields"][name]["status"] = true;
				formValidation["fields"][name]["message"] = "";
			}
		}

		const emailValid = formValidation.fields.email.status;
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
				parent: "authentication",
				child: "postLoginAdminLos",
			},
			key: {
				group: "authentication",
				value: "userLogIn",
			},
		};

		action.fetch({
			...actionParams,
			data: {
				email: formData.email,
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

	const handleForgotPassword = () => {
		const actionParams = {
			sdk: {
				parent: "authentication",
				child: "postAdminForgotPassword",
			},
			key: {
				group: "authentication",
				value: "userForgotPassword",
			},
		};

		action.fetch({
			...actionParams,
			data: {
				email: formData.email,
			},
		});
		setPage("emailDelivered");
	};

	const handleRenewPassword = () => {
		const actionParams = {
			sdk: {
				parent: "authentication",
				child: "postAdminRenewPassword",
			},
			key: {
				group: "authentication",
				value: "userRenewPassword",
			},
		};

		action.fetch({
			...actionParams,
			data: {
				password: formData.newPassword,
				repassword: formData.repeatPassword,
				token: formData.token,
			},
		});
	};

	function passwordResetPageHandler(e) {
		e.preventDefault();
		switch (page) {
			case "login":
				setPage("password");
				break;
			case "password":
				handleForgotPassword();
				break;
			case "emailDelivered":
				handleFormReset();
				setPage("login");
				break;
			case "newPassword":
				handleRenewPassword();
				break;
			case "passwordSuccess":
				setPage("login");
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// handleExecuteCaptcha();
	};

	const handleRecaptchaError = () => {
		alert("Tidak ada koneksi");
	};

	const handleRecaptchaChange = () => {
		handleLogIn();
	};

	const handleBack = () => {
		setPage("login");
	};

	return (
		<div>
			<LoginLayout
				// adminTitle="Bringkad Arena Admin"
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
		userLogIn: state.reducer.authentication.userLogIn,
		userForgotPassword: state.reducer.authentication?.userForgotPassword,
		userRenewPassword: state.reducer.authentication?.userRenewPassword,
	};
}

function mapDispatchToProps(dispatch) {
	return { action: bindActionCreators(action, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
