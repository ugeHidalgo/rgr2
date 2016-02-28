import React from "react";
import { Link } from "react-router";
import jQuery from 'jquery';

import "./footer.css";

var emailLogo = require('../../../images/social/logo-email.svg');
var twitterLogo = require('../../../images/social/logo-twitter.svg');
var linkedinLogo = require('../../../images/social/logo-linkedin.svg');
var githubLogo = require('../../../images/social/logo-github.svg');


class Footer extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-default navbar-bottom navbar-inner">
				<div id="footer-bar" className="container-fluid">
					<ul className="nav navbar-nav">
						<li><a href='mailto:ugehidalgo@hotmail.com'>
								<img title="eMail" src={emailLogo} alt="eMail"
								 className="svg-icon"
								 width="16" height="16"/>
							</a>
						</li>
						<li><a href='https://twitter.com/ugehidalgo'>
								<img title="Twitter" src={twitterLogo} alt="twitter"
								className="svg-icon"
								 width="16" height="16"/>
							</a>
						</li>
						<li><a href='https://es.linkedin.com/in/ugehidalgo'>
								<img title="LinkedIn" src={linkedinLogo} alt="LinkedIn"
								 width="16" height="16"/>
							</a>
						</li>
						<li><a href='https://github.com/ugeHidalgo'>
								<img title="GitHub" src={githubLogo} alt="GitHub"
								 width="16" height="16"/>
							</a>
						</li>
					</ul>
				</div>
				<div className="container-fluid text-center">
					<p>@2016 ugeHidalgo</p>
				</div>
			</nav>
		);
	}

}

export default Footer