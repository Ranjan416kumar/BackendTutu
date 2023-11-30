// MongoDB connection setup
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Laudu', {
}).then(()=>{
    console.log("Connection with db is done!");
}).catch((error)=>{
    console.log("NO CONNECTION",error);
})