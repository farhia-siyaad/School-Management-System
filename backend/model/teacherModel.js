const mongoose = require("mongoose")
const teacherSchema =mongoose.Schema({
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
    salary:{
        type:Number,
        require:true

    }
},
{timestamps: true}
)
module.exports = mongoose.model("teacher" ,teacherSchema)