import React from "react";
import { Link } from "react-router";
import jQuery from 'jquery';

import "./footer.css";


class Footer extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-default navbar-bottom navbar-inner">
				<div id="footer-bar" className="container-fluid">
					<ul className="nav navbar-nav">
						<li><Link to='/homepage'>Home</Link></li>
						<li><Link to='/linkslist'>Links</Link></li>
						<li><Link to='/about'>About</Link></li>
					</ul>
				</div>
			</nav>
		);
	}

}

export default Footer