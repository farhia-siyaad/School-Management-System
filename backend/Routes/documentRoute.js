const express = require("express")
const DocumentController = require("../Controller/documentControler")
const router = express.Router()
const { regesterDocument, upload} = require("../Controller/documentControler")
router.post("/teacher/file",upload.single("file"),regesterDocument)
router.get("/alldocument", DocumentController.getAllDocuments)

module.exports = router