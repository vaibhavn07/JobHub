const mongoose = require('mongoose');

const jobSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    vacancy:{
        Number
    },
    startDate:{
        Date
    },
    endDate:{
        Date
    }        
});

const jobs =new  mongoose.model("Jobs",jobSchema);

module.exports = jobSchema;