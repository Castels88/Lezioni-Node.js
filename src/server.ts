//come prima cosa andiamo a runnare il server con npm run build per far creare
// il nostro server.js e voi mandiamo in terminale node dist/server.js
//una volta che il server runna adesso andiamo a fare una curl request $ curl localhost:3000/ -v
import express from "express";
import "express-async-errors";

const app = express();
//se noi andiamo a cambiare il response di questo messaggio con "this is the Space Fact API!!!"
//e andassimo a runnare di nuovo con curl vedremo che il messaggio non cambia
//questo succede perche node non va a ricompilare il file server.js
// per vedere questo cambiamento dovremmo fare di nuovo npm run build e poi node dist/server.js in modo da vedere la modifica
//per velocizzare questo processo andiamo a modificare lo script nel nostro package json =>
//andremo ad aggiungere questa stringa  =>  "build:dev": "tsc --watch" il watch vuol dire che lo script andra direttamente a vedere s eci sono stati cambiamenti
//mandando il comando npm run build:dev il terminale entrera nella modalita watch mode e vedra gli eventuali cambi del server.ts
//adesso quello che dobbiamo fare e fare in modo che il server dopo che abbia notato un cambio riparta da solo per far cio dobbiamo
//andare a creare un altro script nel json => "start": "node --enable-source-maps dist/server.js" e adesso runniamo npm run start
//in questo modo il server parte immediatamente ma non da solo per far si che parta da solo dobbiamo installare nodemon
//e andiamo a creare un altro script start  "start:dev":"nodemon --watch dist/server.js" e runniamo il server con npm run start:dev
//ultima cosa che dobbiamo installare e concurrently il quale fa startare sia lo script di start che quello di build
//e di conseguenza andiamoia creare un altro script per far partire tutto insieme  "dev":"npm run build && concurrently 'npm:build:dev' 'npm:start:dev'"
// e infine scriviamo nel terminale npm run dev e il nostro server partira tranquillamnte .
//-----------------------------------------------------------//
// adesso se andiamo a cambiare di nuovo il messaggio del server verra direttamente cambiato anche quando runniamo i server



app.get("/", (request, response) => {
    response.send("this is the Space Fact API !!!!");
});

const port = 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});
