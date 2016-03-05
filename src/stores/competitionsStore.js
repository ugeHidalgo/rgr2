import AppDispatcher from '../appDispatcher'; //Require al dispatcher de la app
import {ActionTypes} from '../constants/constants'; //la definición de las acciones
import {EventEmitter} from 'events'; //requiere instalar el modulo events
import jQuery from 'jquery';


//Private variable local para contener los links
let _competitions = [];

//Sin ES6 se usaba object-assign del modulo assign para hacer que el
//store pudiera extender la clase EventEmitter. Con ES6 es más fácil.
class CompetitionsStore extends EventEmitter{
    
        //Registrar el AppDispatcher usando el constructor
        constructor(props){
            super(props);
            AppDispatcher.register(action=>{ //action viene de la action enviada en severActions.js
                //El swith discrimina las acciones que el store debe atender.
                switch (action.actionType) {
                    case ActionTypes.RECEIVE_COMPETITIONS:
                            _competitions = action.competitions;
                            
                            //Una vez asignada esto al store hay que emitir que se ha produciodo un cambio en el store.
                            console.log ('- (4) competitionsStore : Emits en event: '+ 'change');
                            this.emit("change");
                        break;
                
                    default:
                        //do nothing
                        break;
                }
            });
        }
        
        
        //Método que devuelve todos los links
        getAll(){
            return _competitions;
        }
};


export default new CompetitionsStore();