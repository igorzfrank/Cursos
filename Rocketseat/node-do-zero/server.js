// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   response.write("Oi");
//   console.log("oi");
//   return response.end();
// });

// server.listen(2828);

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

// POST http://localhost:2828/videos
// POST http://localhost:2828/videos/1

// Request Body

// Route Parameter

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title: title,
    descrption: description,
    duration: duration,
  });
  // console.log(database.list());

  return reply.status(201).send(); // HTTP 201 - Algo foi criado
});

server.get("/videos", (request) => {
  const search = request.query.search;

  console.log(search);

  const videos = database.list(search);

  return videos;
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send(); //HTTP 204 - Sucesso mas sem conteudo;
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  database.delete(videoId);
  return reply.status(204).send();
});

server.listen({
  port: 2828,
});
