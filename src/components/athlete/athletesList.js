import React, { PropTypes } from "react";
import { Link } from "react-router";
import Relay from "react-relay";
import './athletesList.css';
import jQuery from 'jquery';
import AthletesApi from '../../api/athletesApi';
import AthletesStore from '../../stores/athletesStore';

//Esta función se usa para obtener todos los links del store
let _getAppState = () => {
     return {athletes : AthletesStore.getAll()};  
};

let _getSelectedAthlete = () => {
	return {athlete : AthletesStore.getSelectedAthlete()};  
};

class AthetesList extends React.Component {

    static propTypes = {
        limit: React.PropTypes.number
    };
        
    static defaultProps = {
        limit: 5
    };

	constructor(props){
        super(props);
        
        //Hay que leer los datos de los links de 
        //manera que al crear la clase ya se tengan los datos.
        this.state = _getAppState();
        
        //Se define la función que se asocia al evento onChange
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){

        AthletesApi.getAllAthletes();

        //Una vez mostrada la pantalla crea un evento que se lanze cuando haya un change
        AthletesStore.on('change',this.onChange);
    }

    componentWilUnmount() {

        //Quita el evento antes de dejar de mostrar la pantalla al salir de ella
        AthletesStore.removeListener('change',this.onChange);
    }
    
    //Este método detecta el event change y reresca el componente.
    onChange(){
        console.log ('- (5) athletesList component : Component has detected a change in the store.');
        this.setState(_getAppState());
    }

    getFooterCounter() {
    	if (this.props.limit<=this.state.athletes.length) {
    		return this.props.limit;
    	}
    	return this.state.athletes.length;
	}

	render() {

					//Para acceder al store del schema usaremos this.props (con relay)
		let row = this.state.athletes.slice(0,this.props.limit).map(athlete => {

			return (
				<tr key={athlete._id}>
					<td><input type="checkbox" aria-label="..."/></td>
					<td><Link to={`/manageAthleteForm/${athlete.dni}`}>{athlete.dni}</Link></td>
					<td>{athlete.lastName}</td>
					<td>{athlete.firstName}</td>
					<td>{athlete.address}</td>
					<td>{athlete.city}</td>
					<td>{athlete.country}</td>
					<td>{athlete.tlf}</td>
					<td>{athlete.sex}</td>
				</tr>
			)
		});

		return (
			<div className="panel panel-primary">
				<div className="panel-heading">Athletes</div>
				<table className='table'>
					<thead>
						<tr>
							<th></th>
							<th>DNI</th>
							<th>Last Name</th>
							<th>First Name</th>
							<th>Address</th>
							<th>City</th>
							<th>Country</th>
							<th>Tlf</th>
							<th>Sex</th>
						</tr>
					</thead>
					<tbody>
						{row}
					</tbody>
				</table>
				<div className="panel-footer">
					<div className="footerText">
						<p>Total Athletes  : {this.getFooterCounter()}/{this.state.athletes.length}</p>
					</div>
				</div>
			</div>
		);
	}
}


export default AthetesList