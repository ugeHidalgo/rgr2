import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLInt,
	GraphQLString
}
from 'graphql';


let Schema = (db) => {

	let linkType = new GraphQLObjectType({
		name : 'Link',
		fields: ()=> ({
			_id: {type: GraphQLString},
			title: {type: GraphQLString},
			description: {type: GraphQLString},
			url: {type: GraphQLString} 
		})
	});

	let schema = new GraphQLSchema({
		query: new GraphQLObjectType({
			name: 'Query',
			fields: ()=>({
				links: {
					type: new GraphQLList(linkType),
					resolve: () => db.collection('links').find({}).toArray()
				}
			})
		})
	});

	return schema;

};


export default Schema;