import React, { Component } from "react";
import jQuery from 'jquery';


class Header extends Component {

	render() {
		return (
			<nav className="navbar nabvar-default">
				<div className="container-fluid">
					<p className="navbar-brand">My Links</p>
					<ul className="navbar nabvar-nav">
						<li>Home</li>
						<li>Links</li>
						<li>About</li>
					</ul>
				</div>
			</nav>
		);
	}

}

export default Header