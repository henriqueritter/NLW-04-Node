import 'reflect-metadata';
import express from "express";
import './database';
 
const app = express();

// app.use(express.json());

app.get("/", (request, response) => {
  return response.send("Hello World");
});

app.post("/", (request, response) => {
  return response.json({ msg: "teste" });
});

app.listen(3333, () => console.log("Server is up!"));
