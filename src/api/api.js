import {post} from 'jquery'; //Se usa para hacer la llamada a la mongoDb query
import ServerActions from '../actions/athletesActions';//Require al módulo del dispatcher
import jQuery from 'jquery';

let API = {
  fetchAthletes(fetchAthletes){
      console.log ('- (1) API:Fetching Athletes data...');
      
      post("/graphql",{
          query: '{store{athletes{_id,firstName,secondName,address,tlf,city,country}}}' //esta es la query usada para obtener los datos
        }).done (athletesResponse => {
          console.log ('- (2) API:Athletes data was fetched.');
          
          //usaremos un modulo ServerActions que se encargará de usar el dispatcher 
          //para lanzar las acciones
          debugger;
          ServerActions.receiveAthletes(athletesResponse.data.store.athletes);
      });
  }
    
};

export default API;