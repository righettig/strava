var express = require('express');
var app = module.exports = express();

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: `${process.env.PUSHER_APP_ID}`,
  key: `${process.env.PUSHER_API_KEY}`,
  secret: `${process.env.PUSHER_API_SECRET}`,
  cluster: `${process.env.PUSHER_APP_CLUSTER}`,
  useTLS: true
});

app.post("/update", function (req, res) {
  console.log("update");
  console.log(req.body);

  // -------------------------------
  // Trigger pusher event
  // ------------------------------
  pusher.trigger("events-channel", "new-like", {
    activityId: `${req.body.activityId}`,
    kudos: `${req.body.kudos}`
  });

  res.end();
});

app.post("/activity-new", function (req, res) {
  console.log("activity-new");
  console.log(req.body);

  pusher.trigger("events-channel", "new-activity", {
    activity: req.body.activity
  });

  res.end();
});