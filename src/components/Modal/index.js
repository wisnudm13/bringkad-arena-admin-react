import { StyledModal } from "./index-styles";
import { Modal } from "semantic-ui-react";


const DefaultModal = ({ header, content, actions, ...props }) => {
	return (
		<StyledModal
			closeOnEscape={false}
			closeOnDimmerClick={false}
			dimmer="blurring"
			{...props}
		>
			<Modal.Header>{header}</Modal.Header>
			<Modal.Content {...props}>{content}</Modal.Content>
			<Modal.Actions>{actions}</Modal.Actions>
		</StyledModal>
	);
};

export { DefaultModal };
