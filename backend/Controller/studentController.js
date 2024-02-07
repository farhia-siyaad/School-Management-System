const studentModel = require("../model/studentModel")

const CreateStudent= async (req, res) =>{
    const newData = studentModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}
const getAllStudents = async (req, res)=>{
    const allStudents = await studentModel.find()
    if(allStudents){
        res.send(allStudents)
    }
}
const getTotalStudents = async(req,res)=>{
    const total = await studentModel.find().countDocuments()
    if (total) {
        res.send({total})
    }
}
module.exports ={ CreateStudent, getTotalStudents, getAllStudents}