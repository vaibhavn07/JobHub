const mongoose = require('mongoose');

const jobSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    vacancy:{
        type:Number
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    }        
});

const jobs =new  mongoose.model("Jobs",jobSchema);

module.exports = jobs;