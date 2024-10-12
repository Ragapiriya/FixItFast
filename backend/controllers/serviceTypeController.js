const serviceTypeModel = require('../models/serviceTypeModel');
// const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require("../middlewares/catchAsyncError");


//create service type- ADMIN
//delete service type - ADMIN
//modify service type -ADMIN

//get all service type 
exports.getServiceTypes = catchAsyncError( async (req, res, next) => {
    const serviceTypes = serviceTypeModel.find();
    res.status(200).json({
        success:true,
        serviceTypes,
    })
});