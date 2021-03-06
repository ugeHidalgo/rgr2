import React from "react";
import { Link } from "react-router";
import './header.css';
import jQuery from 'jquery';


class Header extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-default navbar-inner">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li><Link to='/homepage'>Home</Link></li>
						<li><a href='graphql'>GraphiQl</a></li>
						<li><Link to='/athletesList'>Athletes</Link></li>
						<li><Link to='/competitionsList'>Competitions</Link></li>
						<li><Link to='/about'>About</Link></li>
					</ul>
					<div className="navbar-right">
					<ul className="nav navbar-nav">
						<li><Link to='/homepage'>Login</Link></li>
						<li><Link to='/homepage'>Register</Link></li>
					</ul>
					</div> 
				</div>
			</nav> //navbar navbar-default navbar-inner
		);
	}
}

export default Header