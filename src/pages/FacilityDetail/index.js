import withRouter from "../../withRouter";
import * as action from "../../redux/action";
import { Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const { Row, Column } = Grid;



const FacilityDetail = ({ action, ...props }) => {
	const [isListLoading, setIsListLoading] = useState(true);
	const [notification, setNotification] = useState(false);
	const [userData, setUserData] = useState({});
	const [activeIndex, setActiveIndex] = useState(0);
	const [userType, setUserType] = useState(false);

	// useEffect(() => {
	// 	handleGetUserData();
	// }, []);

	// useEffect(() => {
	// 	if (props.userData?.type === 200) {
	// 		setUserData(props.userData.data);
	// 	}
	// }, [props.userData]);

	// const handleGetUserData = () => {
	// 	const actions = {
	// 		sdk: {
	// 			parent: "users",
	// 			child: "getLiteUserData",
	// 		},
	// 		key: {
	// 			group: "users",
	// 			value: "liteUserData",
	// 		},
	// 		token: true,
	// 	};
	// 	action.fetch({
	// 		...actions,
	// 		data: {
	// 			id: props.router.params.id,
	// 		},
	// 	});
	// };

	// const handleToggleNotification = (notification) => {
	// 	setNotification(notification);
	// };

	// const handleTabChange = (e, { activeIndex }) => {
	// 	setActiveIndex(activeIndex);
	// };
	const borrowerId = props.router.params.id;
	return (
		<Layout
			// location={location}
			isListLoading={isListLoading}
			notification={notification}
		>
			<Grid padded>
				<Row columns={1}>
					<Column>
						<h1>
							<strong>{userData.name}</strong>
						</h1>
						<h4>Facility ID {borrowerId}</h4>
						{/* <DefaultTab
							className={userType === "COMPANY" ? "hidden" : ""}
							menu={{ secondary: true, pointing: true }}
							panes={panes({ props, handleToggleNotification })}
							onTabChange={handleTabChange}
							activeIndex={activeIndex}
						/> */}
					</Column>
				</Row>
			</Grid>
		</Layout>
	);
};

function mapStateToProps(state, ownProps) {
	return {
		// userData: state.reducer.users.liteUserData,
	};
}

function mapDispatchToProps(dispatch) {
	return { action: bindActionCreators(action, dispatch) };
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(FacilityDetail)
);