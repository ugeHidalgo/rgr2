import React from 'react';
import Router from 'react-router';
import AthleteForm from './athleteForm';
import AthletesApi from '../../api/athletesApi';
 
import ServerAthleteActions from '../../actions/athletesActions';
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

	setAthleteState (event) {
	//This function is called every time a key is pressed--->onChange
		let fieldName = event.target.name;
		let fieldValue = event.target.value;

		this.state.athlete[fieldName]=fieldValue;
		this.setState({dirty: true});
		return this.setState( {athlete: this.state.athlete});
	},

	athleteFormIsValid () {
		let formIsValid = true;
		this.state.errors = {}; //Clear errors

		if (this.state.athlete.dni.length < 1){
			this.state.errors.dni = 'Missing DNI.';
			formIsValid = false;
		}

		if (this.state.athlete.firstName.length < 3){
			this.state.errors.firstName = 'First name must be at least 3 characters';
			formIsValid = false;
		}

		if (this.state.athlete.lastName.length < 3){
			this.state.errors.lastName = 'Last name must be at least 3 characters';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveAthlete (event){
		event.preventDefault(); //To avoid submit the form when saving

		if(!this.athleteFormIsValid()) {
			return;
		}
		//AuthorApi.saveAuthor(this.state.author);
		if (this.state.athlete._id){
debugger;
			AthletesApi.updateAthlete(this.state.athlete);
		} else {
			//ServerAthleteActions.createAthlete(this.state.author);
			console.log ('manageAthleteForm: Athlete created!!');
		}
		Toastr.success('Athlete saved !!')
		//this.transitionTo('/athletesList'); //Redirige a la pantalla de athletas, requiere mixins Router.Navigation
		this.setState({dirty: false});
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
