import React, { useState } from "react";
import { Grid, Segment, Image, Header, Form, Input } from "semantic-ui-react";

import CustomAlert from "../CustomAlert";
import { FunctionButton } from "../Button";

import { CustomHeader, LoginContainer } from "./index.styles";
// import LogoAkslWhite from "assets/images/logo-aksl-white.png";
import { DefaultFormInput } from "components/Form";
// import IcCompleteBlue from "assets/icons/ic-complete-blue.svg";
// import IcCompleteGreen from "assets/icons/ic-complete-green.svg";
import IcEyeOn from "assets/icons/ic-grey-eye-on.svg";
import IcEyeOff from "assets/icons/ic-grey-eye-off.svg";

const { Column, Row } = Grid;

// const ForgetPasswordSuccessForm = ({ ...props }) => {
// 	return (
// 		<Grid textAlign="center">
// 			<Column width={16}>
// 				<Image
// 					src={IcCompleteGreen}
// 					style={{ margin: "12px auto", width: "80px" }}
// 				/>
// 				<CustomHeader
// 					headerTitle={"Password diperbarui"}
// 					description={"Password kamu sudah berhasil diubah"}
// 				/>
// 			</Column>

// 			<Column width={15}>
// 				<Form.Field
// 					control={FunctionButton}
// 					onClick={props.onForgetPassword}
// 					content="Masuk Ke Akseleran"
// 					color="blue"
// 					fluid
// 					margin="0"
// 				/>
// 			</Column>
// 		</Grid>
// 	);
// };

// const EmailDeliveredForm = ({ ...props }) => {
// 	return (
// 		<Grid textAlign="center">
// 			<Column width={16}>
// 				<Image
// 					src={IcCompleteBlue}
// 					style={{ margin: "12px auto", width: "80px" }}
// 				/>
// 				<CustomHeader
// 					headerTitle="Email Berhasil Terkirim"
// 					description={
// 						<span>
// 							Periksa email kamu untuk mendapatkan link ganti
// 							password. Link ganti password akan kadaluarsa dalam{" "}
// 							<strong>30 menit.</strong>
// 						</span>
// 					}
// 				/>
// 			</Column>

// 			<Column width={15}>
// 				<Form.Field
// 					control={FunctionButton}
// 					onClick={props.onForgetPassword}
// 					content="Kembali Ke Beranda"
// 					color="blue"
// 					fluid
// 					margin="0"
// 				/>
// 			</Column>
// 		</Grid>
// 	);
// };

// const ForgetPasswordForm = ({ ...props }) => {
// 	return (
// 		<Grid>
// 			<Row>
// 				<Column width={16}>
// 					<CustomHeader
// 						headerTitle="Lupa Password?"
// 						description="Mohon input alamat email kamu, kami akan mengirimkan link untuk membuat password baru ke email kamu."
// 					/>
// 				</Column>
// 				<Column width={16}>
// 					<DefaultFormInput
// 						control={Input}
// 						name="email"
// 						type="email"
// 						label="Email"
// 						value={props.formData.email}
// 						disabled={props.isLoading}
// 						onChange={props.onChange}
// 						onBlur={props.onBlur}
// 						error={
// 							props.formData.email !== "" &&
// 							!props.formValidation.fields.email.status
// 						}
// 						errorMsg={props.formValidation.fields.email.message}
// 					/>
// 				</Column>
// 			</Row>
// 			<Row verticalAlign="bottom">
// 				<Column width={8}>
// 					<Form.Field
// 						control={FunctionButton}
// 						content="Kembali"
// 						onClick={props.onBack}
// 						color="white"
// 						fluid
// 						margin="60px 0 0 0"
// 					/>
// 				</Column>
// 				<Column width={8}>
// 					<Form.Field
// 						control={FunctionButton}
// 						content="Kirim Link"
// 						disabled={
// 							props.formData.email == "" ||
// 							!props.formValidation.fields.email.status
// 						}
// 						onClick={props.onForgetPassword}
// 						color="blue"
// 						fluid
// 						margin="60px 0 0 0"
// 					/>
// 				</Column>
// 			</Row>
// 		</Grid>
// 	);
// };

const LoginForm = ({ ...props }) => {
	const [reveal, setReveal] = useState(false);
	return (
		<div>
			<Header>Bringkad Arena Admin</Header>
			<DefaultFormInput
				control={Input}
				name="email"
				type="email"
				label="Email"
				value={props.formData.email}
				disabled={props.isLoading}
				onChange={props.onChange}
				onBlur={props.onBlur}
				error={
					props.formData.email !== "" &&
					!props.formValidation.fields.email.status
				}
				errorMsg={props.formValidation.fields.email.message}
			/>
			<DefaultFormInput
				control={Input}
				name="password"
				type={reveal ? "text" : "password"}
				label="Password"
				value={props.formData.password}
				disabled={props.isLoading}
				onChange={props.onChange}
				onBlur={props.onBlur}
				icon={reveal ? IcEyeOn : IcEyeOff}
				onClick={() => setReveal(!reveal)}
			/>
			<br />
			<Grid textAlign="center">
				<Column width={16}>
					<Form.Field
						control={FunctionButton}
						content="Login"
						disabled={
							!props.formValidation.status || props.isLoading
						}
						onClick={props.onSubmit}
						color="login"
						fluid
						margin="0"
					/>
				</Column>
				{/* <Form.Field
					control={FunctionButton}
					content="Lupa Password?"
					onClick={props.onForgetPassword}
					color="transparent"
					fluid
					margin="0"
					regular
					style={{ padding: "2px", fontWeight: 500 }}
				/> */}
			</Grid>
		</div>
	);
};

// const NewPasswordForm = ({ ...props }) => {
// 	const [reveal, setReveal] = useState({
// 		newPassword: false,
// 		repeatPassword: false,
// 	});

// 	return (
// 		<div>
// 			<CustomHeader
// 				headerTitle="Ubah Password"
// 				description="Mohon buat password baru kamu"
// 			/>
// 			<DefaultFormInput
// 				control={Input}
// 				name="newPassword"
// 				type={reveal?.newPassword ? "text" : "password"}
// 				label="Password"
// 				value={props.formData.newPassword}
// 				error={
// 					props.formData.newPassword !== "" &&
// 					!props.formValidation.fields.newPassword.status
// 				}
// 				errorMsg={props.formValidation.fields.newPassword.message}
// 				disabled={props.isLoading}
// 				onChange={props.onChange}
// 				onBlur={props.onBlur}
// 				icon={reveal.newPassword ? IcEyeOn : IcEyeOff}
// 				onClick={() =>
// 					setReveal({ ...reveal, newPassword: !reveal.newPassword })
// 				}
// 			/>
// 			<DefaultFormInput
// 				control={Input}
// 				name="repeatPassword"
// 				type={reveal?.repeatPassword ? "text" : "password"}
// 				label="Ulangi Password"
// 				value={props.formData.repeatPassword}
// 				error={
// 					props.formData.repeatPassword !== "" &&
// 					!props.formValidation.fields.repeatPassword.status
// 				}
// 				errorMsg={props.formValidation.fields.repeatPassword.message}
// 				disabled={props.isLoading}
// 				onChange={props.onChange}
// 				onBlur={props.onBlur}
// 				icon={reveal.repeatPassword ? IcEyeOn : IcEyeOff}
// 				onClick={() =>
// 					setReveal({
// 						...reveal,
// 						repeatPassword: !reveal.repeatPassword,
// 					})
// 				}
// 			/>
// 			<br />
// 			<Grid textAlign="center">
// 				<Column width={16}>
// 					<Form.Field
// 						control={FunctionButton}
// 						content="Kirim Sekarang"
// 						disabled={
// 							!props.formValidation.fields.repeatPassword
// 								.status ||
// 							!props.formValidation.fields.newPassword.status
// 						}
// 						onClick={props.onForgetPassword}
// 						color="blue"
// 						fluid
// 						margin="0"
// 					/>
// 				</Column>
// 			</Grid>
// 		</div>
// 	);
// };

const Login = ({ ...props }) => {
	function loginHandler(page) {
		switch (page) {
			case "login":
				return <LoginForm {...props} />;
			// case "password":
			// 	return <ForgetPasswordForm {...props} />;
			// case "emailDelivered":
			// 	return <EmailDeliveredForm {...props} />;
			// case "newPassword":
			// 	return <NewPasswordForm {...props} />;
			// case "passwordSuccess":
			// 	return <ForgetPasswordSuccessForm {...props} />;
		}
	}
	return (
		<LoginContainer padded className="login">
			<CustomAlert
				type="errorMessage"
				visible={props.isShowSnackbar}
				animation="slide down"
				duration={1000}
				message={props.message}
				onClick={props.onCloseSnackbar}
			/>

			<Column width={16} className="login__bg-image"></Column>
			{/* <Column width={8} className="login__bg-blue">
				<Segment>
					<Image src={LogoAkslWhite} alt="" className="login__logo" />
					<Header>{props.adminTitle}</Header>
				</Segment>
			</Column> */}

			<Segment as={Form} size="large" className="login__form">
				{loginHandler(props.page)}
			</Segment>
		</LoginContainer>
	);
};

export default Login;