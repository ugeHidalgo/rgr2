import {post} from 'jquery'; //Se usa para hacer la llamada a la mongoDb query
import ServerAthleteActions from '../actions/athletesActions';
import jQuery from 'jquery';

let AthletesAPI = {
  getAllAthletes(fetchAthletes) {
      console.log ('- (1) Athletes API: Getting all athletes data...');
      
      post("/graphql",{
          query: '{store{athletes{_id,dni,firstName,lastName,address,tlf,city,country,sex}}}' //esta es la query usada para obtener los datos
        }).done (athletesResponse => {
          console.log ('- (2) Athletes API: All Athletes data was gotten.');
          
          //usaremos un modulo ServerActions que se encargará de usar el dispatcher 
          //para lanzar las acciones
          ServerAthleteActions.receiveAthletes(athletesResponse.data.store.athletes);
      });
  },

  updateAthlete(athlete) {
      console.log ('- (1) Athletes API: Saving athlete data...');
      
      post("/graphql",{
          query: '{store{athletes{_id,dni,firstName,lastName,address,tlf,city,country,sex}}}' //esta es la query usada para obtener los datos
        }).done (athletesResponse => {
          console.log ('- (2) Athletes API: Athlete data was saved.');
          
          //usaremos un modulo ServerActions que se encargará de usar el dispatcher 
          //para lanzar las acciones
          //ServerAthleteActions.saveAthlete(athletesResponse.data.store.athletes[0]);
      });
  }
};

export default AthletesAPI;