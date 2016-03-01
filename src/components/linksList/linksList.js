import React, { Component, PropTypes } from "react";
import './linksList.css';
import jQuery from 'jquery';
import Api from '../../api/api';
import LinkStore from '../../stores/linksStore';

//Esta función se usa para obtener todos los links del store
let _getAppState = () => {
    return {links : LinkStore.getAll()};  
};


class LinksList extends Component {

	//Sirven para forzar validaciones, en este caso limit debe ser un número.
    static propTypes = {
        limit: React.PropTypes.number
    };
        
    //Sirven para establecer un valor por defecto en caso de que falte.
    static defaultProps = {
        limit: 7
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

        Api.fetchLinks();

        //Una vez mostrada la pantalla crea un evento que se lanze cuando haya un change
        LinkStore.on('change',this.onChange);
    }

    componentWilUnmount() {

        //Quita el evento antes de dejar de mostrar la pantalla al salir de ella
        LinkStore.removeListener('change',this.onChange);
    }
    
    //Este método detecta el event change y reresca el componente.
    onChange(){
        console.log ('- (4) The componet has detected a change in the store');
        this.setState(_getAppState());
    }


	render() {
		//let row = this.linksArray.map(link => {
		// if (this.state.links.length<1){
		// 	this.state.links.push({"_id":"", "url":"", "title":"", "description":""});
		// }

		let row = this.state.links.slice(0,this.props.limit).map(link => {
			return (
				<tr key={link._id}>
					<td><input type="checkbox" aria-label="..."/></td>
					<td>{link._id}</td>
					<td><a href={link.url}>{link.title}</a></td>
					<td>{link.description}</td>
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
							<th>Title</th>
							<th>Descr.</th>
						</tr>
					</thead>
					<tbody>
						{row}
					</tbody>
				</table>
				
				<div className="panel-footer">
					<div className="footerText">
						<p>Nº de links : {this.props.limit}/{this.state.links.length}</p>
					</div>
				</div>
				
			</div>
		);
	}

}

export default LinksList