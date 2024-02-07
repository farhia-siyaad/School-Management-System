const multer= require("multer")
const documentModel = require("../model/documentModel")
const storageLocation= multer.diskStorage({
     destination: (req, file , cb)=>{
          cb(null, "documents")
     },
     filename: (req,file,cb)=>{
          cb(null,file.originalname)
     }
})
const  upload = multer({
     storage:storageLocation
})
const regesterDocument = async(req,res)=>{
     const newData = documentModel({
          file: req.file.filename
     })
     const saveDocument = await newData.save()
     if (saveDocument) {
          res.send(saveDocument)
     }
}



const CreateTeacher= async (req, res) =>{
     const newData = teacherModel(req.body)
     const saveData = await newData.save()
     if(saveData){
         res.send(saveData)
     }
 }
 const getAllDocuments = async (req, res)=>{
     const allDocuments = await documentModel.find()
     if(allDocuments){
         res.send(allDocuments)
     }
 }
module.exports = {
     regesterDocument,
     upload,
     getAllDocuments
}