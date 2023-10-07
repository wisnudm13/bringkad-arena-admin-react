import React from "react";
import { Grid, Header } from "semantic-ui-react";
import styled from "styled-components";

import BackgroundImage from "assets/images/login_image_4.jpg";

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
        background: transparent;
		position: absolute;
		top: 25%;
		left: 33%;
		width: 35%;
		min-height: 414px;
		border: none;
		border-radius: 10px;
		box-shadow: none;
		padding: 50px 35px;
		margin: 0;
	}

	& .login__form .header {
        text-align: center;
		font-family: Poppins-Bold;
		font-size: 40px;
		color: #ffffff;
		margin-bottom: 40px;
	}

	& .login__form .field > label {
		font-family: Poppins-Bold;
		color: #ffffff;
	}

	& .ui.large.form {
		font-size: 14px;
        border-radius: 30px;
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
