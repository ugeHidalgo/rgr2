import React, { Component, PropTypes } from "react";
import './common.css';

class About extends Component {

	render () {
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">About...</div>
				<div className="about-panel-body-text">
					This application uses the following thecnologies :
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>NodeJS</li>
						<li>WebPack</li>
						<li>ES6</li>
						<li>Bootstrap</li>
						<li>GraphQl</li>
						<li>MongoDB</li>
					</ul>
				</div>
				<div className="panel-footer">
					<div className="about-footerText">
						<p>by Uge Hidalgo -> @ugeHidalgo / ugehidalgo@hotmail.com</p>
					</div>
				</div>
			</div>
		);
	}
}
export default About