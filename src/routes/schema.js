import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const User = lazy(() => import("../pages/User"));
const Admin = lazy(() => import("../pages/Admin"));
const Facility = lazy(() => import("../pages/Facility"));
const Order = lazy(() => import("../pages/Order"))
const FacilityItem = lazy(() => import("../pages/FacilityItem"))


// const ListBorrower = lazy(() => import("../pages/ListBorrower"));
// const ListBorrowerLite = lazy(() => import("../pages/ListBorrowerLite/index"));
// const BorrowerLiteForm = lazy(() =>
// 	import("../pages/ListBorrowerLite/BorrowerForm/index.js")
// );
// const ListBorrowerDetail = lazy(() => import("../pages/ListBorrower/Detail"));
// const LiteBorrowerDetail = lazy(() =>
// 	import("../pages/ListBorrowerLite/Detail")
// );

// const FacilityList = lazy(() => import("../pages/Facility/FacilityList"));
// const FacilityCreate = lazy(() => import("../pages/Facility/FacilityCreate"));

// const FacilityDetails = lazy(() => import("../pages/Facility/FacilityDetails"));
// const Accessibility = lazy(() =>
// 	import("../pages/Facility/FacilityDetails/Accessibility")
// );

// const DisbursementList = lazy(() => import("../pages/DisbursementList"));
// const DisbursementDetail = lazy(() =>
// 	import("../pages/Disbursement/DisbursementDetail")
// );
// const DisbursementCashLoanList = lazy(() =>
// 	import("pages/Disbursement/CashLoan/CashLoanList")
// );
// const DisbursementCashLoanDetail = lazy(() =>
// 	import("pages/Disbursement/CashLoan/CashLoanDetails")
// );

// const USBusinessLoan = lazy(() =>
// 	import("../pages/UnderwritingStandard/BusinessLoan")
// );
// const USOnlineMerchant = lazy(() =>
// 	import("../pages/UnderwritingStandard/OnlineMerchant")
// );
// const USEmployeeLoan = lazy(() =>
// 	import("../pages/UnderwritingStandard/EmployeeLoan")
// );
// const USDistributorFinancingLoan = lazy(() =>
// 	import("../pages/UnderwritingStandard/DistributorFinancingLoan")
// );
// const USLoanPurchase = lazy(() =>
// 	import("../pages/UnderwritingStandard/LoanPurchase")
// );
// const USInstantFinancingLoan = lazy(() =>
// 	import("../pages/UnderwritingStandard/InstantFinancingLoan")
// );
// const USCashLoan = lazy(() => import("../pages/UnderwritingStandard/CashLoan"));
// const USRisk = lazy(() => import("../pages/UnderwritingStandard/Risk"));

// const AccessMapping = lazy(() => import("../pages/AccessMapping"));
// const CampaignSetting = lazy(() => import("../pages/CampaignSetting"));
// const ProductAccess = lazy(() => import("../pages/ProductAccess"));
// const AccountListGroup = lazy(() => import("../pages/AccountListGroup"));
// const AccountSetting = lazy(() => import("../pages/AccountSetting"));
// // import Pengaturan from "../pages/Pengaturan";

// // import CreditCommitteeList from "../pages/CreditCommitteeList";
// const ListPartner = lazy(() => import("../pages/Partner/ListPartner"));

// const PartnerDetail = lazy(() => import("../pages/Partner/PartnerDetail"));

// // import ListDisburse from "../pages/Disbursement/ListDisburse";
// const DisburseCreation = lazy(() =>
// 	import("../pages/Disbursement/DisburseCreation")
// );
// const CreatePartner = lazy(() => import("../pages/Partner/CreatePartner"));

// const Notifications = lazy(() => import("../pages/Notifications"));

// const CashLoanList = lazy(() =>
// 	import("../pages/Facility/CashLoan/CashLoanList/index")
// );
// const CashLoanDetails = lazy(() =>
// 	import("../pages/Facility/CashLoan/CashLoanDetails/index")
// );

// import DashboardIcon from "../assets/icons/ic-dashboard.png";
// import ListBorrowerIcon from "../assets/icons/ic-borrower.png";
// import FacilityIcon from "../assets/icons/ic-fasilitas-docs.png";
// import LoanIcon from "../assets/icons/ic-pinjaman.png";
// import UnderwritingIcon from "../assets/icons/ic-underwriting.png";
// import ListPartnerIcon from "../assets/icons/ic-partner-white.png";
// import SettingIcon from "../assets/icons/icon-settings.png";

export default [
	{
		exact: true,
		path: "/dashboard",
		Element: Dashboard,
		id: "dashboard",
		name: "Dashboard",
		// permission: "VIEW_DASHBOARD",
		breadcrumb: [],
		sidebarMenu: {
			icon: "dashboard",
		},
		subMenu: [],
	},
    {
		exact: true,
		path: "/user",
		Element: User,
		id: "user",
		name: "User",
		// permission: "VIEW_DASHBOARD",
		breadcrumb: [],
		sidebarMenu: {
			icon: "users",
		},
		subMenu: [],
	},
    {
		exact: true,
		path: "/admin",
		Element: Admin,
		id: "admin",
		name: "Admin",
		// permission: "VIEW_DASHBOARD",
		breadcrumb: [],
		sidebarMenu: {
			icon: "user",
		},
		subMenu: [],
	},
    {
		exact: true,
		path: "/facility",
		Element: Facility,
		id: "facility",
		name: "Facility",
		// permission: "VIEW_DASHBOARD",
		breadcrumb: [],
		sidebarMenu: {
			icon: "building",
		},
		subMenu: [],
	},
	{
		exact: true,
		path: "/facility-item",
		Element: FacilityItem,
		id: "facilityItem",
		name: "Facility Item",
		breadcrumb: [],
		subMenu: [],
		sidebarMenu: {
			icon: "ordered list"
		},
	},
    {
		exact: true,
		path: "/order",
		Element: Order,
		id: "order",
		name: "Order",
		// permission: "VIEW_DASHBOARD",
		breadcrumb: [],
		sidebarMenu: {
			icon: "clipboard list",
		},
		subMenu: [],
	},
];
