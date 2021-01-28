const express = require("express");
const cors = require("cors");

const { v4: uuidv4, validate } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const { title, url, techs } = request.query;

  const results = title ? repositories.filter(repository => repository.title.includes(title)) : repositories
  
  return response.json(results);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {id: uuidv4(), title: title, url: url, likes: 0}

  repositories.push(repository);

  console.log(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
