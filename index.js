const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/students.route.js"));


(async () => {
  try{
     mongoose.connect("mongodb+srv://gaitukaev777:IAKHia22@cluster0.xprg9jb.mongodb.net/")
    console.log('Mongo connected')
  }
  catch(error){
    console.log(error)
  }
})()

app.listen(4000, () => {
  console.log('Сервер запущен успешно')
})