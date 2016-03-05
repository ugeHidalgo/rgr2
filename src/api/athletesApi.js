import {post} from 'jquery'; //Se usa para hacer la llamada a la mongoDb query
import ServerAthleteActions from '../actions/athletesActions';
import jQuery from 'jquery';

let AthletesAPI = {
  fetchAthletes(fetchAthletes){
      console.log ('- (1) Athletes API: Fetching athletes data...');
      
      post("/graphql",{
          query: '{store{athletes{_id,firstName,secondName,address,tlf,city,country,sex}}}' //esta es la query usada para obtener los datos
        }).done (athletesResponse => {
          console.log ('- (2) Athletes API: Athletes data was fetched.');
          
          //usaremos un modulo ServerActions que se encargará de usar el dispatcher 
          //para lanzar las acciones
          ServerAthleteActions.receiveAthletes(athletesResponse.data.store.athletes);
      });
  }
    
};

export default AthletesAPI;