import React from "react";
import { Link } from "react-router";
import './header.css';
import jQuery from 'jquery';


class Header extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navBar-header">
						<a className="navbar-brand">My Links</a>
					</div>
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

export default Header