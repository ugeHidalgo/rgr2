import React,{Component} from 'react';
import Header from '../common/header/header';
import LinksList from "../linksList/linksList";

import jQuery from 'jquery';

let $=jQuery;

class Main extends Component {

	render () {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<LinksList />
				</div>
			</div>
		)
	}
};

export default Main