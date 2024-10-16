const userModel = require("../models/userModel");
//create new user - /api/v1/user/new
exports.createNewUser = async (req, res, next) => {
  try {
    const { userName, email, name, picture } = req.body;

    //checking if the user already exits
    let user = await userModel.findOne({ userName });
    if (!user) {
      //user doesn't exist --> create new user
      const newUser = await userModel.create({
        userName,
        email,
        name,
        picture,
      });
      res.status(201).json({
        success:true,
        message:"User created successfully"
      })
    }
    else{
      res.status(200).json({
        message:"User already exists"
      })
    }
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
};

//ADMIN
//get all users details - /api/v1/admin/users
exports.getAllusers = async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users details",
      error,
    });
  }
};
