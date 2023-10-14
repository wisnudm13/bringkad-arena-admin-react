import React from "react";
import { Message, Transition } from "semantic-ui-react";
import styled from "styled-components";

const BlackFontMessage = styled(Message)`
	&&& {
		color: #4a4a4a;
		word-break: break-all;
	}
	${({ color }) =>
		color === "info-message" &&
		`
		&.ui.message{
			border-radius: 4px;
			background-color: #c5edff;
			border: none;
			box-shadow: none;
			padding:6px;
			p {
				font-family:'Poppins',sans-serif;
				font-size: 12px;
				font-weight: normal;
				font-stretch: normal;
				font-style: normal;
				line-height: 1.5;
				letter-spacing: 0.12px;
				width:80%;
			}
		}
		
	`}
`;

const BlackFontHeader = styled(Message.Header)`
	&&&& {
		color: #4a4a4a;
		margin-bottom: 5px;
	}
`;

const Alert = styled(({ bgColor, textColor, ...props }) => (
	<Message {...props} />
))`
	&.ui.message {
		text-align: center;
		color: ${(props) => props.textColor};
		background-color: ${(props) => props.bgColor};
		font-size: 18px;
		border-radius: unset;
		box-shadow: none;
		padding-top: 10px;
		padding-bottom: 10px;
		position: fixed;
		width: 100%;
		top: 0px;
		z-index: 20000;
		margin-top: 0px;
		display: flex !important;
		justify-content: center;
		align-items: center;
	}

	@media only screen and (min-width: 768px) {
		&.ui.message {
			height: 84px;
		}
	}

	@media only screen and (max-width: 767px) {
		&.ui.message {
			height: 70px;
		}
	}

	&.ui.message > .close.icon {
		top: unset;
	}
`;

const DefaultMessage = ({ header, content, color }) => (
	<BlackFontMessage color={color}>
		{header && <BlackFontHeader>{header}</BlackFontHeader>}
		{content}
	</BlackFontMessage>
);

const DefaultAlert = ({ content, type, visible, hideMessage }) => {
	let bgColor, textColor;

	switch (type) {
		case "success":
			bgColor = "#A3CA6E";
			textColor = "white";
			break;
		case "warning":
			bgColor = "#FDDB0A";
			textColor = "#5C5C5C";
			break;
		case "error":
			bgColor = "#F23E1A";
			textColor = "white";
			break;
		default:
			bgColor = "";
			textColor = "#5C5C5C";
	}

	return (
		<Transition
			visible={visible}
			animation="slide down"
			duration={500}
			transitionOnMount
		>
			<Alert
				bgColor={bgColor}
				textColor={textColor}
				onDismiss={hideMessage}
			>
				{content}
			</Alert>
		</Transition>
	);
};

export { DefaultMessage, DefaultAlert };
