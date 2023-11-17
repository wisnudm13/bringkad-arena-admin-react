import React, { Component } from "react";
import { Grid, Form, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import { DateFormater } from "../../utilities/dataFormater";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as action from "../../redux/action";

import Layout from "../../components/Layout";
import { FunctionButton, AnimatedButton } from "../../components/Button";

import ListAdminTable from "./ListAdminTable";
// import ListBorrowerFilter from "./ListBorrowerFilter";
import withRouter from "../../withRouter";

const { Row, Column } = Grid;

const headers = [
	{ key: "id", content: "ID" },
	{ key: "username", content: "Admin Name" },
	{ key: "email", content: "Email" },
	{ key: "view", content: "" },
	{ key: "delete", content: "" },

];

class ListAdmin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isListLoading: false,
			notification: false,
			listData: [],
			params: {
				per_page: 10,
				page: 1,
			},
			pageOptions: {
				perPage: 10,
				activePage: 1,
				totalPages: 0,
			},
			actions: {
				get: {
					sdk: {
						parent: "adminsAPI",
						child: "adminList",
					},
					key: {
						group: "Admins",
						value: "adminList",
					},
					token: true,
				},
			},
		};
		this.handlePaginationChange = this.handlePaginationChange.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		this.onGetList();
	}

	componentDidUpdate(prevProps, prevState) {
		const { isListLoading } = prevState;
		const { adminList } = this.props;

		if (isListLoading && adminList) {
			if (prevProps.adminList !== adminList) {
				const { data, type } = adminList;
				console.log("did update")
				console.log(data)
				console.log(type)
				if (type === 200) {
					let totalPage = Math.ceil(data.totalData / data.perPage);

					data.listData.map((item) => {
						// item.createdAt = DateFormater(item.createdAt, true);
						// item.borrowerType =
						// 	item.userType && item.userType.value;
						// item.borrowerStatus = item.status && item.status.value;

						item.view = (
							<Link to={`/borrower/${item.id}`}>
								<AnimatedButton
									content="View"
									color="blue"
									icon="folder open"
								/>

							</Link>

						);

						item.delete = (
							<AnimatedButton
								content="Delete"
								color="red"
								icon="trash alternate"
							/>
						);

						return item;
					});

					this.setState(
						{
							listData: data.listData,
							pageOptions: {
								...this.state.pageOptions,
								totalPages: totalPage,
							},
						},
						() => {
							this.setState({ isListLoading: false });
						}
					);
				}
				if (type !== 200) {
					let errorMessage;
					if (adminList.data.message) {
						errorMessage = adminList.data.message;
					} else {
						errorMessage = "User has no permission";
					}
					this.handleToggleNotification({
						type: "error",
						message: errorMessage,
					});
					this.setState({ isListLoading: false });
				}
			}
		}
	}

	onGetList = (params) => {
		const { actions } = this.state;
		const { action } = this.props;
		if (params && params.page === 1) {
			this.setState({
				isListLoading: true,
				pageOptions: {
					...this.state.pageOptions,
					activePage: 1,
				},
			});
		}
		if (!params) {
			this.setState(
				{
					isListLoading: true,
					params: {
						per_page: 10,
						page: 1,
					},
				},
				() => {
					action.fetch({
						...actions.get,
						data: {
							...this.state.params,
						},
					});
				}
			);
		} else {
			this.setState(
				{
					isListLoading: true,
					params: {
						...this.state.params,
						...params,
					},
				},
				() => {
					if (params.user_type === "") {
						delete this.state.params.user_type;
					}
					if (params.status === "") {
						delete this.state.params.status;
					}
					action.fetch({
						...actions.get,
						data: {
							...this.state.params,
						},
					});
				}
			);
		}
	};

	showTotalData = () => {
		const { perPage, total, activePage } = this.state.pageOptions;
		const fromItem = activePage * 10 - 9;
		let toItem = total;

		if (activePage * perPage < total) {
			toItem = activePage * perPage;
		}

		return `${fromItem}-${toItem} of ${total.toLocaleString("id-ID")}`;
	};

	handlePaginationChange(e, value) {
		window.scrollTo(0, 0);
		let page = value.activePage;
		this.setState({
			isListLoading: true,
			pageOptions: {
				...this.state.pageOptions,
				activePage: value.activePage,
			},
		});

		this.onGetList({
			...this.state.params,
			page: page,
		});
	}

	handleToggleNotification(notification) {
		this.setState((prevState) => {
			return {
				notification: notification,
			};
		});
		setTimeout(() => {
			this.setState({
				notification: false,
			});
		}, 3000);
	}

	render() {
		const { isListLoading, listData } = this.state;
		const { location } = this.props;

		return (
			<Layout location={location} isListLoading={isListLoading}>
				<Grid padded>
					{/** Filtering content */}
					<Row columns={1}>
						<Column>
							{/* <ListBorrowerFilter onGetList={this.onGetList} /> */}
						</Column>
					</Row>

					{/** Table content */}

					<Row columns={1}>
						<Column>
							<ListAdminTable
								handlePaginationChange={
									this.handlePaginationChange
								}
								{...this.state}
								headers={headers}
							/>
						</Column>
					</Row>
				</Grid>
			</Layout>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		adminList: state.reducer.Admins.adminList,
	};
}

function mapDispatchToProps(dispatch) {
	return { action: bindActionCreators(action, dispatch) };
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ListAdmin)
);
