const mongoosee = require("mongoose")
const documentSchema = mongoosee.Schema({
    file:{
        type: String,
        required: true

    }

   
},
{timestamps: true}
)
module.exports= mongoosee.model("Decoment", documentSchema)