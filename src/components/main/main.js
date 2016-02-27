
//import jQuery from 'jquery';
//$ = jQuery = require("jquery");
import React from 'react'; 
import ReactDOM from "react-dom";
import { Router, Route } from 'react-router';
import routes from '../../routes';

//import App from "../app/app";


//ReactDOM.render (<App/> ,document.getElementById('app'));

ReactDOM.render(<Router routes={routes}/> ,document.getElementById('app'));

//ReactDOM.render(<routes/> ,document.getElementById('app'));


// Router.run(routes, function (Handler) {
//  	React.render(<Handler />, document.getElementById('app'));
//  });

/* Se obtiene el elemento app del index.html y ahí se renderiza el contenido de Handler
   Handler se obtiene meriante routes y dependiendo de la url fijada devolverá un objeto
   u otro.
   Al empezar la aplicación cogerá de router y hará el handler igual a componentes/app/app.js
   */