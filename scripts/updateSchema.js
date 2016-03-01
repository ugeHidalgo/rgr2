import express from 'express';
import {port} from '../src/config';
import Schema from '../data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

//Used to generate the schema.
import {graphql} from 'graphql'
import { introspectionQuery } from 'graphql/utilities';
import fs from 'fs';
import path from 'path';


let server = express();
server.use(express.static('public'));


(async() =>{
  let db;
  let schema;

  console.log ('Connectiong to db: '+process.env.MONGO_URL);
  MongoClient.connect (process.env.MONGO_URL, (err,database) => {

    if (err) throw err;
    db = database;
  
    console.log ('Connected !!!');
    schema = Schema(db)
    server.use('/graphql',GraphQLHTTP({
      schema,
      graphiql: true
    }));

    //Generate the schema. 
    //Move to an indenpendet script to execute on demand and not every time server is launched
    // Save JSON of full schema introspection for Babel Relay Plugin to use
    console.log ('Generating schema...');
    (async () => {
        var result = await (graphql(schema, introspectionQuery));
        //console.log (JSON.stringify(result, null, 2));
        if (result.errors) {
          console.error(
              'ERROR introspecting schema: ',
              JSON.stringify(result.errors, null, 2)
          );
        } else {
          console.log ('Schema generated !!!');
          let destinationFile = path.join(__dirname, '../data/schema.json');
          console.log ('writing schema to : ' + destinationFile);
          let jsonSchema = JSON.stringify(result, null, 2);
          //console.log (jsonSchema);
          fs.writeFile(destinationFile, jsonSchema, (err) => {
                if (err) throw err;
              console.log ('Schema writed !!!');
              }
            );
        }
    })();
  });
})();