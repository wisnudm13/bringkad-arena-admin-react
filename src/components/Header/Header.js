import React from "react";
import { Header, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

import {
	StyledHeader,
	StyledLinkHeader,
	StyledIconHeader,
} from "./index-styles";

const DefaultHeader = ({ content, isInputStyle, ...props }) => {
	return (
		<StyledHeader
			className={isInputStyle ? "isInputStyle" : null}
			{...props}
		>
			{content}
		</StyledHeader>
	);
};

DefaultHeader.propTypes = {
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const HeaderWithIcon = ({ title, subTitle, icon, ...props }) => {
	return (
		<Header as="h4" {...props}>
			{icon && (
				<Icon name={icon.name} color={icon.color} size={icon.size} />
			)}
			<Header.Content>
				{title}
				{subTitle && <Header.Subheader>{subTitle}</Header.Subheader>}
			</Header.Content>
		</Header>
	);
};

HeaderWithIcon.propTypes = {
	title: PropTypes.string.isRequired,
};

const LinkHeader = ({ content, icon, ...props }) => {
	return (
		<StyledLinkHeader {...props}>
			{/* {icon && <Image src={icon} alt="" />} */}
			{icon && <Icon name={icon} />}
			<Header.Content>{content}</Header.Content>
		</StyledLinkHeader>
	);
};

LinkHeader.propTypes = {
	content: PropTypes.string.isRequired,
};

const IconHeaderButton = ({
	title,
	subTitle,
	icon,
	isInputStyle,
	...props
}) => {
	return (
		<StyledIconHeader as="h4" {...props}>
			<Icon name={icon} />
			<Header.Content>
				{title}
				<Header.Subheader>{subTitle}</Header.Subheader>
			</Header.Content>
		</StyledIconHeader>
	);
};

IconHeaderButton.propTypes = {
	title: PropTypes.string.isRequired,
};

export { DefaultHeader, HeaderWithIcon, LinkHeader, IconHeaderButton };
