import React from "react";
import { Form, Input } from "semantic-ui-react";
import styled from "styled-components";
// import { DatesRangeInput, DateInput } from "semantic-ui-calendar-react";

export const StyledField = styled(({ fontSize, ...props }) => (
	<Form.Field {...props} />
))`
	&& {
		.field {
			width: 100%;
			margin: 0;
		}
		input {
			border-color: #c4ccd6 !important;
			opacity: 1 !important;
		}
		input:disabled {
			background: #dedede !important;
		}
	}
	&&.disabled {
		input {
			background: #dedede !important;
		}
		input[disabled] {
			opacity: 1 !important;
		}
	}
	&.field .ui.input > input {
		font-family: Poppins-Regular;
		font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};

		color: #4a515a;
		line-height: 1.29;
		letter-spacing: 0.19px;
		border-color: #c4ccd6;
		width: 100% !important;
	}

	& {
		position: relative;
		font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};

		label {
			color: #4a4a4a;
			font-size: 14px;
		}
	}
	&& {
		.ui.disabled.input,
		.ui.input:not(.disabled) input[disabled] {
			opacity: 1;
		}
	}
`;

export const StyledDropdownFilter = styled(({ ...props }) => (
	<Form.Field {...props} />
))`
	&& {
		position: relative;
		img {
			position: absolute;
			top: 7px;
			right: 10px;
		}
		.ui.selection.dropdown {
			border: 0;
			border-radius: 8px;
			box-shadow: 0 2px 8px 0 rgba(74, 81, 90, 0.1);
			color: #4a4a4a;
		}
		i.icon {
			color: #3a9fd7;
		}
	}
`;

export const StyledSearchFilterInput = styled(({ ...props }) => (
	<Form.Field {...props} />
))`
	&& {
		.ui.fluid.input {
			width: 100%;
		}
		position: relative;
		.ui.input > input {
			border: 0;
			border-radius: 8px;
			box-shadow: 0 2px 8px 0 rgba(74, 81, 90, 0.1);
			color: #4a4a4a;
		}
		i.icon {
			color: #3a9fd7;
		}
	}
`;

export const FileUpload = styled(Input)`
	&&.ui.input input[type="file"] {
		color: transparent;
		outline: none;
		border: none;
		padding: 0;
		max-width: 93px;
		white-space: nowrap;
		position: initial;
		opacity: 1;
		font-size: 1rem;
	}
	&&.ui.input input[type="file"]::-webkit-file-upload-button {
		visibility: hidden;
	}
	&&.ui.input input[type="file"]::before {
		content: "+ Upload file";
		cursor: pointer;
		color: #3a9fd7;
		font-family: "Poppins-SemiBold";
	}
`;

// export const StyledRangeDate = styled(DatesRangeInput)`
// 	&& {
// 		position: relative;
// 		.ui.input > input {
// 			border: 0;
// 			border-radius: 8px;
// 			box-shadow: 0 2px 8px 0 rgba(74, 81, 90, 0.1);
// 			color: #4a4a4a;
// 		}
// 		i.icon {
// 			color: #3a9fd7;
// 		}
// 	}
// `;

// export const StyledDate = styled(DateInput)`
// 	&& {
// 		position: relative;
// 		.ui.input > input {
// 			border: 0;
// 			border-radius: 8px;
// 			box-shadow: 0 2px 8px 0 rgba(74, 81, 90, 0.1);
// 			color: #4a4a4a;
// 		}
// 		i.icon {
// 			color: #3a9fd7;
// 		}
// 	}
// `;

export const InputErrorMessage = styled.p`
	&& {
		color: #f23e1a;
		font-size: 12px;
		margin-top: 6px;
		position: absolute;
	}
`;
