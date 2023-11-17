import React from "react";
import { Dropdown } from "semantic-ui-react";
import styled from "styled-components";

export const StyledDropdown = styled(({ ...props }) => (
	<Dropdown selection {...props} />
))``;
