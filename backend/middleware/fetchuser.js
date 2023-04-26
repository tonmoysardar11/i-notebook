// installed json web token
const jwt = require('jsonwebtoken');

// creating jwt token
const token = "tonmoy11"


const fetchuser=(req,res,next)=>{
    const usertoken=req.header('user-token');
    if(!usertoken){
        res.status(401).send({error:"Authentication Error"})
    }
    try {
        const data = jwt.verify(usertoken,token);
        req.user=data.user;
        // res.send(user);
        next();
    } catch (error) {
        res.status(401).send({error:"Authentication Error"});
    }
    



}

module.exports=fetchuser;