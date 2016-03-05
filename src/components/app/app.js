import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link} from 'react-router';

import Header from '../common/header/header';
import Footer from '../common/footer/footer';

import jQuery from 'jquery';
import './app.css';

let $=jQuery;

class App extends React.Component {

	render () {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					{this.props.children}
				</div>
				<Footer />
			</div>
		)
	}
};

export default App
