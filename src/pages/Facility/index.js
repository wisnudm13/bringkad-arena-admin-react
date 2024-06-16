import React, { Component, Fragment } from "react";
import { Grid, Form, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import { DateFormater } from "../../utilities/dataFormater";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CustomAlert from "components/CustomAlert";
import * as action from "../../redux/action";
import { DefaultModal } from "components/Modal";
import Layout from "../../components/Layout";
import { FunctionButton, AnimatedButton } from "../../components/Button";
import BringkadArenaAPI from "services/InternalAPI";
import ListFacilityTable from "./ListFacilityTable";
import FaciliyFilter from "./FacilityFilter";
import withRouter from "../../withRouter";

const { Row, Column } = Grid;

const headers = [
	{ key: "id", content: "ID" },
	{ key: "name", content: "Facility Name" },
	{ key: "type", content: "Type" },
	{ key: "description", content: "Description" },
	{ key: "status", content: "Status" },
	{ key: "view", content: "" },
	{ key: "delete", content: "" },

];

class ListFacility extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isListLoading: false,
			notification: false,
			alertMessage: {},
			showAlertMessage: false,
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
						parent: "facilityAPI",
						child: "facilityList",
					},
					key: {
						group: "Facilities",
						value: "facilityList",
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
		const { facilityList } = this.props;

		if (isListLoading && facilityList) {
			if (prevProps.facilityList !== facilityList) {
				const { data, type } = facilityList;

				if (type === 200) {
					let totalPage = Math.ceil(data.totalData / data.perPage);

					data.listData.map((item) => {
						// item.createdAt = DateFormater(item.createdAt, true);
						// item.borrowerType =
						// 	item.userType && item.userType.value;
						// item.borrowerStatus = item.status && item.status.value;

						item.view = (
							<Link to={`/facility/${item.id}`} state={{ isEditing: true}}>
								<AnimatedButton
									content="Edit"
									color="teal"
									icon="edit"
								/>
							</Link>
							);

						item.delete = (
							<AnimatedButton
								content="Delete"
								color="red"
								icon="trash alternate"
								onClick={() =>
									this.toggleShowRemoveModal(
										item
									)
								}
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
					if (facilityList.data.message) {
						errorMessage = facilityList.data.message;
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

	toggleShowRemoveModal = (data) => {
		this.setState((prevState) => ({
			isDeleteModalOpen: !prevState.isDeleteModalOpen,
			selectedData: data,
		}));
	};

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

	onSubmitDelete = async () => {
		const { selectedData, showAlertMessage } = this.state;

		const deleteFacilityResponse = await BringkadArenaAPI.deleteFacilityData(
			selectedData.id
		)

		this.toggleShowRemoveModal()

		if (deleteFacilityResponse.status !== 200) {
			this.setState(
				{ 
					showAlertMessage: true,
					alertMessage: {
						message: deleteFacilityResponse.errors,
						type: "errorMessage"
					}
				}
			);
			setTimeout(() => {
				this.setState(
					{ 
						showAlertMessage: false,
						alertMessage: {}
					}
				);
			}, 1000);

        } else {
			this.setState(
				{ 
					showAlertMessage: true,
					alertMessage: {
						message: "Successfully deleted facility data",
						type: "successMessage"
					}
				}
			);
			setTimeout(() => {
				this.setState(
					{ 
						showAlertMessage: true,
						alertMessage: {}
					}
				);
				this.onGetList();
			}, 1000);
        }

	}

	render() {
		const { 
			isListLoading, 
			isDeleteModalOpen, 
			alertMessage, 
			showAlertMessage 
		} = this.state;
		const { location } = this.props;

		return (
			<>
				<CustomAlert
					type={alertMessage.type}
					visible={showAlertMessage}
					animation="slide down"
					duration={1000}
					message={alertMessage.message}
					// onClick={clearAlertMessage}
				/>
				<DefaultModal
					header="Caution"
					content={
						<Fragment>
							<p>
								Are you sure you want to delete this data?
							</p>
						</Fragment>
					}
					actions={
						<Grid>
							<Row centered columns="equal">
								<Column>
									<FunctionButton
										content="Cancel"
										color="grey"
										onClick={this.toggleShowRemoveModal}
										loading={null}
										disabled={null}
										fluid
									/>
								</Column>
								<Column>
									<FunctionButton
										content="Delete"
										color="red"
										value={true}
										onClick={this.onSubmitDelete}
										loading={null}
										disabled={null}
										fluid
									/>
								</Column>
							</Row>
						</Grid>
					}
					open={isDeleteModalOpen}
					size="tiny"
				/>
				<Layout location={location} isListLoading={isListLoading}>
					<Grid padded>
						{/** Filtering content */}
						<Row columns={1}>
							<Column>
								<FaciliyFilter onGetList={this.onGetList} />
							</Column>
						</Row>

						{/** Table content */}

						<Row columns={1}>
							<Column>
								<ListFacilityTable
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
			</>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		facilityList: state.reducer.Facilities.facilityList,
	};
}

function mapDispatchToProps(dispatch) {
	return { action: bindActionCreators(action, dispatch) };
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ListFacility)
);
