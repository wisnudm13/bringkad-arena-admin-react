import React, { useState, useEffect } from "react";
import { Grid, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as action from "redux/action";

import Layout from "components/Layout";
import { DefaultHeader } from "components/Header";
// import { DefaultStatistic } from "components/Statistic";
// import { DefaultProgressBar } from "components/ProgressBar";
// import { DefaultPlaceholder } from "components/Placeholder";

import { CardDashboard } from "./index-styles";

const { Row, Column } = Grid;

const Dashboard = (props) => {
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

	const handleGetDashboard = () => {
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

	const getPercentage = (total, amount) => {
		return (amount * 100) / total;
	};

	const getInTrillionNumbers = (amount) => {
		let finalAmount = amount / 1000000;

		if (finalAmount < 1000) {
			return `Rp${finalAmount.toFixed(2)} JT`;
		} else if (finalAmount < 1000000) {
			finalAmount = finalAmount / 1000;
			return `Rp${finalAmount.toFixed(2)} M`;
		} else if (finalAmount < 1000000000) {
			finalAmount = finalAmount / 1000000;
			return `Rp${finalAmount.toFixed(2)} T`;
		}
	};

	return (
		<Layout>
			<Grid padded>
				<Row stretched>
					<Column width="4">
						<CardDashboard>
							<Grid>
								<Row>
									<Column>
										<DefaultHeader
											content="Pengguna"
											fontSize="18px"
											marginBottom="0"
										/>
									</Column>
								</Row>
								{/* <Row>
									<Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label={
													dashboardRes.data.totalUser
												}
												value="Total Borrower"
												labelSize="25px"
												valueSize="15px"
											/>
										)}
									</Column>
								</Row>
								<Row columns="1">
									<Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultProgressBar
												percent={getPercentage(
													dashboardRes.data.totalUser,
													dashboardRes.data
														.totalVerifiedUser
												)}
												label="Terverifikasi"
												value={
													dashboardRes.data
														.totalVerifiedUser
												}
												size="tiny"
												bgColor="#FEC700"
											/>
										)}
									</Column>
									<br />
									<br />
									<br />
									<Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultProgressBar
												percent={getPercentage(
													dashboardRes.data.totalUser,
													dashboardRes.data
														.totalActiveUsers
												)}
												label="Aktif"
												value={
													dashboardRes.data
														.totalActiveUsers
												}
												size="tiny"
												bgColor="#58D0FF"
											/>
										)}
									</Column>
								</Row> */}
							</Grid>
						</CardDashboard>
					</Column>
					<Column width={12}>
						<CardDashboard>
							<Grid>
								<Row>
									<Column>
										<DefaultHeader
											content="Pinjaman"
											fontSize="18px"
											marginBottom="0"
										/>
									</Column>
								</Row>
								{/* <Row columns="equal">
									<Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Total Pemberian Pinjaman"
												value={
													dashboardRes.data
														.totalInvestment
												}
												valueSize="25px"
												valueColor="#7ca80e"
												isCurrency
												isBold
											/>
										)} */}
									{/* </Column> */}
									{/* <Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Total Pemberian Pinjaman Grup"
												value={
													dashboardRes.data
														.totalGroupLoanAmount
												}
												valueSize="25px"
												valueColor="#8cc400"
												isCurrency
												isBold
											/>
										)}
									</Column> */}
								{/* </Row> */}
								{/* <Row>
									<Column computer="8" largeScreen="4">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Pinjaman Tersalurkan"
												value={
													dashboardRes.data
														.totalDisbursement
												}
												isCurrency
											/>
										)}
									</Column>
									<Column computer="8" largeScreen="4">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Outstanding"
												value={
													dashboardRes.data
														.totalOutstandingLoan
												}
												isCurrency
											/>
										)}
									</Column> */}
									{/* <Column computer="8" largeScreen="4">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Pinjaman Grup Tersalurkan"
												value={
													dashboardRes.data
														.groupLoanAmount
												}
												isCurrency
											/>
										)}
									</Column> */}
									{/* <Column computer="8" largeScreen="4">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Outstanding Grup"
												value={
													dashboardRes.data
														.totalOutstandingGroupLoanAmount
												}
												isCurrency
											/>
										)}
									</Column> */}
								{/* </Row> */}
								{/* <Row>
									<Column computer="8" largeScreen="4">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Pinjaman Sudah Lunas"
												value={
													dashboardRes.data.paidAmount
												}
												isCurrency
											/>
										)}
									</Column>
									<Column computer="8" largeScreen="4">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Pinjaman Terlambat"
												value={
													dashboardRes.data
														.passDueDateAmount
												}
												isCurrency
											/>
										)}
									</Column>
									<Column computer="8" largeScreen="4">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Pinjaman Macet"
												value={
													dashboardRes.data
														.badLoansAmount
												}
												isCurrency
											/>
										)}
									</Column> */}
									{/* <Column computer="8" largeScreen="4">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="Pinjaman Tak Tertagih"
												value={
													dashboardRes.data
														.totalUncollectible
												}
												isCurrency
											/>
										)}
									</Column> */}
								{/* </Row> */}
							</Grid>
						</CardDashboard>
					</Column>
				</Row>

				<Divider style={{ background: "#c8dfff" }} />

				<Row stretched>
					<Column width={9}>
						<CardDashboard>
							<Grid>
								<Row>
									<Column>
										<DefaultHeader
											content="Kampanye"
											fontSize="18px"
											marginBottom="0"
										/>
									</Column>
								</Row>
								{/* <Row columns="3">
									<Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultProgressBar
												percent={
													dashboardRes?.data
														?.totalOngoingCampaign
														?.percentage
												}
												label="Berlangsung"
												value={
													dashboardRes?.data
														?.totalOngoingCampaign
														?.amount
												}
												size="tiny"
												bgColor="#ffc935"
											/>
										)}
									</Column> */}
									{/* <Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultProgressBar
												percent={
													dashboardRes?.data
														?.totalSuccessCampaign
														?.percentage
												}
												label="Sukses"
												value={
													dashboardRes?.data
														?.totalSuccessCampaign
														?.amount
												}
												size="tiny"
												bgColor="#8875ff"
											/>
										)}
									</Column>
									<Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultProgressBar
												percent={
													dashboardRes?.data
														?.totalFailedCampaign
														?.percentage
												}
												label="Gagal"
												value={
													dashboardRes?.data
														?.totalFailedCampaign
														?.amount
												}
												size="tiny"
												bgColor="#00d2ff"
											/>
										)}
									</Column>
								</Row> */}
								<br />
								<br />
								<br />
								<br />
								{/* <Row columns="3">
									<Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label={
													dashboardRes.data
														.totalCampaign
												}
												value="Total Kampanye"
												labelSize="25px"
												valueSize="15px"
											/>
										)}
									</Column>
									<Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label={getInTrillionNumbers(
													dashboardRes.data
														.totalCampaignRemaining
												)}
												tooltip={{
													value: dashboardRes.data
														.totalCampaignRemaining,
													isCurrency: true,
												}}
												value="Total Sisa Kampanye"
												labelSize="25px"
												valueSize="15px"
											/>
										)}
									</Column>
									<Column>
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label={getInTrillionNumbers(
													dashboardRes.data
														.totalUserDeposit
												)}
												tooltip={{
													value: dashboardRes.data
														.totalUserDeposit,
													isCurrency: true,
												}}
												value="Total Balance Lender"
												labelSize="25px"
												valueSize="15px"
											/>
										)}
									</Column>
								</Row> */}
							</Grid>
						</CardDashboard>
					</Column>
					{/* <Column width={7}>
						<CardDashboard>
							<Grid>
								<Row>
									<Column>
										<DefaultHeader
											content="Tingkat Keberhasilan"
											fontSize="18px"
											marginBottom="0"
										/>
									</Column>
								</Row>
								<Row columns="3">
									<Column verticalAlign="middle">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="TKB90"
												value={dashboardRes.data.tkb90}
												valueSize="25px"
												valueColor="#5966e8"
												isPercentage
												isNotRoundUp
												isBold
											/>
										)}
									</Column>
									<Column verticalAlign="middle">
										{isDashboardLoading ? (
											<DefaultPlaceholder />
										) : (
											<DefaultStatistic
												label="TKBtotal"
												value={
													dashboardRes.data.tkbTotal
												}
												valueSize="25px"
												valueColor="#6fa2ff"
												isPercentage
												isNotRoundUp
												isBold
											/>
										)}
									</Column>
									<Column>
										<Grid>
											<Row columns="1">
												<Column>
													{isDashboardLoading ? (
														<DefaultPlaceholder />
													) : (
														<DefaultStatistic
															label="NPLTotal"
															value={
																dashboardRes
																	.data
																	.nplTotal
															}
															valueSize="25px"
															valueColor="#7ca80e"
															isPercentage
															isNotRoundUp
															isBold
														/>
													)}
												</Column>
												<Column>
													{isDashboardLoading ? (
														<DefaultPlaceholder />
													) : (
														<DefaultStatistic
															label="NPL90"
															value={
																dashboardRes
																	.data.npl90
															}
															valueSize="25px"
															valueColor="#c4ccd6"
															isPercentage
															isNotRoundUp
															isBold
														/>
													)}
												</Column>
											</Row>
										</Grid>
									</Column>
								</Row>
							</Grid>
						</CardDashboard>
					</Column> */}
				</Row>
			</Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
