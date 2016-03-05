import AppDispatcher from '../appDispatcher'; //Require al dispatcher de la app
import {ActionTypes} from '../constants/constants'; //la definición de las acciones
import jQuery from 'jquery';

let ServerCompetitionsActions =  {

    //Esta función es un actionCreator
    receiveCompetitions(competitions) {
        //Lanzar un acción de tipo RECEIVE_LINKS con los links incluidos
        console.log('- (3) competitionsAction :  Dispatched action: ' + ActionTypes.RECEIVE_COMPETITIONS);
        
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_COMPETITIONS,
            competitions: competitions
        });
    }
};


export default ServerCompetitionsActions;