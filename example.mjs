import express from "express";
const esercizio = [{ name: "elio" }];
const app = express();
app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  next();
});
app.get("/", (request, response, next) => {
  response.send(esercizio);
});
app.listen(3000, () => {
  console.log("server is on");
});
