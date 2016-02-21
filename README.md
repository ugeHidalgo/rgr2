This a sample prohject including ReactJS, Flux, GraphQL, MongoDB, Relay.

Eugenio Hidalgo Hernández

Used webpack as module bundler.

Install:

 1- Install nvm.

 2- Install nodejs.

 3- Create new project folder, and move into.

 4- npm init.

 5- Create README.md file.

 6- Install express.

 7- Install babel-cli anda babel-preset-es2015.

 8- Create -babelrc file and configure to use es2015 as presets.

 9- Create a server.js file to launch a server into new folder /src/
 		import express from 'express';
 		let server = express();
 		server.us(express.static('public'));
 		server.get ('/',(req,res)=>res.send('Hello express'));
 		app.listen(3000, ()=>{console.log('- Listening on port 3000')});
	
10- Include "start" : "babel-node src/server.js" into "scripts" in package.json to launch server using npm start.

11- Install nodemon (globally).

12- Install react and react-dom.

13- Install webpack (globally).

14- Install babel loader babel-core babel-preset-es-2015 y babel-preset-react.

15- Install babel-preset-stage-0.

16- Install mongodb kerberos

17- Create a global var to hold connection to mongoDB db.

18- Install jquery

19- Install flux

20- Install events 

21- Install graphql and express-graphql

22- Create data folder to hold schema.js. This file contains a function which receives the db and has diferent functions to query the bd and return the data.

23- Modify server.js to load db using the global var defined in step 17.

24- Now we can use http://localhost:3000/graphql to query manually the bd using a browser.
