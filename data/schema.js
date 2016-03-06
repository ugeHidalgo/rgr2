import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull
}
from 'graphql';
import Lodash  from 'lodash';

let _clone = (item) => {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

let Schema = (db) => {

	let store = {};

	let athleteType = new GraphQLObjectType({
		name : 'Athlete',
		fields: ()=> ({
			_id: {type: GraphQLString},
			dni: {type: GraphQLString},
			firstName: {type: GraphQLString},
			lastName: {type: GraphQLString},
			address: {type: GraphQLString},
			city: {type: GraphQLString},
			country : {type: GraphQLString},
			tlf: {type: GraphQLString},
			sex: {type: GraphQLString},
			//roadMap: {type: GraphQLList(GraphQLString)}
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

	let storeType = new GraphQLObjectType({
		name: 'Store',
		fields: ()=>({
			athlete: {
				type: new GraphQLList(athleteType),
				args: {
					dni: {type: GraphQLString}
				},
				resolve : (root, {dni} ) => {

					console.log ("dni = "+ {dni});
					let athlete = Lodash.find(db.collection('athletes'),{dni: {dni}});
					return _clone(athlete);
				}
			},

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

	let schema = new GraphQLSchema({

		query: new GraphQLObjectType({
			name: 'RootQuery',
			fields: ()=>({
				store: {
					type: storeType,
					resolve: () => store
				}
			})
		}),

		mutation: new GraphQLObjectType({
			name: 'Mutation',
			fields: {
				addOrReplaceAthlete: {
					type: athleteType,
					args: {
						_id: {type: GraphQLString}
					},
					resolve: (obj,{_id}) => {

					}
				}
			}
		})
	});

	return schema;

};


export default Schema;