import React, { Component } from "react";
import {
	// Responsive,
	Grid,
	Menu,
	Container,
	Image,
	Dimmer,
	Loader,
	Accordion,
	Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import withRouter from "../../withRouter";
import styled from "styled-components";

import routesSchema from "../../routes/schema";
import localStorage from "../../utilities/localStorage";
import {
	DesktopSidebar,
	ContentContainer,
	BellActiveWrapper,
} from "./index-styles";
import * as action from "../../redux/action";
import qs from "query-string";

const { Column } = Grid;

const StyledMenuItem = styled(Menu.Item)`
	&& {
		margin-bottom: 50px;
	}
	&& img {
		width: 175px;
	}
`;

const IconBellActive = () => {
	return (
		<BellActiveWrapper>
			<Icon name={"bell outline"} size="large" />
			<div className="red" />
		</BellActiveWrapper>
	);
};

class NavbarDesktop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: !!localStorage.authorization_token,
			activeItem: "",
			activeIndex: 1,
			unreadNotification: 0,
		};
	}

	componentDidMount() {
		// this.getUserProfile();
		// this.getNotificationUnread();
	}

	componentDidUpdate(prevProps) {
		const { userProfile, unreadNotification } = this.props;

		if (userProfile) {
			if (prevProps.userProfile !== userProfile) {
				const { type, data } = userProfile;

				if (type === 200) {
					let groupPermission = data?.groups?.map((o) => {
						return o.permissions;
					});

					localStorage().save(
						"groupPermission",
						[].concat(...groupPermission)
					);
					localStorage().save("userRole", data.roleName);
					localStorage().save("userPermission", data.permissions);
					localStorage().save("adminId", data.id);
				} else {
					this.handleLogOut();
				}
			}
		}

		if (unreadNotification) {
			if (prevProps.unreadNotification !== unreadNotification) {
				const { data } = unreadNotification;
				this.setState({
					unreadNotification: data.totalUnread,
				});
			}
		}
	}

	// getUserProfile = () => {
	// 	const { action } = this.props;
	// 	const actionParams = {
	// 		sdk: {
	// 			parent: "users",
	// 			child: "getAdminProfile",
	// 		},
	// 		key: {
	// 			group: "user",
	// 			value: "profile",
	// 		},
	// 	};

	// 	action.fetch({
	// 		...actionParams,
	// 	});
	// };

	// getNotificationUnread = () => {
	// 	const { action } = this.props;
	// 	const actionParams = {
	// 		sdk: {
	// 			parent: "notifications",
	// 			child: "getAdminNotificationUnreadCount",
	// 		},
	// 		key: {
	// 			group: "notificationList",
	// 			value: "unreadCount",
	// 		},
	// 	};

	// 	action.fetch({
	// 		...actionParams,
	// 	});
	// };

	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	handleLogOut = () => {
		localStorage().remove("userToken");
		localStorage().remove("userRole");
		localStorage().remove("userPermission");
		window.location.href = "/";
	};

	render() {
		const { activeIndex, unreadNotification } = this.state;

		const {
			isLoading,
			router: { location },
			children,
			pageRouteDescription,
		} = this.props;
		let schema = routesSchema;
		let isNotificationActive = false;
		if (unreadNotification > 0) {
			isNotificationActive = true;
		}

		return (
			// <Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Grid>
					<Column width={16}>
						<DesktopSidebar vertical>
							<StyledMenuItem>
								{/* <Image src={LogoAkslWhite} alt="" /> */}
							</StyledMenuItem>
							{schema.map((item, index) => {
								const {
									path,
									id,
									name,
									sidebarMenu,
									subMenu,
									queryParams,
								} = item;
								const query = qs.stringify(queryParams);

								return Object.keys(sidebarMenu).length ===
									0 ? null : subMenu.length === 0 ? (
									<span>
										{id === "listBorrower" && (
											<Menu.Item>
												<h3>
													<strong>LOS</strong>
												</h3>
											</Menu.Item>
										)}
										{id === "list-partner" && (
											<Menu.Item>
												<h3>
													<strong>PARTNER</strong>
												</h3>
											</Menu.Item>
										)}
										{id === "accessMapping" && (
											<Menu.Item>
												<h3>
													<strong>SETTING</strong>
												</h3>
											</Menu.Item>
										)}
										<Menu.Item
											as={Link}
											to={
												queryParams
													? `${path}?${query}`
													: path
											}
											key={id}
											active={path === location.pathname}
										>
											{sidebarMenu.image ? (
												<Image
													src={sidebarMenu.image}
												/>
											) : (
												<Icon name={sidebarMenu.icon} />
											)}
											{name}
										</Menu.Item>
									</span>
								) : (
									<Accordion key={id}>
										<Menu.Item>
											<Image src={sidebarMenu.image} />
											<Accordion.Title
												active={activeIndex === index}
												content={name}
												index={index}
												onClick={this.handleClick}
											/>
											<Accordion.Content
												active={activeIndex === index}
												content={subMenu.map((item) => {
													const {
														path,
														id,
														name,
														sidebarMenu,
													} = item;

													return (
														<Menu.Item
															as={Link}
															to={path}
															key={id}
															active={
																path ===
																location.pathname
															}
														>
															<Icon
																name={
																	sidebarMenu.icon
																}
															/>
															{name}
														</Menu.Item>
													);
												})}
											/>
										</Menu.Item>
									</Accordion>
								);
							})}
						</DesktopSidebar>
						<ContentContainer vertical>
							<Dimmer active={isLoading}>
								<Loader>Loading...</Loader>
							</Dimmer>

							<Menu secondary size="large" className="navbar">
								<Container fluid>
									<Menu.Menu>
										<Menu.Item>
											<Icon
												name="arrow left"
												size="big"
												link
												onClick={() =>
													this.props.router.navigate(
														-1
													)
												}
											/>
											<span
												style={{ fontStyle: "italic" }}
											>
												{pageRouteDescription}
											</span>
										</Menu.Item>
									</Menu.Menu>
									<Menu.Menu position="right">
										<Menu.Item
											as={Link}
											to="/notifications"
											name="notifications"
										>
											{isNotificationActive ? (
												<IconBellActive />
											) : (
												<Icon
													name={"bell outline"}
													size="large"
												/>
											)}
										</Menu.Item>
										<Menu.Item onClick={this.handleLogOut}>
											<Icon name="log out" size="large" />
										</Menu.Item>
									</Menu.Menu>
								</Container>
							</Menu>
							<Grid padded>
								<Column width={16}>{children}</Column>
							</Grid>
						</ContentContainer>
					</Column>
				</Grid>
			// </Responsive>
		);
	}
}

NavbarDesktop.propTypes = {
	children: PropTypes.node,
};

function mapStateToProps(state) {
	return {
		// unreadNotification: state.reducer.notificationList.unreadCount,
		// userProfile: state.reducer.user.profile,
	};
}

function mapDispatchToProps(dispatch) {
	return { action: bindActionCreators(action, dispatch) };
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(NavbarDesktop)
);
