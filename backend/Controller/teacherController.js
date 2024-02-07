const teacherModel= require("../model/teacherModel")
const CreateTeacher= async (req, res) =>{
    const newData = teacherModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}
//getting all teachers api starts here
const getAllTeachers = async (req, res)=>{
    const perpage = req.query.page || 0
    const numberofTeacher= 5
    
    const allTeachers = await teacherModel.find()
    .skip(numberofTeacher*perpage)
    .limit(numberofTeacher)
    if(allTeachers){
        res.send(allTeachers)
    }
}
//searchin teacher data api starts

const searchTeacher=  async(req,res)=>{
    const searchData =  await teacherModel.find({
        $or: [
            {name: {$regex: req.params.key}},
            {ID: {$regex: req.params.key}}
        ]
    })
    if (searchData) {
        res.send(searchData)
    }



}
const getTotalTeachers = async(req,res)=>{
    const total = await teacherModel.find().countDocuments()
    if (total) {
        res.send({total})
    }
}
//getting total salary
const getTotalSalary = async (req,res)=>{
const totalSalary = await teacherModel.aggregate([
    {
        $group: {_id: null, salary: {$sum: "$salary"}}
    }
])
if (totalSalary) {
    res.send(totalSalary)
}
}



module.exports ={ CreateTeacher, searchTeacher,getTotalTeachers,  getAllTeachers,getTotalSalary}