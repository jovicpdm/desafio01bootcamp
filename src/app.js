const express = require("express");
const cors = require("cors");

const { v4: uuidv4, validate } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

// function addLike(request, response, next) {
//   const { likes, id } = request.params;

//   const likesAdd = likes + 1

//   const repositoryIndex = repositories.findIndex(repository => repository.id === id);

//   if(!repositoryIndex < 0) {
//     response.status(400).json({ error: "repository not found" });
//   }

//   repositories[repositoryIndex].likes = likesAdd;
  
//   return next();
// }

app.get("/repositories", (request, response) => {
  const { title} = request.query;

  const results = title ? repositories.filter(repository => repository.title.includes(title)) : repositories
  
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {id: uuidv4(), title, url, techs,likes: 0}

  repositories.push(repository);

  console.log(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs, likes } = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(!repositoryIndex < 0) {
    response.status(400).json({ error: "repository not found" });
  }

  const repository = {
    id,
    title,
    url,
    techs,
    likes
  }

  repositories[repositoryIndex] = repository;

  return response.json(repository);

});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(!repositoryIndex < 0) {
    response.status(400).json({ error: "repository not found" });
  }

  repositories.splice(repositoryIndex, 1);

  return response.send('excluido com sucesso');
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  
  const repositoryIndex = repositories.findIndex(repository => repository.id === id)

  if(!repositoryIndex < 0) {
    response.status(400).json({ error: "repository not found" });
  }

  const repository = repositories[repositoryIndex];

  repository.likes = repository.likes + 1;

  return response.json(repository);
});

module.exports = app;
