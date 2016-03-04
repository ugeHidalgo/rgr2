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
				type: new GraphQLList(athletType),
				resolve: () => db.collection('athletes').find({}).toArray()
			}
		})
	});

	// let linkType = new GraphQLObjectType({
	// 	name : 'Link',
	// 	fields: ()=> ({
	// 		_id: {type: GraphQLString},
	// 		title: {type: GraphQLString},
	// 		description: {type: GraphQLString},
	// 		url: {type: GraphQLString} 
	// 	})
	// });

	// let schema = new GraphQLSchema({
	// 	query: new GraphQLObjectType({
	// 		name: 'Query',
	// 		fields: ()=>({
	// 			store: {
	// 				type: storeType,
	// 				resolve: () => store
	// 			}
	// 		})
	// 	})
	// });

	let athletType = new GraphQLObjectType({
		name : 'Link',
		fields: ()=> ({
			_id: {type: GraphQLString},
			firstName: {type: GraphQLString},
			secondName: {type: GraphQLString},
			address: {type: GraphQLString},
			city: {type: GraphQLString},
			country : {type: GraphQLString},
			tlf: {type: GraphQLString}
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