import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Layout from "components/Layout";
import * as action from "redux/action";



const Admin = (props) => {
	const [isDashboardLoading, setIsDashboardLoading] = useState(false);

	const { action, dashboardRes } = props;

	useEffect(() => {
		// handleGetDashboard();
	}, []);

	useEffect(() => {
		return () => {
			setIsDashboardLoading(false);
		};
	}, [dashboardRes]);

	const handleGetUser = () => {
		setIsDashboardLoading(true);

		const actionParams = {
			token: true,

			sdk: {
				parent: "borrower",
				child: "getAdminDashboardData",
			},
			key: {
				group: "loanRequest",
				value: "dashboardRes",
			},
		};

		action.fetch({
			...actionParams,
			id: 1,
		});
	};

	return (
		<Layout>
		</Layout>
	);
};

function mapStateToProps(state) {
	return {
		// dashboardRes: state.reducer.loanRequest.dashboardRes,
	};
}

function mapDispatchToProps(dispatch) {
	return { action: bindActionCreators(action, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);