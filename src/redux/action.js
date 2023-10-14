import humps from "humps";

import localStorage from "../utilities/localStorage";
import apiSdk from "./index"

export const fetch = (params) => {
	return (dispatch) => {
		const { sdk, method, uploader, id, data, key } = params;
		const { parent, child } = sdk;
        console.log(apiSdk)
        console.log(parent)
		const sdkParent = apiSdk[parent];
        console.log(sdkParent)
		const sdkChild = sdkParent[child];
		let authToken = false;

		const contentType = params.formData
			? "multipart/form-data"
			: "application/json";
		if (params.isPartner) {
			authToken = {
				headers: {
					Authorization: `Bearer ${localStorage().get(
						"partnerToken"
					)}`,
					"Content-Type": contentType,
				},
			};
		} else {
			authToken = {
				headers: {
					Authorization: `Bearer ${localStorage().get("userToken")}`,
					"Content-Type": contentType,
				},
			};
		}

		let executeHttp;
		if (uploader) {
			authToken.headers["Content-Type"] = "multipart/form-data";
			if (id) {
				executeHttp = sdkChild(id, data, authToken);
			} else {
				executeHttp = sdkChild(data, authToken);
			}
		} else {
			if (method === "PUT") {
				executeHttp = sdkChild(
					id,
					humps.decamelizeKeys(data),
					authToken
				);
			} else if (id) {
				executeHttp = sdkChild(
					id,
					humps.decamelizeKeys(data),
					authToken
				);
			} else if (params.formData) {
				executeHttp = sdkChild(id, data, authToken);
			} else {
				executeHttp = sdkChild(humps.decamelizeKeys(data), authToken);
			}
		}

		return executeHttp
			.then((response) =>
				dispatch({
					key: key,
					type: response.status,
					data: humps.camelizeKeys(
						response.data.data ? response.data.data : response.data
					),
					message: response.data.message,
				})
			)
			.catch((error) => {
				dispatch({
					key: key,
					type: error?.response?.status || 500,
					data: humps.camelizeKeys(
						error?.response?.data || {
							message: "Something went wrong, try again later",
						}
					),
				});
			});
	};
};

export const clear = (params) => {
	return (dispatch) => {
		dispatch(params);
	};
};

export const handeRequest = (method, params = {}, slug, isClear = true) => {
	isClear && clear({ ...method, type: "clear" });
	fetch({
		...method,
		id: slug,
		data: params,
	});
};
