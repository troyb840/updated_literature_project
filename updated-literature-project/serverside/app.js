const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const request = require('request');
const axios = require('axios');


const mongoose = require('mongoose');
//specify where to find the schema

const Citation = require('./models/citation')
const Test = require('./models/test')
const Student = require('./models/student')



mongoose.connect('mongodb://127.0.0.1:27017/literature_project', { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });
    console.log(mongoose.connection.readyState);


//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

///////////API Call 

app.get('/api_test', (req, res, next) => {
    //we will add an array named students to pretend that we received this data from the database
    const students = [ 
    { "id" : "1", "firstName" : "John" , "lastName" : "Dow" }, 
    { "id" : "2", "firstName" : "Ann" , "lastName" : "Smith" }, 
    { "id" : "3", "firstName" : "Joan" , "lastName" : "Doe" }];
    //send the array as the response 
    res.json(students);

});

//Test sample mongodb collection
app.get('/student_test', (req, res, next) => {

    Student.find() 
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
    
    });


///Currently getting error 
app.get('/query_test', (req, res, next) => {

    Test.find() 
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
    
    });


//to use this middleware in other parts of the application
module.exports=app;