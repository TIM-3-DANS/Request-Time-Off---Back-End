const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
require("dotenv").config();
const api = require("./routes/api");
const login = require("./routes/login/login.routes");
const register = require("./routes/register/register.routes");
const db = require("../models");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const withAuth = require("./withAuth");
const serverless = require("serverless-http");


app.use(session({
    secret: process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true,
    cookie: {
        secure: 'auto'
        //https: true
    }
}))

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001",
  })
);

db.sequelize.sync({ alter: true });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.json());
app.use("/api", api);
app.use("/login", login);
app.use("/register", register);
app.get("/checkToken", withAuth.checkToken);


// app.listen(process.env.PORT, () => {
//   console.log(`Server up and running on port ${process.env.PORT}`);
// });

app.use(`/.netlify/functions/api`, api);
module.exports = app;
module.exports.handler = serverless(app);

