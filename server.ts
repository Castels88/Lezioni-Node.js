//importiamo express
import express from "express";
import "express-async-errors";

// creaimo una costante che richiama il nostro server
const app = express();
//con express e molto importante installare un altro pacchetto
//che sarebbe express async errors molto utile per le funz async await e le promise
// e lo importiamo

// adesso che abbiamo tutto quello che serve
// dobbiamo specificare la nostr route treamite il metodo GET
//in cui mettere lo / come homepage route, e poi callback function
//con la request che mi dovra ritonare
app.get("/", (request, response) => {});
