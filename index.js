const express = require('express');
const app = express();
const port = 2000;
require("./conn");

const studentData = require('./schema');

app.use(express.json());


app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/register', async (req, res) => {
    try {
        const { rollNo, name } = req.body;

        // Create a new student instance
        const newStudent = new studentData({ rollNo, name });

        console.log(newStudent);
    
        // Save the student to the database
        const savedStudent = await newStudent.;
        
        res.json(savedStudent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.get('/getStudent', async (req, res) => {
    try {
      const students = await studentData.find();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(port, ()=>{
    console.log("Connected to: ", port);
})