
import React from "react";
import {
		Router,
		Route,
		hashHistory,
		IndexRoute
	} from "react-router";

import App from "./components/app/app";
import Home from "./components/homepage/homepage";
import LinksList from "./components/linksList/linksList";
import About from "./components/common/about";
import NotFound from "./components/common/notfoundpage";

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/homepage" component={Home}/>
			<Route path="/linkslist" component={LinksList}/>
			<Route path="/about" component={About}/>
		</Route>
	</Router>
);

export default routes