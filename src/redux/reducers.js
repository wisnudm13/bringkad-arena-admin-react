import initialState from "./initialState";
import types from "./types";
// import localStorage from "../utilities/localStorage";

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case types.SUCCESS:
			return {
				...state,
				[action.key.group]: { [action.key.value]: { ...action } },
			};
		case types.CREATED:
			return {
				...state,
				[action.key.group]: { [action.key.value]: { ...action } },
			};
		case types.BAD_REQUEST:
			return {
				...state,
				[action.key.group]: { [action.key.value]: { ...action } },
			};
		case types.UNAUTHORIZED:
			// localStorage().remove("userToken");
			// localStorage().remove("userRole");
			// localStorage().remove("userPermission");
			// window.location.href = "/";
			return {
				...state,
				[action.key.group]: { [action.key.value]: { ...action } },
			};
		case types.FOBIDDEN:
			return {
				...state,
				[action.key.group]: { [action.key.value]: { ...action } },
			};
		case types.NOT_FOUND:
			return {
				...state,
				[action.key.group]: { [action.key.value]: { ...action } },
			};
		case types.UNPROCESSABLE_ENTITY:
			return {
				...state,
				[action.key.group]: { [action.key.value]: { ...action } },
			};
		case types.INTERNAL_SERVICE_ERROR:
			// window.location.href = "/500";
			return {
				...state,
				[action.key.group]: { [action.key.value]: { ...action } },
			};
		case types.CLEAR:
			return {
				...state,
				[action.key.group]: { [action.key.value]: "" },
			};
		case types.SHOW_ALERT:
			return {
				...state,
				notification: action.payload,
			};
		case types.HIDE_ALERT:
			return {
				...state,
				notification: {
					...state.notification,
					visible: false,
				},
			};
		default:
			return state;
	}
}
