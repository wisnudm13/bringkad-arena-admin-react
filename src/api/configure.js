export const defaultApi = {
	schema: "https",
	baseURL: process.env.REACT_APP_API_URL || false,
	port: "",
	headers: {},
	signal: null,
	timeout: 60000,
};