import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

import reducer from "./reducers";

const rootReducer = combineReducers({
	form: formReducer,
	reducer,
});

export default function store() {
	const store = createStore(rootReducer, applyMiddleware(thunk));

	return store;
}
