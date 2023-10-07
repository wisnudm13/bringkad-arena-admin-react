import React from "react";
import { Grid, Header } from "semantic-ui-react";
import styled from "styled-components";

import BackgroundImage from "assets/images/login_image.png";

const { Column } = Grid;

export const LoginContainer = styled(Grid)`
	&.login {
		height: 100vh;
	}

	& .login__bg-image {
		background-image: url(${BackgroundImage});
		background-repeat: no-repeat;
		background-size: cover;
	}

	& .login__bg-blue {
		background-color: #0146a0;
	}

	& .login__bg-blue .segment {
		top: 5%;
		background: transparent;
		box-shadow: none;
		border: none;
	}

	& .login__bg-blue .login__logo {
		left: 30px;
	}

	& .login__bg-blue .header {
		position: relative;
		font-family: Poppins-Regular;
		font-weight: normal;
		color: #ffffff;
		top: -48px;
		left: 115px;
	}

	& .login__form {
		position: absolute;
		top: 25%;
		left: 52.5%;
		width: 38%;
		min-height: 414px;
		border: none;
		border-radius: 10px;
		box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
		padding: 50px 35px;
		margin: 0;
	}

	& .login__form .header {
		font-family: Poppins-Bold;
		font-size: 32px;
		color: #4a515a;
		margin-bottom: 40px;
	}

	& .login__form .field > label {
		font-family: Poppins-Regular;
		color: #4a4a4a;
		opacity: 0.7;
	}

	& .ui.large.form {
		font-size: 14px;
	}
`;

const StyledLabel = styled.label`
	& {
		color: #56575d;
	}
`;

const StyledHeader = styled(Header)`
	&&& {
		margin-bottom: 12px;
	}
`;

export const CustomHeader = ({ headerTitle, description }) => (
	<div style={{ marginBottom: "20px" }}>
		<StyledHeader>{headerTitle}</StyledHeader>
		<StyledLabel>{description}</StyledLabel>
	</div>
);
