const express = require('express')
// const Job = require("../schemas/jobSchema");
const router = express.Router();

router.post("/job",(req,res)=>{
    
})


router.get("/listing",(req,res)=>{
    const job = {name:"Microsoft",vacancy:10};
    res.send(job).status(400);
})



module.exports = router;