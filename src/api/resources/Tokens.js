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

export function Tokens() {
	const baseURL = "/v1/tokens";
    const operations = ["get", "capture"];

	let ret = {
		validateTokenAdmin: (data, config) => {
            return executeRequest(
                "POST",
                baseURL + "/admin/validate",
                data,
                config
            )
        },
    }

	ret = mixin(ret, operations);
	return ret;
}
