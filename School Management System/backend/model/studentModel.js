const mongoose = require("mongoose")
const  studentSchema =mongoose.Schema({
    ID:{
        type: String,
        require: true

    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    adress:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    
},
{timestamps: true}
)
module.exports = mongoose.model("student" ,studentSchema)