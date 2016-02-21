import React, { Component } from "react";
import jQuery from 'jquery';


class LinksList extends Component {

	linksArray = [ 
	{
		_id: "1",
	  	title: "marca",
	  	description: "Diario marca",
	  	url: "http://www.marca.com"
	},{
		_id: "2",
	  	title: "ideal",
	  	description: "Diario ideal",
	  	url: "http://www.ideal.es"
	},{
		_id: "3",
	  	title: "UGR",
	  	description: "Universidad de Granada",
	  	url: "http://www.ugr.es"
	} ]

	render() {

		let row = this.linksArray.map(link => {
			return (
				<tr key={link._id}>
					<td>-</td>
					<td>{link._id}</td>
					<td><a href={link.url}>{link.title}</a></td>
					<td>{link.description}</td>
				</tr>
			)
		});

		return (
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th></th>
							<th>Id</th>
							<th>Title</th>
							<th>Descr.</th>
						</tr>
					</thead>
					<tbody>
						{row}
					</tbody>
				</table>
			</div>
		);
	}

}

export default LinksList