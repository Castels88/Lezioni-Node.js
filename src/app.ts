
import express from "express";
import "express-async-errors";

const app = express();

app.get("/planets", (request, response) => {
    const planets = [
        {name: "Mercury"},
        {name: "Venus"}
    ]

    console.log({planets})

    console.table({planets})

    response.json(planets);
});
export default app
//andiamo ad utilizzare uno di questi metodi nella nostra app come prima cosa avviamo la app
//ogni volta che avvieremo il $ curl localhost:3005/planets -v nel nostro terminale verrano direttamente inseriti i risultati dei console

