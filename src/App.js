import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./routes";
import routesSchema from "./routes/schema";

import Index from "./pages/Index";
import Login from "./pages/Login";
// import Page404 from "./pages/ErrorPage/Page404";
// import Page500 from "./pages/ErrorPage/Page500";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Index />} />
				<Route exact path="/login" element={<Login />} />

				{routesSchema.map((item) => {
					const { exact, path, Element, subMenu } = item;

					return subMenu.length === 0 ? (
						<Route
							exact={exact}
							path={path}
							element={
								<PrivateRoute>
									<Element />
								</PrivateRoute>
							}
						/>
					) : (
						subMenu.map((item) => {
							const { exact, path, Element } = item;
							return (
								<Route
									exact={exact}
									path={path}
									element={
										<PrivateRoute>
											<Element />
										</PrivateRoute>
									}
								/>
							);
						})
					);
				})}
				{/* <Route exact path="/500" element={<Page500 />} />
				<Route exact path="/404" element={<Page404 />} /> */}
			</Routes>
		</Router>
	);
};

export default App;
