// const cookieSession = require("cookie-session");
const session = require("express-session");
const cors = require("cors");
const express = require("express");
const passport = require("passport");
const app = express();
require("./passport");
const authRoute = require("./auth.js");
const crypto = require("crypto");
const secretSession = crypto.randomBytes(32).toString("hex");
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["CustomCodeEditor"],
//     maxAge: 24 * 60 * 60 * 1000,
//   })
// );
app.use(
  session({
    secret: secretSession,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day (adjust as needed)
    },
  })
);

console.log(secretSession);
//This is a middle-ware that  initialises Passport
app.use(passport.initialize());
//This is a middleware that alters the request object and change the 'user' value
//that is currently the session id  (from the client cookie) into the true deserialized user object
app.use(passport.session());
//This is allow to send request from our localhost to the http server
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    // methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(5000, () => {
  console.log("Listenning to port 5000. Server is running");
});
