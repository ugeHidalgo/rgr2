import React from 'react';
import Router from 'react-router';
import AthleteForm from './athleteForm';
//var AuthorApi = require ('../../api/authorApi'); //en su lugar se usa el flux store y
//los dos siguientes requires
import AthleteActions from '../../actions/athletesActions';
import AthleteStore from '../../stores/athletesStore';

import Toastr from 'toastr';

const ManageAthleteForm = React.createClass ({

	getInitialState () {
		return {
			athlete: { _id: '', dni: '', firstName: '', lastName: '' },
			errors: {},
			dirty : false
		};
	},

	componentWillMount () {
		//Set the states before the render occurs.
		let athleteDni = this.props.params.dni; //Taken from the url params

		if (athleteDni){ //Uses the Author flux store to recover author´s data
			this.setState({athlete: AthleteStore.getAthleteByDni(athleteDni)});
		}
	},

	render () {
		// -----Called every time a key is pressed
				//also need to be added to the child component y authorForm
		return(
			<AthleteForm athlete={this.state.athlete}
				onChange={this.setAthleteState}
				onSave={this.saveAthlete}
				errors={this.state.errors}/>
		);
	}
});


export default ManageAthleteForm
