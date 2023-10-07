import React from "react";
import { Form, Image } from "semantic-ui-react";
import styled from "styled-components";

export const StyledForm = styled(Form)`
	& {
		width: 100%;
		display: inline-block;
	}

	&.ui.form .field > label {
		color: #4a4a4a !important;
		font-size: 12px;
		opacity: 0.7;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.29;
		letter-spacing: -0.24px;
	}

	&.ui.form .field.error label {
		color: #000000 !important;
	}

	&.ui.form .fields {
		display: flex !important;
	}

	& .custom-file-input input[type="file"],
	.custom-file-input input[type="file"]:focus {
		color: transparent;
		font-size: 12px;
	}

	& .custom-file-input input[type="file"]::-webkit-file-upload-button {
		visibility: hidden;
	}

	& .custom-file-input input[type="file"]::before {
		content: "";
		color: #5c5c5c;
	}
`;

export const StyledNumberField = styled(Form.Input)`
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type="number"] {
		-moz-appearance: textfield;
	}
`;

export const StyledUploaderInput = styled(({ content, ...props }) => (
	<Form.Input {...props} />
))`
	&.custom-file-input input[type="file"]::before {
		content: ${(props) => (props.content ? `"${props.content}"` : "")};
		color: #5c5c5c;
		font-size: 14px;
	}
`;

export const StyledErrorDescription = styled.span`
	& {
		color: #e42354;
		font-size: 12px;
	}
`;

export const StyledFormInput = styled(Form.Input)`
	&&& {
		margin-bottom: 4px;
	}
`;

export const StyledErrorContainer = styled.div`
	& {
		margin-bottom: 12px;
	}
`;

export const StyledImageIcon = styled(({ ...props }) => <Image {...props} />)`
	& {
		position: absolute !important;
		cursor: pointer;
		top: 50%;
		right: 10px;
		width: 25px;
	}
`;
