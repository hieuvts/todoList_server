const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true });
module.exports = mongoose.model("Todo", Todo);