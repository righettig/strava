require("dotenv").config();

const cors       = require("cors");
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();

// ------------------------------
// Load the middlewares
// ------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Activities
//------------
var activities = require('./activities');
app.use(activities);


// Training logs
//---------------
var trainingLogs = require('./training-logs');
app.use(trainingLogs);


app.listen("3120");
console.log("Listening on localhost:3120");