const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = 8000;

const todoRoutes = require("./routes/Todo");

const app = express();

mongoose
    .connect("mongodb://localhost:27017/todoapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("Connected to the database");
    });

//middileware for cors to allow cross origin resource sharing
app.use(cors());
//middleware to convert our request data into json format
app.use(express.json());
//include the todoRoutes
app.use("/api", todoRoutes);
//start the server - port 8000
app.listen(port, () => {
    console.log(`Listening to ....:${port}`);
});