const express = require("express")
const mongoose =require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
const teacherRoute = require("./Routes/TeacherRoute")
const studentRoute = require("./Routes/StudentRoute")
const adminRoute = require("./Routes/adinminRoute")
const documentRoute = require("./Routes/documentRoute")
app.use(studentRoute)
app.use(teacherRoute)
app.use(adminRoute)
app.use(documentRoute)


//custom route for only documents waxa gudaha ku jiro 
app.use("/alldocs", express.static("documents"));

mongoose.connect("mongodb://0.0.0.0:27017/SchoolSystem").then(()=>{
    console.log("Database has been connected sucesfully")
}).catch((error) =>{
    console.log("eror")
})
app.listen(3000, (req,res)=>{
    console.log("server is Runing")
})