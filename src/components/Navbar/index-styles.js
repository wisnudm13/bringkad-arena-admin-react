import { Menu, Segment } from "semantic-ui-react";
import styled from "styled-components";

export const DesktopSidebar = styled(Menu)`
	&.ui.vertical.menu {
		position: fixed;
		width: 260px;
		height: 100vh;
		background: linear-gradient(
			to bottom,
			#2a6dc4 1%,
			#054eac 47%,
			#01459f
		);
		border: none;
		border-radius: 0 0 30px;
		z-index: 1;
		overflow: auto;
	}

	&.ui.vertical.menu .item {
		font-family: Poppins-Regular;
		color: #ffffff;
		line-height: 22px;
		letter-spacing: -0.28px;
		padding: 16px 20px;
	}

	&.ui.vertical.menu .item:hover {
		color: #ffffff;
	}

	&.ui.vertical.menu .item:before {
		content: none;
	}

	&.ui.vertical.menu .item > i.icon,
	&.ui.vertical.menu .item > img {
		float: left;
		margin: 0 1em 1em 0;
	}

	&.ui.vertical.menu .ui.accordion .title:not(.ui) {
		font-family: Poppins-Regular;
		color: #ffffff;
		padding: 0;
	}

	&.ui.vertical.menu .ui.accordion .title:not(.ui) i.icon,
	&.ui.vertical.menu .ui.accordion .title:not(.ui) img {
		margin: 0 1em 1em 0;
	}

	&.ui.vertical.menu .ui.accordion .active.content .item {
		padding: 16px 0;
	}

	&.ui.vertical.menu .accordion.ui .item .title i.icon {
		display: none;
	}
`;

export const ContentContainer = styled(Segment)`
	&.ui.vertical.segment {
		position: fixed;
		width: 100%;
		height: 100%;
		background: #ffffff;
		overflow: scroll;
		overflow-x: hidden;
		padding: 0 0 0 260px;
	}

	& .ui.secondary.menu.navbar {
		margin: 0;
	}

	& .ui.secondary.menu.navbar .item {
		padding: 0;
		margin 30px;
	}

	& .ui.secondary.menu.navbar a.item:hover {
		background: none
	}

	& .ui.secondary.menu.navbar .item i.icon {
		margin: 0;
	}

	// &&& .ui.dropdown .menu > .item {
	// 	font-family: MuseoSansRounded-500;
	// 	font-size: 14px !important;
	// 	color: #4a4a4a !important;
	// 	line-height: 18px;
	// 	border-radius: 0;
	// }

	// & .ui.dropdown .scrolling.menu > .item.item.item {
	// 	border-top: 1px solid #d3d3d3;
	// }
`;

export const BellActiveWrapper = styled.div`
	position: relative;
	.red {
		position: absolute;
		width: 8px;
		height: 8px;
		background-color: red;
		border-radius: 50%;
		top: 0;
		right: 0;
	}
`;
