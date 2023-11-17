import React from "react";
import { Table, Loader, Grid, Menu } from "semantic-ui-react";
import PropTypes from "prop-types";

import { DefaultPagination } from "../Pagination";
import { NumberFormater, DateFormater } from "../../utilities/dataFormatter";
import styled from "styled-components";

import {
	StyledTable,
	StyledScreeningTable,
	StyledScreeningGrid,
	StyledTableFooter,
} from "./index-styles";
import { DefaultDropdown } from "components/Dropdown";

const StyledDiv = styled.div`
	&& {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&& > p {
		margin: 0 10px 0 0;
	}
`;

const DefaultTable = ({
	isLoading,
	tableRows,
	compact,
	collapsing,
	pageOptions,
	showTotalData,
	handlePaginationChange,
	isClickable = false,
	...props
}) => {
	const { headerRows, bodyRows } = tableRows;
	const isEmpty = bodyRows.length === 0;

	return (
		<StyledTable
			compact={compact}
			collapsing={collapsing}
			selectable={bodyRows && bodyRows.length === 0 ? false : true}
			{...props}
		>
			<Table.Header>
				<Table.Row>
					{headerRows.map((item) => {
						return (
							<Table.HeaderCell
								key={item.key}
								content={item.content}
								className="uppercase"
							/>
						);
					})}
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{isLoading || isEmpty ? (
					<Table.Row>
						<Table.Cell
							content={
								isLoading ? (
									<Loader
										content="Loading"
										active
										inline="centered"
									/>
								) : (
									"Tidak ada data"
								)
							}
							colSpan={headerRows.length}
							className="empty-cell"
						/>
					</Table.Row>
				) : (
					bodyRows &&
					bodyRows.map((body) => (
						<Table.Row
							verticalAlign={
								props.vertical_align_content
									? props.vertical_align_content
									: ""
							}
							onClick={
								isClickable && body.handleClick
									? body.handleClick
									: () => null
							}
						>
							{headerRows.map((header) => {
								if (
									["string", "number"].indexOf(
										typeof body[header.key]
									) > -1
								) {
									if (header.type === "currency") {
										return (
											<Table.Cell
												content={NumberFormater({
													value: body[header.key],
													isCurrency: true,
												})}
												className={
													body.isRead
														? "regular-cell"
														: ""
												}
												textAlign={header.textAlign}
												width={header.width}
											/>
										);
									}

									return (
										<Table.Cell
											content={body[header.key]}
											className={
												body.isRead
													? "regular-cell"
													: ""
											}
											textAlign={header.textAlign}
											width={header.width}
										/>
									);
								} else if (
									["boolean"].indexOf(
										typeof body[header.key]
									) > -1
								) {
									return (
										<Table.Cell
											content={
												body[header.key]
													? "Setuju"
													: "Menolak"
											}
											className="action-cell"
											textAlign={header.textAlign}
											width={header.width}
										/>
									);
								} else {
									return (
										<Table.Cell
											content={body[header.key]}
											className="action-cell"
											textAlign={header.textAlign}
											width={header.width}
										/>
									);
								}
							})}
						</Table.Row>
					))
				)}
			</Table.Body>
			{pageOptions && pageOptions.totalPages > 0 && (
				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan={headerRows.length}>
							<p style={{ float: "left" }}>
								{showTotalData && showTotalData()}
							</p>
							<DefaultPagination
								activePage={pageOptions.activePage}
								totalPages={pageOptions.totalPages}
								onPageChange={handlePaginationChange}
							/>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			)}
		</StyledTable>
	);
};

DefaultTable.defaultProps = {
	basic: "very",
	padded: "very",
};

DefaultTable.propTypes = {
	tableRows: PropTypes.object.isRequired,
	pageOptions: PropTypes.object,
	showTotalData: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	handlePaginationChange: PropTypes.func,
};

const BorderlessTable = ({
	isLoading,
	tableRows,
	compact,
	collapsing,
	emptyCellSize,
	...props
}) => {
	const { headerRows, bodyRows, footerRows } = tableRows;

	return (
		<StyledTable
			compact={compact}
			collapsing={collapsing}
			className="borderless"
			{...props}
		>
			<Table.Header>
				<Table.Row>
					{headerRows.map((item) => (
						<Table.HeaderCell
							key={item.key}
							content={item.content}
							className={item.styling}
						/>
					))}
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{bodyRows && bodyRows.length === 0 ? (
					<Table.Row>
						<Table.Cell
							content={
								isLoading ? (
									<Loader
										content="Loading"
										active
										inline="centered"
									/>
								) : (
									"Tidak ada data"
								)
							}
							colSpan={headerRows.length}
							className={`empty-cell ${emptyCellSize}`}
						/>
					</Table.Row>
				) : (
					bodyRows &&
					bodyRows.map((body) => {
						if (body === null) {
							return null;
						}
						return (
							<Table.Row {...props}>
								{headerRows.map((header) => {
									if (
										["string", "number"].indexOf(
											typeof body[header.key]
										) > -1
									) {
										if (header.key === "createdAt") {
											return (
												<Table.Cell
													content={DateFormater(
														body[header.key],
														true
													)}
												/>
											);
										} else {
											return (
												<Table.Cell
													content={body[header.key]}
													style={{
														whiteSpace: "pre-wrap",
													}}
													width={header.bodyCellWidth}
												/>
											);
										}
									} else if (
										["boolean"].indexOf(
											typeof body[header.key]
										) > -1
									) {
										return (
											<Table.Cell
												content={
													body[header.key]
														? "Setuju"
														: "Menolak"
												}
											/>
										);
									} else {
										return (
											<Table.Cell
												content={body[header.key]}
											/>
										);
									}
								})}
							</Table.Row>
						);
					})
				)}
			</Table.Body>

			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan={headerRows.length}>
						{footerRows}
					</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>
		</StyledTable>
	);
};

BorderlessTable.defaultProps = {
	basic: "very",
	padded: "very",
};

BorderlessTable.propTypes = {
	tableRows: PropTypes.object.isRequired,
};

const ScreeningTable = ({
	isLoading,
	tableRows,
	compact,
	collapsing,
	pageOptions,
	showTotalData,
	handlePaginationChange,
	...props
}) => {
	const { headerRows, bodyRows } = tableRows;

	return (
		<Grid>
			<StyledScreeningGrid>
				<StyledScreeningTable
					compact={compact}
					collapsing={collapsing}
					selectable={
						bodyRows && bodyRows.length === 0 ? false : true
					}
					{...props}
				>
					<Table.Header>
						<Table.Row>
							{headerRows.map((item) => {
								return (
									<Table.HeaderCell
										key={item.key}
										content={item.content}
										className="uppercase"
									/>
								);
							})}
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{isLoading ? (
							<Table.Row>
								<Table.Cell
									content={
										isLoading ? (
											<Loader
												content="Loading"
												active
												inline="centered"
											/>
										) : (
											"Tidak ada data"
										)
									}
									colSpan={headerRows.length}
									className="empty-cell"
								/>
							</Table.Row>
						) : (
							bodyRows &&
							bodyRows.map((body) => (
								<Table.Row
									verticalAlign={
										props.vertical_align_content
											? props.vertical_align_content
											: ""
									}
								>
									{headerRows.map((header) => {
										if (
											["string", "number"].indexOf(
												typeof body[header.key]
											) > -1
										) {
											return (
												<Table.Cell
													content={body[header.key]}
												/>
											);
										} else if (
											["boolean"].indexOf(
												typeof body[header.key]
											) > -1
										) {
											return (
												<Table.Cell
													content={
														body[header.key]
															? "Setuju"
															: "Menolak"
													}
													className="action-cell"
												/>
											);
										} else {
											return (
												<Table.Cell
													content={body[header.key]}
													className="action-cell"
												/>
											);
										}
									})}
								</Table.Row>
							))
						)}
					</Table.Body>
				</StyledScreeningTable>
			</StyledScreeningGrid>
			{pageOptions && pageOptions.totalPages > 0 && (
				<StyledTableFooter>
					<Table.Row>
						<Table.HeaderCell
							colSpan={headerRows.length}
							style={{ width: "100vw" }}
						>
							<Menu
								floated="left"
								style={{ border: "none", boxShadow: "none" }}
							>
								{props.rowsPerPage && (
									<StyledDiv>
										<p>Rows per page</p>
										<div style={{ marginRight: "10px" }}>
											<DefaultDropdown
												name="perPage"
												value={pageOptions.perPage}
												onChange={
													props.handleRowsPerPageChange
												}
												options={props.rowsOptions}
											/>
										</div>
										<p>
											{showTotalData && showTotalData()}
										</p>
									</StyledDiv>
								)}
							</Menu>
							<DefaultPagination
								activePage={pageOptions.activePage}
								totalPages={pageOptions.totalPages}
								onPageChange={handlePaginationChange}
							/>
						</Table.HeaderCell>
					</Table.Row>
				</StyledTableFooter>
			)}
		</Grid>
	);
};

ScreeningTable.defaultProps = {
	basic: "very",
	padded: "very",
};

ScreeningTable.propTypes = {
	tableRows: PropTypes.object.isRequired,
	pageOptions: PropTypes.object,
	showTotalData: PropTypes.func,
	handlePaginationChange: PropTypes.func,
};

export { DefaultTable, BorderlessTable, ScreeningTable };
