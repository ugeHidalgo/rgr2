import React, { Component } from "react";
import './header.css';
import jQuery from 'jquery';


class Header extends Component {

	render() {
		return (
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navBar-header">
						<a className="navbar-brand">My Links</a>
					</div>
					<ul className="nav navbar-nav">
						<li><a href='#'>Home</a></li>
						<li><a href='#'>Links</a></li>
						<li><a href='#'>About</a></li>
					</ul>
				</div>
			</nav>
		);
	}

}

export default Header