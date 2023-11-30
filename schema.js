const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    rollNo: {
        type: Number,
        require: true
    },
    name: {
        type: String
    }
})

module.exports  = new mongoose.model("studentData", studentSchema);