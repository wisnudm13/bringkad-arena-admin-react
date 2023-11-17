import React from "react";
import PropTypes from "prop-types";
import { StyledDropdown } from "./index-style";
import { StyledField } from "../Input/index-styles";
import { Form } from "semantic-ui-react";

export const DefaultDropdown = ({ label, ...props }) => (
	<Form>
		<StyledField>
			{label && <label>{label}</label>}
			<StyledDropdown {...props} />
		</StyledField>
	</Form>
);

DefaultDropdown.propTypes = {
	value: PropTypes.any.isRequired,
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string,
};
