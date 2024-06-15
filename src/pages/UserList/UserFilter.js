import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import { debounce } from "lodash";
// import { SearchFilterInput } from "../../components/Input/Input";
import { FunctionButton } from "../../components/Button/Button";

const UserFilter = ({ onGetList, ...rest }) => {
	const [keywords, setkeywords] = useState("");
	const [anchorName, setAnchorName] = useState("");
	const navigate = useNavigate();
	// const roleName = useSelector(
	// 	(state) => state.reducer.user.profile?.data?.roleName
	// );

	const delayedkeywords = useRef(
		debounce((q) => {
			onGetList({
				keywords: q,
				page: 1,
			});
		}, 500)
	).current;

	const handleChangeFilterSearch = (e) => {
		setkeywords(e.target.value);
		delayedkeywords(e.target.value);
	};

	const handleAnchorNameChange = (e) => {
		setAnchorName(e.target.value);
		delayedkeywords(e.target.value);
	};

	return (
		<Grid columns="equal">
			{/* <Grid.Column>
				<SearchFilterInput
					name="search"
					placeholder="Cari"
					icon="search"
					iconPosition="left"
					clearable
					fluid
					value={keywords}
					onChange={handleChangeFilterSearch}
				/>
			</Grid.Column>
			<Grid.Column>
				<SearchFilterInput
					name="anchor"
					placeholder="Anchor Name"
					clearable
					fluid
					value={anchorName}
					onChange={handleAnchorNameChange}
				/>
			</Grid.Column> */}
			<Grid.Column>
                <FunctionButton
                    content="Add User"
                    color="teal"
                    onClick={() => navigate("/borrower-lite/form")}
                    style={{
                        float: "right",
                    }}
                />
			</Grid.Column>
		</Grid>
	);
};

export default UserFilter;
