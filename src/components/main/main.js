import React from 'react'; 
import ReactDOM from "react-dom";
import { Router, Route } from 'react-router';
import routes from '../../routes';

ReactDOM.render(<Router routes={routes}/> ,document.getElementById('app'));

/* Se obtiene el elemento app del index.html y ahí se renderiza el contenido 
   mediante routes y así dependiendo de la url fijada devolverá un objeto u otro.
   Al empezar la aplicación cogerá de router el elemento que apunta a /, es decir
   componentes/app/app.js
*/