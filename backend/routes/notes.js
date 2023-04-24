const express=require('express');
const router=express.Router();

// creating note storing function
router.get('/',(req,res)=>{
    res.json('123');
})

module.exports=router;