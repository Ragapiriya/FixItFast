const cors = require("cors");
const express = require("express");
const app = express();
const reservations = require("./routes/reservation");
const authorization = require("./routes/authorization");
const userModel = require("./models/userModel");
const bodyParser = require('body-parser');
const axios = require("axios");
const { auth } = require("express-oauth2-jwt-bearer");
// const unless = require("express-unless");
// const jwt = require("express-jwt");
// const jwks = require("jwks-rsa");
// const errorMiddleware=require('./middlewares/error');
// const cookieParser = require('cookie-parser');

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//middleware- to verify token
const jwtCheck = auth({
  audience: "FixItFast API",
  issuerBaseURL: "https://dev-qro8hjwxug8ea45c.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

// function checkIsAuthenticated (req,res,next){
//     const username = req.auth.username;
//     const reservationId = req.params.id;

//     //?
//     next();
// }

//routes
app.use("/api/v1", reservations);
// app.use("/api/v1", authorization);

app.get("/", (req, res) => {
  res.send("Hello from index route");
});
//checking the jwt token before sending responses.
//only for authenticated user [has valid token]
app.get("/protected", jwtCheck, async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const response = await axios.get(
      "https://dev-qro8hjwxug8ea45c.us.auth0.com/userinfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const userInfo = response.data;
    console.log(userInfo);
    res.send(userInfo);

    // res.send(req.auth);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/api/user", async (req, res) => {
  const { userName, email, name, contactNumber,country, picture } = req.body;
  let user = await userModel.findOne({ userName });
  if (user && !contactNumber) {
    //user exists [not new user]
    return res.status(200).json({
      message: "User exits",
    });
  }
  //user doesn't exist
  user = new userModel({
    userName,
    email,
    name,
    contactNumber,
    country,
    picture,
  });
  await user.save();
  res.status(201).json({
    message: "First Time Login, user saved",
  });
});

app.put("/api/user", async (req, res) => {
  const { userName, email, name, contactNumber,country, picture } = req.body;
  userModel.findByOne
  let user = await userModel.findOne({ userName });
  let userId = user._id;
  user = await userModel.findByIdAndUpdate(userId,req.body,{
    new:true
  })
  if (user && !contactNumber) {
    //user exists [not new user]
    return res.status(200).json({
      message: "User exits",
    });
  }
  //user doesn't exist
  
  await user.save();
  res.status(201).json({
    message: "User data updated",
    user
  });
});



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
