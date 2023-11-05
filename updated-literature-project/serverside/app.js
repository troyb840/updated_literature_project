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

//Dev 
//mongodb://127.0.0.1:27017/literature_project

//Production
//mongodb+srv://Guest:KennesawStateUniversity123@cluster0.1ssbkkd.mongodb.net/
mongoose.connect('mongodb+srv://Guest:KennesawStateUniversity123@cluster0.1ssbkkd.mongodb.net/literature_project', { useNewUrlParser: true,  useUnifiedTopology: true })
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

///////////API Calls 

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

//Test Query - Find all 
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

//Test keyword query 
 app.get('/keyword_test', (req, res, next) => {

    Test.find({authors : /Vaishnavi/})
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log('Error: ${err}')
        res.status(500).json(err);
    }) 

});


 //production keyword query test
 app.get('/keyword_test_prod', (req, res, next) => {

    Citation.find({authors : /Vaishnavi/})
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log('Error: ${err}')
        res.status(500).json(err);
    }) 

});


//production - author keyword query 
app.get('/author/:author_word', (req, res, next) => {

console.log(req.params.author_word)

Citation.find({authors: {$regex: req.params.author_word}})
.then(data => res.status(200).json(data))
.catch(err => {
    console.log('Error: ${err}')
    res.status(500).json(err);
    }) 

});  

//production - title keyword query 
app.get('/title/:title_word', (req, res, next) => {

    console.log(req.params.title_word)
    
    Citation.find({title: {$regex: req.params.title_word}})
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log('Error: ${err}')
        res.status(500).json(err);
        }) 
    
});    

//production - section keyword query 
app.get('/section/:section_word', (req, res, next) => {

    console.log(req.params.section_word)
    
    Citation.find({section: {$regex: req.params.section_word}})
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log('Error: ${err}')
        res.status(500).json(err);
        }) 
    
});  

//production - year keyword query 
app.get('/year/:year_word', (req, res, next) => {

    
    Citation.find().lean().then(function(data){
        let yearArray = []
        let year_word = req.params.year_word
        console.log(data)


        for(let i=0; i < data.length; i++){
            if (data[i].year == year_word){
                yearArray.push(data[i])



            }else{

            }
        }
        console.log(year_word)
        res.json(yearArray)


    }
    )

///Filter Ascending Author
app.get('/ascending/:author_word_ascending', (req, res, next) => {

    console.log(req.params.author_word_ascending)
    
    Citation.find({authors: {$regex: req.params.author_word_ascending}})
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log('Error: ${err}')
        res.status(500).json(err);
        }) 
    
    });  
///Filter Descending Author

///Filter Ascending Year

///Filter Descending Year

///Filter Ascending Title

///Filter Descending Title

///Filter Ascending Section

///Filter Descending Section

///IEEE Format 

///ACM Format 
    
});  


module.exports=app;