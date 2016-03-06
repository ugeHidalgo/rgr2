import AppDispatcher from '../appDispatcher'; //Require al dispatcher de la app
import {ActionTypes} from '../constants/constants'; //la definición de las acciones
import jQuery from 'jquery';

let ServerAthleteActions =  {

    //Esta función es un actionCreator
    receiveAthletes(athletes) {
        //Lanzar un acción de tipo RECEIVE_ATHLETES con los links incluidos
        console.log('- (3) athletesActions : Dispatched action: ' + ActionTypes.RECEIVE_ATHLETES);
        
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_ATHLETES,
            athletes: athletes
        });
    }
};


export default ServerAthleteActions;