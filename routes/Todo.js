const express = require("express");
const router = express.Router();

const {
    createTodo,
    getTodoById,
    deleteTodo,
    getAllTodos,
    getTodo,
    updateTodo,
} = require("../controllers/Todo");

//fetch data from the url

router.param("todoId", getTodoById);
//get all todos
router.get("/todos/", getAllTodos);
//get a single todo
router.get("/todo/:todoId/", getTodo);
//create a todo
router.post("/todo/create/", createTodo);
//update the todo
router.put("/todo/:todoId/update", updateTodo);
//delete the todo
router.delete("/todo/:todoId/delete", deleteTodo);

module.exports = router;