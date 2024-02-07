const express = require("express")
const studentController = require("../Controller/studentController")
const router = express.Router()
router.post("/create/student", studentController.CreateStudent)
router.get("/allstudent", studentController.getAllStudents)
router.get("/student/total",studentController.getTotalStudents)
module.exports =router