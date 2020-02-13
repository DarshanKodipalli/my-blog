const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
var morgan = require('morgan');

var config = require("./config/systemProperties")
var userModel = require("./model/userModel");
var userType = require("./graphqlTypes/userType");

const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");

var app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:"Query",
        fields:{
            user:{
                type: GraphQLList(userType),
                resolve: (root, args, context, info)=>{
                    var queObj={
                        firstName:"Darshan"
                    }
                    userModel.find(queObj,function(error,res){
                        console.log(queObj);
                        if(error){
                            console.log("Error");
                        }else{
                            console.log("No Reeoe");
                            console.log(res);
                            return res;
                        }
                    })
                }
            }
        }
    })
});

app.use("/graphQL", expressGraphQL({
    schema:schema,
    graphiql:true
}));

app.get("/users",function(req,res){
    userModel.find({},function(error,usersList){
        if(!error){
            console.log("Returned Users:");
            console.log(usersList);
            res.json({"message":"Users",data:usersList});
        }
    })
})


mongoose.connect(config.database,{useNewUrlParser:true}).then(()=>{
    console.log("Connected to the Database")
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods',["PUT,POST,GET,DELETE"]);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var server = app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');
