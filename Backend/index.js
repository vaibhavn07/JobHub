const express = require('express')
const userRoute = require("./routes/userRoutes");
const jobRoute = require('./routes/JobRoutes');

const app = express()
const PORT = 3000;

app.use("/user",userRoute);
app.use("/jobs",jobRoute);

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})