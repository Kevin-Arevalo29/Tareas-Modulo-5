import express from "express"
import authMiddleware from "./middleware.js";
import validationMiddleware from "./validacion.js";

const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' },
    { id: 4, name: 'David', age: 23, major: 'Biology' },
    { id: 5, name: 'Eva', age: 19, major: 'Chemistry' },
    { id: 6, name: 'Frank', age: 24, major: 'Economics' },
    { id: 7, name: 'Grace', age: 20, major: 'Engineering' },
    { id: 8, name: 'Hannah', age: 22, major: 'History' },
    { id: 9, name: 'Ian', age: 21, major: 'Philosophy' },
    { id: 10, name: 'Jack', age: 23, major: 'Art' },
];

const app = express()

app.use(express.json());


app.get("/", (req, res)=>{
    res.send("home")
})

app.get('/students',(req, res )=>{
    res.send(students)
})

app.get('/students/:id',(req, res)=>{
    const {id} = req.params
    const student = students.find((student)=> student.id === parseInt(id))
    console.log(req.method)
    if(!student){
       return res.status(404).send('students not fount')
    }
    res.status(201).send(student)
})

app.put('/students/:id', authMiddleware, validationMiddleware, (req, res) => {
    const { id } = req.params;
    const { name, age, major } = req.body;
    const student = students.find((student) => student.id === parseInt(id));

    if (!student) {
        return res.status(404).send('student not found');
    }

    student.name = name;
    student.age = age;
    student.major = major;

    res.status(200).json(student);
});

app.delete('/students/:id', authMiddleware, validationMiddleware, (req, res)=>{
    const { id } = req.params
    const indexSelectStudent = students.findIndex((student)=> student.id=== parseInt(id))
    console.log(req.method)
    console.log(req.id)
    if(indexSelectStudent === -1){
        res.status(404).send('student not found')
        return
    }
    
    students.splice(indexSelectStudent, 1)
    res.status(200).send('student deleted successfuly')
})

app.listen(3000,()=>(
    console.log('Server running port 3000') 
)) 