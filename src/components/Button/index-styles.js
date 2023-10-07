import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

export const StyledButton = styled(({ ...props }) => <Button {...props} />)`
	&.ui.button {
		font-family: ${(props) =>
			props?.regular ? "Poppins-Regular" : "Poppins-Semibold"};
		color: ${(props) => props?.buttonstyle?.color ?? "#ffffff"};
		line-height: 1.43;
		letter-spacing: 0.12px;
		background: ${(props) =>
			props?.buttonstyle?.background ?? "transparent"};
		border: ${(props) => props?.buttonstyle?.border ?? "1px solid #0146a0"};
		margin: ${(props) => props?.margin ?? "0 .25em 0 0"};
	}

	&.ui.basic.button {
		color: #4a515a !important;
		box-shadow: 0 0 0 1px rgba(74, 81, 90) inset;
		border: none !important;
	}

	&.ui.labeled.icon.button > .icon {
		background: transparent;
	}
`;

export const StyledPrimaryBtn = styled(({ ...props }) => <Button {...props} />)`
	&&&& {
		background: #0146a0 !important;
		color: #ffffff !important;
		border: 1px solid #0146a0;
		margin: ${(props) => (props.margin ? props.margin : "0")};
	}

	&&.ui.button:active,
	&&.ui.button:focus,
	&&.ui.button:hover {
		background: #0146a0 !important;
		color: #ffffff !important;
	}

	&&& i.icons {
		margin-right: 5px;
	}

	&&.ui.button:hover .icon {
		opacity: 1;
	}

	&&&& i.icons .corner.icon {
		color: #fdda0a;
		text-shadow: -1px -1px 0 #fdda0a, 1px -1px 0 #fdda0a, -1px 1px 0 #fdda0a,
			1px 1px 0 #fdda0a;
	}

	@media only screen and (max-width: 767px) {
		&&& {
			width: 100%;
			margin: 0;
		}
	}
`;

export const CustomAddBtn = styled(StyledPrimaryBtn)`
	&&&& {
		position: absolute;
		right: 0;
		padding: 14px 36px;
		margin-top: -50px;
	}
`;

export const StyledBtnTab = styled(Button)`
	&&& {
		background-color: #ffffff;
		font-size: 14px;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.43;
		letter-spacing: 0.29px;
		text-align: center;
		color: #6a6a6a;
		border: solid 1px #e9e9e9;
		border-radius: 3px;
		box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.05);
		margin: 0 10px 0 0;
	}
	&&&:hover {
		box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.05);
	}
	&.ui.active.button {
		background-color: #3a9fd7;
		color: #ffffff;
	}
`;

export const StyledBtnTabPrimary = styled(Button)`
	&&& {
		background-color: #ffffff;
		font-size: 14px;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.43;
		letter-spacing: 0.29px;
		text-align: center;
		color: #6a6a6a;
		border: solid 1px #e9e9e9;
		border-radius: 3px;
		box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.05);
		margin: 0 10px 0 0;
	}
	&&&:hover {
		box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.05);
	}
	&.ui.active.button {
		background-color: #0146a0;
		color: #ffffff;
	}
`;

export const StyledUploaderButton = styled(({ ...props }) => (
	<div {...props} />
))`
	&& label {
		display: block;
		background: #0146a0;
		font-family: Poppins-SemiBold;
		font-size: 14px;
		color: #ffffff;
		text-align: center;
		line-height: 1.43;
		letter-spacing: 0.12px;
		cursor: pointer;
		border-radius: 0.28571429rem;
		padding: 0.78571429em 1.5em 0.78571429em;
		margin: ${(props) => (props.margin ? props.margin : "0")};
	}

	& .ui.input {
		display: none;
	}
`;

export const InversedStyledPrimaryBtn = styled(Button)`
	&&&& {
		background: #ffffff !important;
		color: #0146a0 !important;
		border: 1px solid #ffffff;
		margin: 0;
	}

	&&.ui.button:active,
	&&.ui.button:focus,
	&&.ui.button:hover {
		background: #ffffff !important;
		color: #0146a0 !important;
	}

	&&& i.icons {
		margin-right: 5px;
	}

	&&.ui.button:hover .icon {
		opacity: 1;
	}

	&&&& i.icons .corner.icon {
		color: #fdda0a;
		text-shadow: -1px -1px 0 #fdda0a, 1px -1px 0 #fdda0a, -1px 1px 0 #fdda0a,
			1px 1px 0 #fdda0a;
	}

	@media only screen and (max-width: 767px) {
		&&& {
			width: 100%;
			margin: 0;
		}
	}
`;

export const CustomStyledButton = styled(({ ...props }) => (
	<Button {...props} />
))`
	&.ui.button {
		font-family: Poppins-SemiBold;
		color: #ffffff;
		line-height: 1.43;
		font-size: 16px;
		padding: 0;
		letter-spacing: 0.12px;
		margin: ${(props) => (props.margin ? props.margin : "0 .25em 0 0")};
	}

	&.ui.basic.button {
		color: #4a515a !important;
		box-shadow: 0 0 0 1px rgba(74, 81, 90) inset;
	}

	&.ui.labeled.icon.button > .icon {
		background: transparent;
	}

	&.ui.blue.button {
		background-color: #0146a0;
	}

	&.ui.button.white {
		background: transparent;
		color: #0146a0;
		border: 1px solid #0146a0;
	}
`;
