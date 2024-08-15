const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
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

const jobs = mongoose.model("Jobs",jobSchema);

module.exports = jobSchema;