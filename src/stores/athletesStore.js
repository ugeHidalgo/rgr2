import AppDispatcher from '../appDispatcher'; //Require al dispatcher de la app
import {ActionTypes} from '../constants/constants'; //la definición de las acciones
import {EventEmitter} from 'events'; //requiere instalar el modulo events
import jQuery from 'jquery';
import Lodash from 'lodash';


//Private variable local para contener los links
let _athletes = [];

let _clone = (item) => {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};


//Sin ES6 se usaba object-assign del modulo assign para hacer que el
//store pudiera extender la clase EventEmitter. Con ES6 es más fácil.
class AthletesStore extends EventEmitter{
    
        //Registrar el AppDispatcher usando el constructor
        constructor(props){
            super(props);
            AppDispatcher.register(action=>{ //action viene de la action enviada en severActions.js
                //El swith discrimina las acciones que el store debe atender.
                switch (action.actionType) {
                    case ActionTypes.RECEIVE_ATHLETES:
                            _athletes = action.athletes;
                            
                            //Una vez asignada esto al store hay que emitir que se ha produciodo un cambio en el store.
                            console.log ('- (4) athletesStore: Emits en event: '+ 'change');
                            this.emit("change");
                        break;
                
                    default:
                        //do nothing
                        break;
                }
            });
        }
        
        
        getAll(){
            return _athletes;
        }

        getAthleteByDni(dniToFind){
            var athlete = Lodash.find(_athletes, {dni : dniToFind});
            return _clone(athlete);
        }

        getSelectedAthlete() {
            return _athlete;
        }
};


export default new AthletesStore();