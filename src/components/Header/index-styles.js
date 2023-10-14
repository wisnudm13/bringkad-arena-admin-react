import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

export const StyledHeader = styled(
	({ fontSize, bgColor, isUppercase, marginBottom, ...props }) => (
		<Header {...props} />
	)
)`
	&.ui.header {
		display: ${(props) => (props.display ? props.display : "block")};
		font-family: Poppins-Bold;
		font-size: ${(props) => (props.fontSize ? props.fontSize : "32px")};
		color: #1a173b;
		letter-spacing: 0.12px;
		text-transform: ${(props) =>
			props.isUppercase ? "uppercase" : "capitalize"};
		margin-top: ${(props) =>
			props.margintop ? props.margintop : "inherit"};
		margin-bottom: ${(props) =>
			props.marginBottom ? props.marginBottom : "14px"};
	}

	&.ui.sub.header {
		background-color: ${(props) =>
			props.bgColor ? props.bgColor : "unset"};
		font-family: ${(props) =>
			props.isUppercase ? "Poppins-Regular" : "Poppins-SemiBold"};
		font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
		font-weight: 500;
		color: ${(props) => (props.isUppercase ? "#5c5c5c" : "#4a4a4a")};
		border-radius: 2px;
		text-transform: ${(props) =>
			props.isUppercase ? "uppercase" : "capitalize"};
		padding: 10px 5px;
		margin-top: ${(props) =>
			props.margintop ? props.margintop : "inherit"};
		margin-bottom: ${(props) =>
			props.marginbottom ? props.marginbottom : "inherit"};
	}

	&.ui.isInputStyle.header {
		height: 38.6px;
		padding: 0.67857143em 0;
		margin: ${(props) => (props.margin ? props.margin : "0 0 16px 0")};
	}

	&&.ui.dividing.header {
		font-family: Poppins-Regular;
		font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
		color: #4a4a4a;
		border-bottom-color: #c4ccd6;
		text-transform: capitalize;
		padding-bottom: 14px;
		margin-bottom: ${(props) =>
			props.marginBottom ? props.marginBottom : "24px"};
	}
`;

export const StyledLinkHeader = styled(({ ...props }) => <Header {...props} />)`
	&.ui.header {
		display: ${(props) => (props.display ? props.display : "block")}
		font-family: Poppins-Bold;
		font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
		color: #4183c4;
		cursor: pointer;
		margin: ${(props) => (props.margin ? props.margin : "0")};
	}

	&.ui.red.header {
		color: #e42354 !important;
	}
`;

export const StyledIconHeader = styled(Header)`
	&& {
		font-family: Poppins-Regular;
		padding: 0 1em;
		margin: 0;
		cursor: pointer;
		color: #1a69a4;
		display: flex;
		font-size: 12px;
	}
	&& .icon {
		font-size: initial;
	}
`;
