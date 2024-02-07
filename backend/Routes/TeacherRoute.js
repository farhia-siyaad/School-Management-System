const express = require("express")
const teacherController = require("../Controller/teacherController")
const router = express.Router()
router.post("/create/teacher", teacherController.CreateTeacher)
router.get("/allteacher", teacherController.getAllTeachers)
router.get("/teacher/search/:key",teacherController.searchTeacher)
router.get("/teacher/total",teacherController.getTotalTeachers)
router.post("/teacher/total", teacherController.getTotalTeachers)
router.get("/salary/total",teacherController.getTotalSalary)

module.exports =router