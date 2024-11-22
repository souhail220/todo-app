const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = 8000;

// init app
const app = express();

const connectionUrl = "mongodb://localhost:27017/todoDb";

mongoose
  .connect(connectionUrl)
  .then(() => console.log("DataBase connection successful"))
  .catch((error) => console.log(error.message));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/add-todo", (req, res) => {
  try {
    res.render("newTodo");
  } catch (error){
    res.status(500).json({message: error.message});
  }
})

app.get("/update-todo", (req, res) => {
  try{
    res.render("updateTodo");
  } catch (error){
    res.status(500).json({message: error.message});
  }
})

app.get("/delete-todo", (req, res) => {
  try{
    res.render("deleteTodo");
  } catch (error){
    res.status(500).json({message: error.message});
  }
})

// listen to server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
