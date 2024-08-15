const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.URI)
.then(()=>{console.log("connected")})
.catch((e)=>{
    console.log(e);
})


