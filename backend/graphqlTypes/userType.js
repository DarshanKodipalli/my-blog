const expressGraphQL = require("express-graphql");
const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");

var userType = new GraphQLObjectType({
    name : 'user',
    fields : {
        id : {type: GraphQLID},
        firstName : {type:GraphQLString},
        lastName : {type:GraphQLString},
        emailId : {type:GraphQLString},
        contactInfo : {type:GraphQLString},
        address : {type:GraphQLString}        
    }
})

module.exports = userType;