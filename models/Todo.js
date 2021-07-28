const mongoose = require("mongoose");
const { Schema } = mongoose;
const TodoSchema = new Schema({
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
//convert TodoSchema into a Model we can work with
module.exports = mongoose.model("Todo", TodoSchema);