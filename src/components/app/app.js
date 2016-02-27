import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link} from 'react-router';

import MainBar from '../common/mainbar';
import Header from '../common/header/header';
import LinksList from "../linksList/linksList";

import jQuery from 'jquery';
import './app.css';

let $=jQuery;

class App extends React.Component {

	render () {
		return (
			<div>
				<MainBar />
				<Header />
				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>
		)
	}
};

export default App


// <div className="container-fluid">
// 					<RouteHandler />
// 				</div>