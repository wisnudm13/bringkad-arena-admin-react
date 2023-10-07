// import { lazy } from "react";
// const Dashboard = lazy(() => import("../pages/Dashboard"));

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

// export default [
// 	{
// 		exact: true,
// 		path: "/dashboard",
// 		Element: Dashboard,
// 		id: "dashboard",
// 		name: "Dashboard",
// 		permission: "VIEW_DASHBOARD",
// 		breadcrumb: [],
// 		sidebarMenu: {
// 			icon: "dashboard",
// 			image: DashboardIcon,
// 		},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/notifications",
// 		Element: Notifications,
// 		id: "notifications",
// 		name: "Notifications",
// 		permission: "VIEW_NOTIFICATIONS",
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/partner/details/:id",
// 		Element: PartnerDetail,
// 		id: "partnerDetails",
// 		permission: "PARTNER-DETAIL-VIEW_ALL",
// 		breadcrumb: [
// 			{ name: "partner", link: "/partner/" },
// 			{ name: "partner details", link: "/partner/details" },
// 		],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/borrower",
// 		Element: ListBorrower,
// 		id: "listBorrower",
// 		name: "List Borrower",
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "group", image: ListBorrowerIcon },
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/borrower-lite",
// 		Element: ListBorrowerLite,
// 		id: "listBorrowerLite",
// 		name: "List Borrower (Lite)",
// 		breadcrumb: [],
// 		subMenu: [],
// 		sidebarMenu: { icon: "group", image: ListBorrowerIcon },
// 	},
// 	{
// 		exact: true,
// 		path: "/borrower-lite/form",
// 		Element: BorrowerLiteForm,
// 		id: "listBorrowerLite",
// 		name: "List Borrower (Lite)",
// 		breadcrumb: [],
// 		subMenu: [],
// 		sidebarMenu: {},
// 	},
// 	{
// 		exact: true,
// 		path: "/borrower/:id",
// 		Element: ListBorrowerDetail,
// 		id: "listBorrowerDetail",
// 		name: "Detail Borrower",
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/lite-borrower/:id",
// 		Element: LiteBorrowerDetail,
// 		id: "liteBorrowerDetail",
// 		name: "Detail Lite Borrower",
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	//facility
// 	{
// 		exact: true,
// 		path: "/facility/create/:slug",
// 		Element: FacilityCreate,
// 		id: "facilityCreate",
// 		name: "Fasilitas",
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: {},
// 		path: {},
// 		queryParams: {
// 			keywords: "",
// 			product_id: "",
// 			facility_status: "",
// 		},
// 		Element: {},
// 		id: "facility",
// 		name: "Fasilitas",
// 		permission: [
// 			"FASILITAS-FACILITY_LIST-VIEW_ALL",
// 			"FASILITAS-FACILITY_LIST-VIEW_SELECTED",
// 		],
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "file alternate outline", image: FacilityIcon },
// 		subMenu: [
// 			{
// 				exact: true,
// 				path: "/facility/list",
// 				queryParams: {
// 					keywords: "",
// 					product_id: "",
// 					facility_status: "",
// 				},
// 				Element: FacilityList,
// 				id: "facilityList",
// 				name: "General",
// 				permission: [
// 					"FASILITAS-FACILITY_LIST-VIEW_ALL",
// 					"FASILITAS-FACILITY_LIST-VIEW_SELECTED",
// 				],
// 				breadcrumb: [
// 					{ name: "facility", link: "/facility/" },
// 					{ name: "facility details", link: "/facility/details" },
// 				],
// 				sidebarMenu: {},
// 			},
// 			{
// 				exact: false,
// 				path: "/facility/cash-loan/list",
// 				queryParams: {
// 					keywords: "",
// 					product_id: "",
// 					facility_status: "",
// 				},
// 				Element: CashLoanList,
// 				id: "cashLoanList",
// 				name: "Pinjaman Tunai",
// 				permission: [
// 					"FASILITAS-FACILITY_LIST-VIEW_ALL",
// 					"FASILITAS-FACILITY_LIST-VIEW_SELECTED",
// 				],
// 				breadcrumb: [
// 					{
// 						name: "cash loan",
// 						link: "/facility/cash-loan/",
// 					},
// 					{
// 						name: "cash loan details",
// 						link: "/facility/cash-loan/details",
// 					},
// 				],
// 				sidebarMenu: {},
// 			},
// 		],
// 	},
// 	{
// 		exact: true,
// 		path: "/facility/details/:id",
// 		Element: FacilityDetails,
// 		id: "facilityDetails",
// 		name: "Detail Fasilitas",
// 		permission: [
// 			"FASILITAS-FACILITY_DETAIL-REJECT_FACILITY_ALL",
// 			"FASILITAS-END_FACILITY_ALL",
// 			"FASILITAS-EDIT_END_FACILITY_DATE_ALL",
// 		],
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/facility/cash-loan/details/:id",
// 		Element: CashLoanDetails,
// 		id: "cashLoanDetails",
// 		name: "Detail Pinjaman Tunai",
// 		permission: [
// 			"FASILITAS-FACILITY_DETAIL-REJECT_FACILITY_ALL",
// 			"FASILITAS-END_FACILITY_ALL",
// 			"FASILITAS-EDIT_END_FACILITY_DATE_ALL",
// 		],
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/facility/details/aksesibilitas/:productId/:id/",
// 		Element: Accessibility,
// 		id: "accessibility",
// 		name: "Aksesibilitas",
// 		permission: [
// 			"FASILITAS-AKSESIBILITAS_(FASILITAS)-ASSIGN_ALL",
// 			"FASILITAS-AKSESIBILITAS_(FASILITAS)-ASSIGN_SELECTED",
// 			"FASILITAS-AKSESIBILITAS_(FASILITAS)-VIEW_ALL",
// 			"FASILITAS-AKSESIBILITAS_(FASILITAS)-VIEW_SELECTED",
// 		],
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	// DISBURSEMENT
// 	// {
// 	// 	exact: true,
// 	// 	path: "/disburse",
// 	// 	Element: ListDisburse,
// 	// 	id: "listDisburse",
// 	// 	name: "Pinjaman",
// 	// 	permission: "VIEW_LIST_DISBURSE",
// 	// 	breadcrumb: [],
// 	// 	sidebarMenu: { icon: "money bill alternate outline" },
// 	// 	subMenu: [],
// 	// },
// 	{
// 		exact: true,
// 		path: "/disbursement/create",
// 		Element: DisburseCreation,
// 		id: "disburseCreation",
// 		permission: [
// 			"PINJAMAN-PINJAMAN_LIST-VIEW_ALL",
// 			"PINJAMAN-PINJAMAN_LIST-VIEW_SELECTED",
// 		],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/facility/create/:slug",
// 		Element: FacilityCreate,
// 		id: "facilityCreate",
// 		name: "Fasilitas",
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/disbursement/details/:id",
// 		Element: DisbursementDetail,
// 		id: "disbursementDetails",
// 		name: "Detail Pinjaman",
// 		permission: "VIEW_DISBURSEMENT_DETAILS",
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/disbursement/cash-loan/details/:id",
// 		Element: DisbursementCashLoanDetail,
// 		id: "disbursementCashLoanDetails",
// 		name: "Detail Pinjaman Tunai",
// 		permission: "VIEW_DISBURSEMENT_DETAILS",
// 		breadcrumb: [],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/disbursement/list",
// 		Element: DisbursementList,
// 		id: "disbursementList",
// 		name: "Pinjaman",
// 		permission: [
// 			"PINJAMAN-PINJAMAN_LIST-VIEW_ALL",
// 			"PINJAMAN-PINJAMAN_LIST-VIEW_SELECTED",
// 		],
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "clipboard list", image: LoanIcon },
// 		subMenu: [
// 			{
// 				exact: false,
// 				path: "/disbursement/list",
// 				queryParams: {
// 					keywords: "",
// 					product_id: "",
// 					facility_status: "",
// 				},
// 				Element: DisbursementList,
// 				id: "disbursementList",
// 				name: "General",
// 				permission: [
// 					"PINJAMAN-PINJAMAN_LIST-VIEW_ALL",
// 					"PINJAMAN-PINJAMAN_LIST-VIEW_SELECTED",
// 				],
// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 			{
// 				exact: false,
// 				path: "/disbursement/cash-loan/list",
// 				queryParams: {
// 					keywords: "",
// 					product_id: "",
// 					facility_status: "",
// 				},
// 				Element: DisbursementCashLoanList,
// 				id: "cashLoanList",
// 				name: "Pinjaman Tunai",
// 				permission: [
// 					"PINJAMAN-PINJAMAN_LIST-VIEW_ALL",
// 					"PINJAMAN-PINJAMAN_LIST-VIEW_SELECTED",
// 				],
// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 		],
// 	},
// 	{
// 		exact: {},
// 		path: {},
// 		Element: {},
// 		id: "underwritingStandard",
// 		name: "Underwriting Standard",
// 		permission: [
// 			"UNDERWRITING_STANDARD-PINJAMAN_BISNIS-VIEW_ALL",
// 			"UNDERWRITING_STANDARD-PINJAMAN_ONLINE_MERCHANT-VIEW_ALL",
// 			"UNDERWRITING_STANDARD-PINJAMAN_KARYAWAN-VIEW_ALL",
// 			"UNDERWRITING_STANDARD-PINJAMAN_DISTRIBUTOR_/_BUYER-VIEW_ALL",
// 			"UNDERWRITING_STANDARD-PINJAMAN_LOAN_PURCHASE-VIEW_ALL",
// 			"UNDERWRITING_STANDARD-PINJAMAN_INSTANT_FINANCING-VIEW_ALL",
// 			"UNDERWRITING_STANDARD-PINJAMAN_TUNAI-VIEW_ALL",
// 			"UNDERWRITING_STANDARD-RISK_UNDERWRITING-VIEW_ALL",
// 		],
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "clipboard list", image: UnderwritingIcon },
// 		subMenu: [
// 			{
// 				exact: true,
// 				path: "/underwriting-standard/business-loan",
// 				Element: USBusinessLoan,
// 				id: "businessLoanUnderwritingStandard",
// 				name: "Pinjaman Bisnis",
// 				permission: "UNDERWRITING_STANDARD-PINJAMAN_BISNIS-VIEW_ALL",

// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 			{
// 				exact: true,
// 				path: "/underwriting-standard/online-merchant",
// 				Element: USOnlineMerchant,
// 				id: "onlineMerchantUnderwritingStandard",
// 				name: "Pinjaman Online Merchant Financing",
// 				permission:
// 					"UNDERWRITING_STANDARD-PINJAMAN_ONLINE_MERCHANT-VIEW_ALL",

// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 			{
// 				exact: true,
// 				path: "/underwriting-standard/employee-loan",
// 				Element: USEmployeeLoan,
// 				id: "employeeLoanUnderwritingStandard",
// 				name: "Pinjaman Karyawan",
// 				permission: "UNDERWRITING_STANDARD-PINJAMAN_KARYAWAN-VIEW_ALL",
// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 			{
// 				exact: true,
// 				path: "/underwriting-standard/distributor-financing",
// 				Element: USDistributorFinancingLoan,
// 				id: "distributorFinancingUnderwritingStandard",
// 				name: "Pinjaman Distributor/Buyer FInancing",
// 				permission:
// 					"UNDERWRITING_STANDARD-PINJAMAN_DISTRIBUTOR_/_BUYER-VIEW_ALL",
// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 			{
// 				exact: true,
// 				path: "/underwriting-standard/loan-purchase",
// 				Element: USLoanPurchase,
// 				id: "loanPurchaseUnderwritingStandard",
// 				name: "Pinjaman Loan Purchase Financing",
// 				permission:
// 					"UNDERWRITING_STANDARD-PINJAMAN_LOAN_PURCHASE-VIEW_ALL",
// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 			{
// 				exact: true,
// 				path: "/underwriting-standard/paylater-bisnis",
// 				Element: USInstantFinancingLoan,
// 				id: "instantFinancingUnderwritingStandard",
// 				name: "Pinjaman PayLater Bisnis",
// 				permission:
// 					"UNDERWRITING_STANDARD-PINJAMAN_INSTANT_FINANCING-VIEW_ALL",
// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 			{
// 				exact: true,
// 				path: "/underwriting-standard/cash-loan",
// 				Element: USCashLoan,
// 				id: "cashLoanUnderwritingStandard",
// 				name: "Pinjaman Tunai",
// 				permission: "UNDERWRITING_STANDARD-PINJAMAN_TUNAI-VIEW_ALL",
// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 			{
// 				exact: true,
// 				path: "/underwriting-standard/risk",
// 				Element: USRisk,
// 				id: "riskUnderwritingStandard",
// 				name: "Risk",
// 				permission: "UNDERWRITING_STANDARD-RISK_UNDERWRITING-VIEW_ALL",
// 				breadcrumb: [],
// 				sidebarMenu: {},
// 			},
// 		],
// 	},
// 	{
// 		exact: true,
// 		path: "/partner/list",
// 		Element: ListPartner,
// 		id: "list-partner",
// 		name: "List Partner",
// 		permission: [
// 			"PARTNER-LIST_BORROWER-VIEW_ALL",
// 			"PARTNER-LIST_BORROWER-VIEW_SELECTED",
// 		],
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "users", image: ListPartnerIcon },
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/partner/create",
// 		Element: CreatePartner,
// 		id: "partnerDetails",
// 		permission: ["PARTNER-DETAIL-VIEW_ALL", "PARTNER-DETAIL-VIEW_SELECTED"],
// 		breadcrumb: [
// 			{ name: "partner", link: "/partner/" },
// 			{ name: "partner details", link: "/partner/details" },
// 		],
// 		sidebarMenu: {},
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/setting/accessmapping",
// 		Element: AccessMapping,
// 		id: "accessMapping",
// 		name: "Access Mapping",
// 		permission: "SETTING-ACCESS_MAPPING-VIEW_ALL",
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "setting", image: SettingIcon },
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/setting/campaign",
// 		Element: CampaignSetting,
// 		id: "campaignSetting",
// 		name: "Campaign Setting",
// 		permission: null,
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "setting", image: SettingIcon },
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/setting/productaccess",
// 		Element: ProductAccess,
// 		id: "productAccess",
// 		name: "Product Access",
// 		permission: [
// 			"SETTING-PRODUCT_ACCESS-VIEW_ALL",
// 			"SETTING-PRODUCT_ACCESS-ALL",
// 		],
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "setting", image: SettingIcon },
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/setting/accountlistgroup",
// 		Element: AccountListGroup,
// 		id: "accountListGroup",
// 		name: "Account List and Group",
// 		permission: [
// 			"SETTING-ACCOUNT_LIST_AND_GROUP-VIEW_ALL",
// 			"SETTING-ACCOUNT_LIST_AND_GROUP-ALL",
// 		],
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "setting", image: SettingIcon },
// 		subMenu: [],
// 	},
// 	{
// 		exact: true,
// 		path: "/setting/account",
// 		Element: AccountSetting,
// 		id: "accountSetting",
// 		name: "Pengaturan Akun",
// 		permission: "SETTING-PENGATURAN_AKUN-VIEW_ALL",
// 		breadcrumb: [],
// 		sidebarMenu: { icon: "setting", image: SettingIcon },
// 		subMenu: [],
// 	},
// ];
