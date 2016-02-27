import express from "express";
import {port} from "./config";
import schema from "../data/schema";
import GraphQLHTTP from "express-graphql";
import {MongoClient} from "mongodb";


let server = express();
server.use(express.static('public'));

let db;
MongoClient.connect (process.env.MONGO_URL, (err,database) => {

	if (err) throw err;

	db = database;
	server.use('/graphql',GraphQLHTTP({
		schema : schema(db),
		graphiql: true
	}));

});


server.listen(port, () => {
	console.log ('- Listening on port 3000 --------------------------------------------------' );
	console.log ('  DB: ' + process.env.MONGO_URL);
});

