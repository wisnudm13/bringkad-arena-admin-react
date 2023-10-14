import React, { Component } from "react";
import PropTypes from "prop-types";

import NavbarDesktop from "./NavbarDesktop";

class Navbar extends Component {
	render() {
		const { children, ...props } = this.props;

		return (
			<>
				<NavbarDesktop {...props}>{children}</NavbarDesktop>
			</>
		);
	}
}

Navbar.propTypes = {
	children: PropTypes.node,
};

export default Navbar;
