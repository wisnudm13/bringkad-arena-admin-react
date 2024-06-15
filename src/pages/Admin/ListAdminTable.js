import React from "react";

import { DefaultTable } from "../../components/Table";

const ListAdminTable = ({ handlePaginationChange, ...state }) => {
	const { listData, showTotalData, pageOptions, isListLoading, headers } =
		state;

	return (
		<DefaultTable
			isLoading={isListLoading}
			tableRows={{
				headerRows: headers,
				bodyRows: listData,
			}}
			showTotalData={showTotalData}
			pageOptions={pageOptions}
			handlePaginationChange={handlePaginationChange}
		/>
	);
};

export default ListAdminTable;
