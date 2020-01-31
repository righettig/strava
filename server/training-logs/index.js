var express = require('express');
var app = module.exports = express();

let traininglogsData = [
  { 
    id: 1, 
    username: "giacomo", 
    date: "2020-01-28", 
    fitness_score: 5, 
    motivation_score: 2, 
    entry: "good fitness, not really motivated" 
  },
  { 
    id: 2, 
    username: "giacomo", 
    date: "2020-01-29", 
    fitness_score: 3, 
    motivation_score: 3, 
    entry: "just an average day" 
  },
  { 
    id: 3, 
    username: "giacomo", 
    date: "2020-01-30", 
    fitness_score: 2, 
    motivation_score: 5, 
    entry: "superb motivation, my body is weak though!" 
  },
]

app.get("/api/traininglogs", function (req, res) {
  console.log("GET traininglogs");

  res.json(traininglogsData)
});

app.get("/api/traininglog/:id", function (req, res) {
  console.log("GET traininglog");
  console.log(req.params.id);

  const index = traininglogsData.findIndex(el => el.id == req.params.id);
  if (index > -1) {
    res.json(traininglogsData[index]);

  } else {
    res.end(404);
  }

  res.end();
});

app.post("/api/traininglog", function (req, res) {
  console.log("POST traininglog");
  console.log(req.body);

  let data = req.body;
  data.id = traininglogsData.length + 1;

  traininglogsData.push(data);

  res.end(JSON.stringify(data));
});

app.delete("/api/traininglog/:id", function (req, res) {
  console.log("DELETE traininglog");
  console.log(req.params.id);

  const index = traininglogsData.findIndex(el => el.id == req.params.id);
  if (index > -1) {
    traininglogsData.splice(index, 1);

  } else {
    res.end(404);
  }

  res.end();
});

app.put("/api/traininglog/:id", function (req, res) {
  console.log("PUT traininglog");
  console.log(req.params.id);
  console.log(req.body);

  const index = traininglogsData.findIndex(el => el.id == req.params.id);
  if (index > -1) {
    traininglogsData.splice(index, 1);

    let data = req.body;
    traininglogsData.push(data);

    res.end(JSON.stringify(data));

  } else {
    res.end(404);
  }
});