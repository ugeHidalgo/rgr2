import {post} from 'jquery'; //Se usa para hacer la llamada a la mongoDb query
import ServerCompetitionsActions from '../actions/competitionsActions';
import jQuery from 'jquery';

let CompetitionsAPI = {

  fetchCompetitions(fetchCompetitions){
      console.log ('- (1) Competitions API: Fetching competitions data...');
      
      post("/graphql",{
          query: '{store{competitions{_id,name,type,city,country}}}' //esta es la query usada para obtener los datos
        }).done (competitionsResponse => {
          console.log ('- (2) Competitions API: Competitions data was fetched.');
          
          //usaremos un modulo ServerActions que se encargará de usar el dispatcher 
          //para lanzar las acciones
          ServerCompetitionsActions.receiveCompetitions(competitionsResponse.data.store.competitions);
      });
  }
    
};

export default CompetitionsAPI;