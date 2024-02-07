const adminControler = require("../Controller/adminControler")
const express = require("express")
const route = express.Router()
route.post("/create/admin", adminControler.regesterAdmin)
route.post("/admin/login",adminControler.loginAdmin)

module.exports = route