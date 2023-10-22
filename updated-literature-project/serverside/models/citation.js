const mongoose = require('mongoose');

const citationSchema = new mongoose.Schema({
    citeID: {type: String, required: true},
    authors:  { type: String, required: true},
    author_1:  { type: String, required: false},
    author_2:  { type: String, required: false},
    author_3:  { type: String, required: false},
    author_4:  { type: String, required: false},
    author_5:  { type: String, required: false},
    author_6:  { type: String, required: false},
    author_7:  { type: String, required: false},
    author_8:  { type: String, required: false},
    author_9:  { type: String, required: false},
    author_10:  { type: String, required: false},
    year:  { type: String, required: true},
    title:  { type: String, required: true},
    publication:  { type: String, required: false},
    page_numbers:  { type: String, required: false},
    section:  { type: String, required: false},
    full_citation:  { type: String, required: true},
   
});

//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Citation', citationSchema,'sources');
