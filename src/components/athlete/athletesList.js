import React, { PropTypes } from "react";
import Relay from "react-relay";
import './athletesList.css';
import jQuery from 'jquery';
import Api from '../../api/api';
import AthletesStore from '../../stores/athletesStore';

//Esta función se usa para obtener todos los links del store
let _getAppState = () => {
     return {athletes : AthletesStore.getAll()};  
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
        debugger;
        this.state = _getAppState();
        
        //Se define la función que se asocia al evento onChange
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){

        Api.fetchAthletes();

        //Una vez mostrada la pantalla crea un evento que se lanze cuando haya un change
        AthletesStore.on('change',this.onChange);
    }

    componentWilUnmount() {

        //Quita el evento antes de dejar de mostrar la pantalla al salir de ella
        AthletesStore.removeListener('change',this.onChange);
    }
    
    //Este método detecta el event change y reresca el componente.
    onChange(){
        console.log ('- (5) athletesList component : Componet has detected a change in the store');
        this.setState(_getAppState());
    }

    getFooterCounter() {
    	debugger;
    	if (this.props.limit<=this.state.athletes.length) {
    		return this.props.limit;
    	}
    	return this.state.athletes.length;
	}

	render() {

					//Para acceder al store del schema usaremos this.props
		debugger;
		let row = this.state.athletes.slice(0,this.props.limit).map(athlete => {
			return (
				<tr key={athlete._id}>
					<td><input type="checkbox" aria-label="..."/></td>
					<td>{athlete._id}</td>
					<td>{athlete.firstName}</td>
					<td>{athlete.secondName}</td>
					<td>{athlete.address}</td>
					<td>{athlete.city}</td>
					<td>{athlete.country}</td>
					<td>{athlete.tlf}</td>
				</tr>
			)
		});

		return (
			<div className="panel panel-primary">
				<div className="panel-heading">Usefull links</div>
				<table className='table'>
					<thead>
						<tr>
							<th></th>
							<th>Id</th>
							<th>First Name</th>
							<th>Second Name</th>
							<th>Address</th>
							<th>City</th>
							<th>Country</th>
							<th>Tlf</th>
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