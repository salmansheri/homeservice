// importing express, body-parser, mongoose modules
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { admin, user, wbill, tbill, ebill } from "./routes/index.js"; 



// initializing the express as constant app
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// assigning the port
const port = process.env.PORT || 5000;

// connecting the app to the database

mongoose.connect(
  "mongodb+srv://salman484:salman@cluster0.e00knwx.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// checking the database connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection established successfully");
});

app.use("/admin", admin);
app.use("/user", user);
app.use("/tbill", tbill);
app.use("/wbill", wbill); 
app.use("/ebill", ebill); 

// listening on server
app.listen(port, () => {
  console.log("listening on port " + port);
});
