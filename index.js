const express = require("express");
const path = require("path");
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
require("dotenv").config()


const authroute=require("./server/routes/router.js")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

const JWT_SECRET=process.env.jwt;

const connectdb = require("./server/database/connection");
const PORT = process.env.port;
connectdb();


//set view engine
app.set("view engine", "ejs");
// app.set("views",path.resolve(__dirname,"views/"))

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

console.log(__dirname)
//routes
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});


app.use('/api',authroute)