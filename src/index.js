import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Loader } from "semantic-ui-react";

import configureStore from "./redux/store";
import App from "./App";

import "./index.css";
import "semantic-ui-css/semantic.min.css";


const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={configureStore()}>
    <Suspense fallback={<Loader active inline="centered" />}>
			<App />
		</Suspense>
  </Provider>
);
