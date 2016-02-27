import {post} from 'jquery'; //Se usa para hacer la llamada a la mongoDb query
import ServerActions from '../actions/linksActions';//Require al módulo del dispatcher
import jQuery from 'jquery';

let API = {
  fetchLinks(fetchLinks){
      console.log ('- (1.1) Fetching Links API...');
      
      //Read Links API using a query to /graphql
      //Cuando la devuelva los datos lanza el callback definido en done
      post("/graphql",{
          query: '{links{_id,title,description,url}}' //esta es la query usada para obtener los datos
        }).done (linksResponse => {
          console.log ('- (1.2) Links API was fetched.');
          
          //usaremos un modulo ServerActions que se encargará de usar el dispatcher 
          //para lanzar las acciones
          ServerActions.receiveLinks(linksResponse.data.links);
      });
  }
    
};

export default API;