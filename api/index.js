const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");

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