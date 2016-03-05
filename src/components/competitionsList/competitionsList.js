import React, { PropTypes } from "react";
import Relay from "react-relay";
import './competitionsList.css';
import jQuery from 'jquery';
import CompetitionsApi from '../../api/competitionsApi';
import CompetitionsStore from '../../stores/competitionsStore';

//Esta función se usa para obtener todos los links del store
let _getAppState = () => {
    return {competitions : CompetitionsStore.getAll()};  
};


class CompetitionsList extends React.Component {

	//Sirven para forzar validaciones, en este caso limit debe ser un número.
    static propTypes = {
        limit: React.PropTypes.number
    };
        
    //Sirven para establecer un valor por defecto en caso de que falte.
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

        CompetitionsApi.fetchCompetitions();

        //Una vez mostrada la pantalla crea un evento que se lanze cuando haya un change
        CompetitionsStore.on('change',this.onChange);
    }

    componentWilUnmount() {

        //Quita el evento antes de dejar de mostrar la pantalla al salir de ella
        CompetitionsStore.removeListener('change',this.onChange);
    }
    
    //Este método detecta el event change y reresca el componente.
    onChange(){
        console.log ('- (5) competitionsList component : Component has detected a change in the store');
        this.setState(_getAppState());
    }

    getFooterCounter() {
    	if (this.props.limit<=this.state.competitions.length) {
    		return this.props.limit;
    	}
    	return this.state.competitions.length;
	}


	render() {

					//Para acceder al store del schema usaremos this.props

		let row = this.state.competitions.slice(0,this.props.limit).map(competition => {
			return (
				<tr key={competition._id}>
					<td><input type="checkbox" aria-label="..."/></td>
					<td>{competition.name}</td>
					<td>{competition.type}</td>
					<td>{competition.city}</td>
					<td>{competition.country}</td>
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
							<th>Name</th>
							<th>Type</th>
							<th>City</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>
						{row}
					</tbody>
				</table>
				<div className="panel-footer">
					<div className="footerText">
						<p>Competitions : {this.getFooterCounter()}/{this.state.competitions.length}</p>
					</div>
				</div>
			</div>
		);
	}
}

//Declare data requirements for LinksList component
// LinksList = Relay.createContainer (LinksList, {
// 	fragments: {
// 		store: () => Relay.Ql`
// 			fragment on Store {
// 				links {
// 					_id,
// 					title,
// 					url,
// 					description
// 				}
// 			}
// 		`
// 	}
// });

export default CompetitionsList