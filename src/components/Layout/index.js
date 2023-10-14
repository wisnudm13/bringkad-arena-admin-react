import React from "react";
import PropTypes from "prop-types";

import Navbar from "../Navbar";
import { Dimmer, Loader } from "semantic-ui-react";
import { DefaultAlert } from "../Message";
import { connect } from "react-redux";

const Layout = ({ children, isLoading, notification, isPartner, ...props }) => {
	return (
		<div>
			{notification && (
				<DefaultAlert
					type={notification.type}
					content={<label>{notification.message}</label>}
					visible={notification}
				/>
			)}
			{/* <DefaultAlert
				visible={props.notificationState.visible}
				type={props.notificationState.type}
				content={<label>{props.notificationState.message}</label>}
			/> */}
			<Dimmer inverted active={isLoading}>
				<Loader>Loading</Loader>
			</Dimmer>
			<Navbar isPartner={isPartner} {...props}>{children}</Navbar>
		</div >
	);
};

Layout.propTypes = {
	children: PropTypes.node,
};

function mapStateToProps(state) {
	return {
		notificationState: state.reducer.notification,
	};
}

export default connect(mapStateToProps, () => ({}))(Layout);
