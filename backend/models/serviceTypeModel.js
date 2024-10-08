const mongoose = require("mongoose");
const serviceTypeSchema = mongoose.Schema({

    name:
    {
        type:String,
        required:true,
    },
    charges:
    {
        type:Number,
        required:true
    }
});

const serviceTypeModel = mongoose.model("ServiceType", serviceTypeSchema);
module.exports = serviceTypeModel;
