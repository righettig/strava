// -------------------------------
// Import Node Modules
// -------------------------------
require("dotenv").config();
const cors = require("cors");
const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");

// ------------------------------
// Create express app
// ------------------------------
const app = express();

// ------------------------------
// Load the middlewares
// ------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pusher = new Pusher({
  appId: `${process.env.PUSHER_APP_ID}`,
  key: `${process.env.PUSHER_API_KEY}`,
  secret: `${process.env.PUSHER_API_SECRET}`,
  cluster: `${process.env.PUSHER_APP_CLUSTER}`,
  useTLS: true
});

// -------------------------------
// Create app routes
// -------------------------------
app.post("/update", function (req, res) {
  // -------------------------------
  // Trigger pusher event
  // ------------------------------
  pusher.trigger("events-channel", "new-like", {
    activityId: `${req.body.activityId}`,
    kudos: `${req.body.kudos}`
  });
});

app.listen("3120");
console.log("Listening on localhost:3120");