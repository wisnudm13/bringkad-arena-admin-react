import React from "react";
import { Table, Grid } from "semantic-ui-react";
import styled from "styled-components";

export const StyledTable = styled(({ ...props }) => <Table {...props} />)`
	&.ui.table {
		font-family: Poppins-SemiBold;
		font-size: 14px;
		color: #4a4a4a;
		line-height: 1.29;
		letter-spacing: 0.19px;
	}

	&.ui.table thead tr th {
		font-family: Poppins-Regular;
		font-weight: normal;
		color: #5c5c5c;
		letter-spacing: 0.32px;
	}

	&.ui.table thead tr th.uppercase {
		text-transform: uppercase;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.93;
		letter-spacing: 0.32px;
		color: #5c5c5c;
	}

	&.ui.table tbody tr td.empty-cell {
		height: 300px;
		text-align: center;
	}

	&.ui.table tbody tr td.empty-cell.small {
		height: 100px;
		text-align: center;
	}

	&.ui.table tbody tr td.action-cell {
		width: 5%;
	}
	&.ui.table tbody tr td.regular-cell {
		font-family: Poppins-Regular;
	}

	&.ui.table tbody tr td.action-cell .ui.button {
		margin: 0 5px 0 0;
	}

	&.ui.table.borderless thead tr th {
		text-transform: uppercase;
		border-bottom: 0;
		vertical-align: top;
	}

	&.ui.table.borderless tfoot tr th {
		border-top: 0;
	}

	${(props) =>
		props.stickyFirstCol &&
		`
    &.ui.table tr td:first-child,
		&.ui.table tr th:first-child {
			position: sticky;
			left: 0;
			top: 0;
			background: #ffffff;
		}
  `}
`;

export const StyledScreeningTable = styled(StyledTable)`
	&.ui.table {
		white-space: nowrap;
	}
`;

export const StyledScreeningGrid = styled(Grid)`
	&& {
		width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
		margin: -1rem 1rem;
		padding: 0;
	}
`;

export const StyledTableFooter = styled(Table.Footer)`
	&& {
		padding: 2rem 1rem 0;
		width: 100%;
	}
	&& > tr {
		float: right;
	}
`;
