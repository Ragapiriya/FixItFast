const cors = require("cors");
const express = require("express");
const app = express();
const reservation = require("./routes/reservation");
const user = require("./routes/users");
const userModel = require("./models/userModel");
const bodyParser = require("body-parser");
const { auth } = require("express-oauth2-jwt-bearer");

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//middleware- to verify token
const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.OIDC_ISSUER_BASE_URL, //to retrieve public key
  tokenSigningAlg: process.env.ALGORITHM,
});

//routes
app.use("/api/v1", jwtCheck, reservation);
app.use("/api/v1", jwtCheck, user);

// app.get("/", (req, res) => {
//   res.send("Hello from index route");
// });

// //checking the jwt token before sending responses.
// //only for authenticated user [has valid token]
// app.get("/protected", jwtCheck, async (req, res) => {
//   try {
//     const accessToken = req.headers.authorization.split(" ")[1];
//     const response = await axios.get(
//       "https://dev-qro8hjwxug8ea45c.us.auth0.com/userinfo",
//       {
//         headers: {
//           authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const userInfo = response.data;
//     console.log(userInfo);
//     res.send(userInfo);

//     // res.send(req.auth);
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// app.post("/api/user", async (req, res) => {
//   const { userName, email, name, contactNumber,country, picture } = req.body;
//   let user = await userModel.findOne({ userName });
//   if (user && !contactNumber) {
//     //user exists [not new user]
//     return res.status(200).json({
//       message: "User exits",
//     });
//   }
//   //user doesn't exist
//   user = new userModel({
//     userName,
//     email,
//     name,
//     contactNumber,
//     country,
//     picture,
//   });
//   await user.save();
//   res.status(201).json({
//     message: "First Time Login, user saved",
//   });
// });

// app.put("/api/user", async (req, res) => {
//   const { userName, email, name, contactNumber,country, picture } = req.body;
//   userModel.findByOne
//   let user = await userModel.findOne({ userName });
//   let userId = user._id;
//   user = await userModel.findByIdAndUpdate(userId,req.body,{
//     new:true
//   })
//   if (user && !contactNumber) {
//     //user exists [not new user]
//     return res.status(200).json({
//       message: "User exits",
//     });
//   }
//   //user doesn't exist

//   await user.save();
//   res.status(201).json({
//     message: "User data updated",
//     user
//   });
// });

//handling 404 error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal server error";
  res.status(status).send(message);
});

// app.use(errorMiddleware);
module.exports = app;
