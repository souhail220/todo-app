const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const TodoEntitie = require("./entities/TodoEntitie");

const PORT = 8000;

// init app
const app = express();

const connectionUrl = "mongodb://localhost:27017/todoDb";

mongoose
  .connect(connectionUrl)
  .then(() => console.log("DataBase connection successful"))
  .catch((error) => console.log(error.message));

const todoSchema = mongoose.Schema(TodoEntitie, { timestamps: true });

const Todo = mongoose.model("todo", todoSchema);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  try {
    res.render("index", { title: "List TODO" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/add-todo", (req, res) => {
  try {
    res.render("newTodo", { title: "Add TODO" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/update-todo", (req, res) => {
  try {
    res.render("updateTodo", { title: "Update TODO" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/delete-todo", (req, res) => {
  try {
    res.render("deleteTodo", { title: "Delete TODO" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// listen to server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
