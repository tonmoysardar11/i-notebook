
const express = require('express');
const User = require('../models/User')
// installed express validation for data validation
const { body, matchedData, validationResult } = require('express-validator');
// installed express router
const router = express.Router();
// installed bcrypt fpr password hash salt pepper
const bcrypt = require('bcryptjs');
// installed json web token
const jwt = require('jsonwebtoken');



// creating jwt token
const token = "tonmoy11"


// creating an new user by hitting the api /api/auth/createuser ->
router.post('/createuser', [
    body('name', "Enter Valid Name").isLength({ min: 3 }),
    body('email', "Enter Valid email").contains('@'),
    body('password', "Enter Valid Password").isLength({ min: 6 })
], async (req, res) => {
    // showing error for invalid inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });

    }
    // creating new user if no error
    try {
        // checking if same email exists or not
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ Error: 'User already Exist with this email' });
        }
        else {
            // creating salt and securing password
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt)
            // creating user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass
            })

            // creating user token data essential to find user,try to make it most unique like id to generate data faster
            const Data = {
                user: {
                    id: user.id
                }
            }
            // creating user token using tokendata, dont use await for jwt.sign as it is already a sync function
            const userToken = jwt.sign(Data, token);



            // user=>res.json(user);
            err => res.json({ Error: errors.msg });
            res.json({
                Success: "User Created Successfully", Data: user, token: userToken
            })
        }


    }
    // function to catch any internal error
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
})



router.post('/login', [
    body('email', "Enter Valid email").contains('@'),
    body('password', "Enter Valid Password").isLength({ min: 6 })
], async (req, res) => {
    // showing error for invalid inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });

    }

    const {email,password}=req.body;

    const user = await User.findOne({email});
    if(!user){
        res.status(400).json({Error:"Wrong Credentials"})
    }

    const match = await bcrypt.compare(password,user.password)
    if(!match){
        res.status(400).json({Error:"Wrong Credentials"})
    }
    // creating user token data essential to find user,try to make it most unique like id to generate data faster
    const Data = {
        user: {
            id: user.id
        }
    }
    // creating user token using tokendata, dont use await for jwt.sign as it is already a sync function
    const userToken = jwt.sign(Data, token);
    res.json({Success:`Welcome ${user.name}`,userToken});

})


module.exports = router;