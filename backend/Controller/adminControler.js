const adminModel = require("../model/adminModel")
//regester admin
const regesterAdmin = async(req,res)=>{
     const newAdmin =   adminModel(req.body)
     const saveAdmin = await newAdmin.save()
     if (saveAdmin) {
          res.send(saveAdmin)
     }
}


const loginAdmin = async(req,res)=>{
     const adminData =  await adminModel.findOne({
          username: req.body.username,
          password: req.body.password 
})
if(adminData) {
     res.send(adminData)
}
else{
    res.send({
     error: ("username or password incorect")
    })
}
     
}
module.exports = {
     regesterAdmin,
     loginAdmin
}