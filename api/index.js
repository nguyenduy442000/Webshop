const express = require('express');
const cors = require("cors");
const app= express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require('morgan');
dotenv.config();
const productRoute = require("./routes/Product")
const cartRoute = require("./routes/Cart")
const UserRoute = require("./routes/User")
const authRoute = require("./routes/auth")

//Connect database
mongoose.connect((process.env.MONGODB_URL),()=>{
    console.log("Connected to MongoDB")
})

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));


//Routes
app.use("/api/product", productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/user",UserRoute);
app.use("/auth",authRoute)


app.listen(8000,()=>{
    console.log("Server is running ...")
})