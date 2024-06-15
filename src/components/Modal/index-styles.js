import { Modal } from "semantic-ui-react";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
	&.ui.modal > .header {
		font-family: Poppins-SemiBold;
		font-size: 28px;
		color: #5c5c5c;
		border-bottom: none;
	}

	&.ui.modal > .content .ui.input {
		width: 100%;
		overflow: hidden;
	}

	&.ui.modal > .content .ui.input input[type="file"] {
		color: transparent;
		border: dashed 1px #172dca;
		border-radius: 2px;
		padding: 0;
	}

	&.ui.modal
		> .content
		.ui.input
		input[type="file"]::-webkit-file-upload-button {
		visibility: hidden;
	}

	&.ui.modal > .content .ui.input input[type="file"]::before {
		content: "Upload Disini";
		display: inline-block;
		width: 100%;
		text-align: center;
		text-transform: uppercase;
		color: #5c5c5c;
		opacity: 0.5;
		cursor: pointer;
		padding: 30px;
	}

	&.ui.modal > .actions {
		background: none;
		text-align: center;
		border-top: none;
	}
`;
