import { executeRequest, executeHttp } from "../api";

function mixin(destObject, operations) {
	operations.forEach(function (property) {
		destObject[property] = restFunctions[property];
	});
	return destObject;
}

const restFunctions = {
	create: function create(data, config) {
		executeHttp("POST", this.baseURL, data, config);
	},
	get: function get(id, config) {
		executeHttp("GET", this.baseURL + id, {}, config);
	},
	list: function list(data, config) {
		if (typeof data === "function") {
			config = data;
			data = {};
		}
		executeHttp("GET", this.baseURL, data, config);
	},
	del: function del(id, config) {
		executeHttp("DELETE", this.baseURL + id, {}, config);
	},
};

export function Admins() {
	const baseURL = "/v1/admins";
    const operations = ["get", "capture"];

	let ret = {
		loginAdmin: (data, config) => {
            return executeRequest(
                "POST",
                baseURL + "/login",
                data,
                config
            )
        },
		adminList: (data, config) => {
			return executeRequest(
				"GET",
                baseURL + "/list",
                data,
                config
			)
		},
		getAdminData: (data, config) => {
			return executeRequest(
				"GET",
                baseURL + "/" + data.id,
                "",
                config
			)
		}
    }

	ret = mixin(ret, operations);
	return ret;
}
