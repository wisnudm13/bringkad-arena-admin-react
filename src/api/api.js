import { mergeDeepRight } from "ramda";
import { defaultApi } from "./configure";
import { invoke } from "./client";



export function executeRequest(method, path, data, httpOptions, signal = null) {
	httpOptions = httpOptions
		? mergeDeepRight(defaultApi, httpOptions)
		: defaultApi;

	return invoke(method, path, data, httpOptions, signal);
}

export function executeHttp(
	httpMethod,
	path,
	data,
	httpOptions,
	signal = null
) {
	if (!httpOptions) {
		httpOptions = defaultApi;
	} else {
		httpOptions = mergeDeepRight(
			httpOptions
		);
	}

	return invoke(httpMethod, path, data, httpOptions, signal);
}