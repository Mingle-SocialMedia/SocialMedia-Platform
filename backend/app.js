const express = require("express");
const app = express();
const cors=require('cors')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const router=require('./router/router.js')
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods:['Get','Post','Delete','Patch']
}));
const Port=process.env.PORT||6700;
const DbConnection = async () => {
    try {
      await mongoose.connect('mongodb+srv://kmugeis2005:dontforgetit@mugeishhero.ggr3iod.mongodb.net/Mingle?retryWrites=true&w=majority&AppName=mugeishhero');
      console.log("DB Connection Success");
    } catch (error) {
      console.error("Oops! Server Error: " + error);
    }
  }
  DbConnection();
app.set("view engine","ejs");
app.use("/", router);
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});

