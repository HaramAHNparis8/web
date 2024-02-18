const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()//요정도는 외워두는 게 좋다
const cors = require("cors");
const app = express();
app.use(cors());

mongoose.connect(process.env.DB,{
	useNewUrlparser: true,
	useUnifiedTopology: true,
}).then(()=>console.log("connected to database"));

module.exports = app;

