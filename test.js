 
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());  
app.use(express.json());  

let courses = [
   
        { courseName: "Electrical Circuits", courseCode: "EEE101", courseYear: "1st Year" },
        { courseName: "Engineering Mechanics", courseCode: "CE101", courseYear: "1st Year" },
        { courseName: "Thermodynamics", courseCode: "ME101", courseYear: "1st Year" },
        { courseName: "Molecular Biology", courseCode: "BT201", courseYear: "2nd Year" }
];  

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.post('/api/courses', (req, res) => {
  const { courseName, courseCode, courseYear } = req.body;
  if (courseName && courseCode && courseYear) {
    return res.status(400).json({ message: 'all fields are required'})
  }
    const newCourse = { courseName, courseCode, courseYear };
    courseItems.push(newItem)
    res.status(400).json(newItem);
});

const PORT = process.env.PORT || 1303; 
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
