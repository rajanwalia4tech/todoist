const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://tech:P3G6PVCAodzvKlkA@org360.znx0neg.mongodb.net/todo")
.then(()=>{
    console.log("Connected with mongoDB");
})
.catch((error)=>{
    console.error("Error in connecting with mongoDB");
});

app.listen(port, ()=>{
    console.log("Server is running on port ", port);
})

const User = require("./models/user");
const Todo = require("./models/todo");

app.post("/register",async(req,res)=>{
    try{
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            console.log("Email already exist");
        }

        const newUser = new User({
            name, email, password
        })

        await newUser.save();
        res.status(201).json({
            message : "user registered successfully"
        })
    }catch(err){
        console.error("Error in /register", err.message);
        res.status(400).json({
            message : "Registeration Failed"
        })
    }
});

app.post("/login", async (req,res)=>{
    try{
        const {email, password } = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message : "Invalid email"
            })
        }
        if(user.password !== password){
            return res.status(401).json({
                message : "Invalid password"
            })
        }
        const token = jwt.sign({userId : user._id},"secret key")
        res.status(200).json({token});
    }catch(err){
        console.error("Error in /login", err.message);
        res.status(400).json({
            message : "Login Failed"
        })
    }
})