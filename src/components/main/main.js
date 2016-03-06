import React from 'react'; 
import ReactDOM from "react-dom";
import { Router,
		 browserHistory, 	
		 Route } from 'react-router';
import routes from '../../routes';

import Relay from "react-relay";


class HomeRoute extends Relay.Route {
	static routeName = 'Home';
	static queries = {
		store: (Component) => Relay.Ql`
			query MainQuery {
				store { ${Component.getFragment('store')}}
			}
		`
	}
}


ReactDOM.render(<Router 
					history = {browserHistory}  //Do not declare history on routes.js
					routes={routes}/> 
				,document.getElementById('app'));

/* Se obtiene el elemento app del index.html y ahí se renderiza el contenido 
   mediante routes y así dependiendo de la url fijada devolverá un objeto u otro.
   Al empezar la aplicación cogerá de router el elemento que apunta a /, es decir
   componentes/app/app.js
*/

// console.log (
// 	Relay.QL`
// 	query {
// 		store {
// 			athlete (dni:"90103001") {
// 				firstName
// 			}
// 		}
// 	}`
// )