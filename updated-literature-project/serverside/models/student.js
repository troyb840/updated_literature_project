const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName:  { type: String, required: true}
   
});

//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Student', studentSchema,'student');
