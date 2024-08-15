const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017"

mongoose.connect(URI)
.then(()=>{console.log("connected")})
.catch((e)=>{
    console.log(e);
})


