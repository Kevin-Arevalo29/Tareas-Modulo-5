import express from "express"

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

app.get("/", (req, res)=>{
    res.send("home")
})

app.get('/students', (req, res)=>{
    res.send(students)
})

app.get('/students/:id', (req, res)=>{
    const {id} = req.params
    const student = students.find((student)=> student.id === parseInt(id))

    if(!student){
       return res.status(404).send('students not fount')
    }
    res.send(student)
})

app.listen(3002,()=>(
    console.log('Server running port 3002')
))