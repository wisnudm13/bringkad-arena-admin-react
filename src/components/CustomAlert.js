import React from "react";
import { Transition, Message, Icon } from "semantic-ui-react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMessage = styled(Message)`
	&.ui.message {
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		display: flex !important;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: none;
		border-radius: 0;
		box-shadow: none;
		margin: 0;
	}

	&.ui.icon.message > .content i.icon {
		margin-right: 10px;
	}

	&.ui.positive.message {
		background-color: #7cba36;
		font-family: Poppins-Regular;
		font-size: 18px;
		color: #ffffff;
	}

	&.ui.warning.message {
		background-color: #d6092d;
		font-family: Poppins-Regular;
		font-size: 18px;
		color: #ffffff;
	}

	&.ui.negative.message {
		background-color: #d6092d;
		font-family: Poppins-Regular;
		font-size: 18px;
		color: #ffffff;
	}
`;

const CustomAlert = ({ type, visible, animation, duration, message }) => {
	if (type === "successMessage") {
		return (
			<Transition
				visible={visible}
				animation={animation}
				duration={duration}
			>
				<StyledMessage positive icon>
					<Message.Content>
						<Icon name="check" />
						{message}
					</Message.Content>
				</StyledMessage>
			</Transition>
		);
	} else if (type === "warningMessage") {
		return (
			<Transition
				visible={visible}
				animation={animation}
				duration={duration}
			>
				<StyledMessage warning icon>
					<Message.Content>
						<Icon name="warning sign" />
						{message}
					</Message.Content>
				</StyledMessage>
			</Transition>
		);
	} else if (type === "errorMessage") {
		return (
			<Transition
				visible={visible}
				animation={animation}
				duration={duration}
			>
				<StyledMessage negative icon>
					<Message.Content>
						<Icon name="times circle" />
						{message}
					</Message.Content>
				</StyledMessage>
			</Transition>
		);
	}
};

CustomAlert.propTypes = {
	visible: PropTypes.bool.isRequired,
	animation: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	message: PropTypes.string.isRequired,
};

export default CustomAlert;
