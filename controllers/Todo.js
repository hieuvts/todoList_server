const Todo = require("../models/Todo");

exports.getTodoById = (req, res, next, todoId) => {
    //todoId comes from the router.param
    // .findById() method will find the todo which has id == todoId
    Todo.findById(todoId).exec((err, todo) => {
        if (err || !todo) {
            return res.status(404).json({
                error: "404 todo not found",
            });
        }
        //store that todo in req.todo so that other functions can use it
        req.todo = todo;
        // Because this is a middleware we have to call the next()
        // which will pass the control to the next function in the middleware stack
        next();
    });
};

exports.getAllTodos = (req, res) => {
    Todo.find()
        .sort("-createdAt")
        .exec((err, todos) => {
            if (err || !todos) {
                return res.status(400).json({
                    error: "Something went wrong in finding all todos",
                });
            }
            res.json(todos);
        });
};

exports.getTodo = (req, res) => {
    return res.json(req.todo);
};

exports.createTodo = (req, res) => {
    const todo = new Todo(req.body);
    todo.save((err, todo) => {
        if (err || !task) {
            return res.status(400).json({
                error: "Something went wrong",
            });
        }
        res.json(todo);
    });
};

exports.updateTodo = (req, res) => {
    // take req.todo from getTodoById() middleware and
    // fetch the todo that user wants to update
    const todo = req.todo;
    // simply change the task of the todo that user want to update by
    // the task that user has sent in req.body.task
    todo.isCompleted = req.body.isCompleted;
    // simply save that updated todo
    todo.save((err, todo) => {
        if (err || !todo) {
            return res.status(400).json({
                error: "Something went wrong while updating",
            });
        }
        // send the updated todo as a json response
        res.json(todo);
    });
};

exports.deleteTodo = (req, res) => {
    // take req.todo from getTodoById() middleware and
    // fetch the todo that user wants to delete
    const todo = req.todo;
    // call .remove() method to delete it
    todo.remove((err, todo) => {
        if (err || !todo) {
            return res.status(400).json({
                error: "something went wrong while deleting the todo",
            });
        }
        // send deleted todo and success message as a json response
        res.json({
            id: todo.id,
            message: "Todo deleted successfully!",
        });
    });
};