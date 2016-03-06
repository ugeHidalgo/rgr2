
import React from "react";
import {
		Router,
		Route,
		IndexRoute
	} from "react-router";

import App from "./components/app/app";
import Home from "./components/homepage/homepage";
import AthletesList from "./components/athlete/athletesList";
import ManageAthleteForm from "./components/athlete/manageAthleteForm";
import CompetitionsList from "./components/competitionsList/competitionsList";
import About from "./components/common/about";
import NotFound from "./components/common/notfoundpage";

var routes = (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/homepage" component={Home}/>
			<Route path="/athletesList" component={AthletesList}/>
			<Route path='/manageAthleteForm/:dni' component={ManageAthleteForm}/>
			<Route path="/competitionslist" component={CompetitionsList}/>
			<Route path="/about" component={About}/>
		</Route>
	</Router>
);

export default routes