import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLInt,
	GraphQLString
}
from 'graphql';


let Schema = (db) => {

	let store = {};

	let storeType = new GraphQLObjectType({
		name: 'Store',
		fields: ()=>({
			athletes: {
				type: new GraphQLList(athleteType),
				resolve: () => db.collection('athletes').find({}).toArray()
			},
			competitions: {
				type: new GraphQLList(competitionType),
				resolve: () => db.collection('competitions').find({}).toArray()
			}
		})
	});

	let athleteType = new GraphQLObjectType({
		name : 'Athlete',
		fields: ()=> ({
			_id: {type: GraphQLString},
			firstName: {type: GraphQLString},
			secondName: {type: GraphQLString},
			address: {type: GraphQLString},
			city: {type: GraphQLString},
			country : {type: GraphQLString},
			tlf: {type: GraphQLString},
			sex: {type: GraphQLString}
		})
	});

	let competitionType = new GraphQLObjectType({
		name : 'Competition',
		fields: ()=> ({
			_id: {type: GraphQLString},
			name: {type: GraphQLString},
			type: {type: GraphQLString},
			city: {type: GraphQLString},
			country : {type: GraphQLString}
		})
	});

	let schema = new GraphQLSchema({
		query: new GraphQLObjectType({
			name: 'Query',
			fields: ()=>({
				store: {
					type: storeType,
					resolve: () => store
				}
			})
		})
	});

	return schema;

};


export default Schema;