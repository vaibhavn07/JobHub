const mongoose = require("mongoose");
require("dotenv").config();
const URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1"

mongoose.connect(process.env.URI)
.then(()=>{console.log("connected")})
.catch((e)=>{
    console.log(e);
})


