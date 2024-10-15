const userModel = require("../models/userModel");

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
