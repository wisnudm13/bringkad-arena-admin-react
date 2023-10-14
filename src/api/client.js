import axios from "axios";
import qs from "qs";
import { clone } from "ramda";

/**
 * Wraps the http client, handles request parameters, populates request headers,
 * handles response
 * @param  {String}		httpMethod			HTTP Method GET/POST
 * @param  {String}		path				url endpoint
 * @param  {Object}		data				Payload for HTTP Request
 * @param  {Object}		httpOptionsParam	Configuration parameters
 */

export function invoke(
	httpMethod,
	path,
	data,
	httpOptionsParam,
	signal = null
) {
	let requestData = data;

	if (httpMethod === "GET") {
		// Format object parameters into GET request query string
		if (requestData) {
			Object.keys(requestData).forEach(
				(key) =>
					(requestData[key] === "" ||
						"undefined" === typeof requestData[key]) &&
					delete requestData[key]
			);
			path = path + "?" + qs.stringify(requestData);
			requestData = "";
		}
	}

	let httpOptions = {};

	if (httpOptionsParam) {
		httpOptions = clone(httpOptionsParam);
		if (!httpOptions.headers) {
			httpOptions.headers = {};
		}
		httpOptions.signal = signal;
		httpOptions.url = path;
		httpOptions.method = httpMethod;

		if (!httpOptions.headers.Accept) {
			httpOptions.headers.Accept = "application/json";
		}

		if (!httpOptions.headers["Content-Type"]) {
			httpOptions.headers["Content-Type"] = "application/json";
		}

		if (httpMethod !== "GET") {
			httpOptions.data = data;
		}
	}

	return axios(httpOptions);
}
