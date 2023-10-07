import React from "react";
import { Button, Input, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

import {
	StyledButton,
	CustomAddBtn,
	StyledPrimaryBtn,
	StyledBtnTab,
	StyledBtnTabPrimary,
	StyledUploaderButton,
	InversedStyledPrimaryBtn,
	CustomStyledButton,
} from "./index-styles";
import { Link } from "react-router-dom";

const colorDictionary = (color) => {
	let buttonStyle = {
		color: "",
		border: "",
		background: "",
	};

	switch (color) {
		case "blue":
			buttonStyle.color = "#ffffff";
			buttonStyle.border = "none";
			buttonStyle.background = "#0146a0";
			break;
		case "green":
			buttonStyle.color = "#ffffff";
			buttonStyle.border = "none";
			buttonStyle.background = "#21ba45";
			break;
		case "red":
			buttonStyle.color = "#ffffff";
			buttonStyle.border = "none";
			buttonStyle.background = "#db2828";
			break;
		case "grey":
			buttonStyle.color = "#ffffff";
			buttonStyle.border = "none";
			buttonStyle.background = "#767676";
			break;
		case "transparent":
			buttonStyle.color = "#000000";
			buttonStyle.border = "none";
			buttonStyle.background = "none";
			break;
        case "login":
            buttonStyle.background = "transparent";
			buttonStyle.color = "#ffffff";
            buttonStyle.border = "2px solid #ffffff";
            break;
		default:
			buttonStyle.color = "#0146a0";
			buttonStyle.border = "1px solid #0146a0";
			buttonStyle.background = "transparent";
			break;
	}

	return buttonStyle;
};

const FunctionButton = ({ content, color, onClick, ...props }) => {
	return (
		<StyledButton
			buttonstyle={colorDictionary(color)}
			onClick={onClick}
			{...props}
		>
			{content}
		</StyledButton>
	);
};

FunctionButton.propTypes = {
	content: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

const LinkButton = ({ content, color, link, ...props }) => {
	return (
		<Link to={link}>
			<StyledButton buttonstyle={colorDictionary(color)} {...props}>
				{content}
			</StyledButton>
		</Link>
	);
};

LinkButton.propTypes = {
	content: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

const PrimaryButton = ({ content, ...props }) => {
	return <StyledPrimaryBtn {...props}>{content}</StyledPrimaryBtn>;
};

PrimaryButton.propTypes = {
	content: PropTypes.string.isRequired,
};

const AddButton = ({ content, ...props }) => {
	return <CustomAddBtn {...props}>{content}</CustomAddBtn>;
};

AddButton.propTypes = {
	content: PropTypes.string.isRequired,
};

const OnlyIconButton = ({ icon, size, ...props }) => {
	return (
		<CustomStyledButton icon {...props}>
			<Icon name={icon} size={size} />
		</CustomStyledButton>
	);
};

OnlyIconButton.propTypes = {
	icon: PropTypes.string.isRequired,
};

const ButtonWithIcon = ({
	children,
	isUploadFile,
	content,
	icon,
	...props
}) => {
	if (isUploadFile) {
		return (
			<StyledButton icon {...props}>
				<Icon name={icon} />
				{children}
			</StyledButton>
		);
	} else {
		return (
			<StyledButton icon {...props}>
				<Icon name={icon} />
				{content}
			</StyledButton>
		);
	}
};

ButtonWithIcon.defaultProps = {
	labelPosition: "left",
};

ButtonWithIcon.propTypes = {
	content: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

const AnimatedButton = ({ content, icon, ...props }) => {
	return (
		<StyledPrimaryBtn {...props}>
			<Button.Content hidden>{content}</Button.Content>
			<Button.Content visible>
				<Icon name={icon} />
			</Button.Content>
		</StyledPrimaryBtn>
	);
};

const ButtonTab = ({ content, ...props }) => {
	return <StyledBtnTab {...props}>{content}</StyledBtnTab>;
};

const ButtonTabPrimary = ({ content, ...props }) => (
	<StyledBtnTabPrimary {...props}>{content}</StyledBtnTabPrimary>
);

AnimatedButton.defaultProps = {
	animated: "vertical",
};

AnimatedButton.propTypes = {
	content: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

const UploaderButton = ({ id, name, onChange, ...props }) => {
	return (
		<StyledUploaderButton {...props}>
			<label htmlFor={id}>Upload</label>
			<Input id={id} type="file" name={name} onChange={onChange} />
		</StyledUploaderButton>
	);
};

UploaderButton.propTypes = {
	onChange: PropTypes.func.isRequired,
};

const InversedPrimaryButton = ({ content, ...props }) => {
	return (
		<InversedStyledPrimaryBtn {...props}>
			{content}
		</InversedStyledPrimaryBtn>
	);
};

InversedPrimaryButton.propTypes = {
	content: PropTypes.string.isRequired,
};

export {
	FunctionButton,
	LinkButton,
	PrimaryButton,
	AddButton,
	OnlyIconButton,
	ButtonWithIcon,
	AnimatedButton,
	ButtonTab,
	ButtonTabPrimary,
	UploaderButton,
	InversedPrimaryButton,
};

// Create function button (blue yellow, default: inversed blue), use switch
// Rename Default button to function button
// Create link button
