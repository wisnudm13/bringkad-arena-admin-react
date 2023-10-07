import React from "react";

import {
	StyledForm,
	StyledNumberField,
	StyledErrorDescription,
	StyledFormInput,
	StyledErrorContainer,
	StyledImageIcon,
} from "./index.styles"

const DefaultForm = ({ ...props }) => {
	return <StyledForm {...props} />;
};

const DefaultNumberField = ({ ...props }) => {
	return <StyledNumberField {...props} />;
};

const DefaultFormInput = ({ onClick, ...props }) => {
	return (
		<div>
			<div style={{ position: props?.icon ? "relative" : "inherit" }}>
				<StyledFormInput {...props} />
				{props?.icon && (
					<StyledImageIcon src={props?.icon} onClick={onClick} />
				)}
			</div>
			<StyledErrorContainer>
				{props.error && (
					<StyledErrorDescription>
						{props.errorMsg}
					</StyledErrorDescription>
				)}
			</StyledErrorContainer>
		</div>
	);
};

export { DefaultForm, DefaultNumberField, DefaultFormInput };
