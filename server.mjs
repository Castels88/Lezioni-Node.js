//in questa lezione vedremo come creare callback tramite
//il metodo middleware
//come prima cosa andiamo ad utilizzare l express metodo per iniziare la nostra app server
//per avviare express si manda questo comando  npx nodemon server.mjs
import express from "express";

const app = express();
//come prima cosa dobbiamo usare il metodo use al quale all interno andremo ad assegnare
// una funzione per gestire header del nostro server,
//come in ogni creazione di server servono gli argomenti request => per richiedere i dati
// e response=> per avere un responso dei dati raccolti
//in middleware alcosa particolare e che si deve mettere la keyword next come argomento e richiamarla alla
//fine per far si che midddleware funzioni
app.use(function setHeaderMiddleware(request, response, next) {
  console.log("called: setHeaderMiddleware");

  response.setHeader("X-Custom-Header", "1234");

  next();
});
//con questa stringa di codice possiamo andare a setare il caso il nostro errore
//quindi aggiungendo al next il new error possiamo settare l-eventuale errore che dovra
//darci il nostro server

// app.use(function middlewareWithAnError(request, response, next) {
//   console.log("called: middlewareWithAnError");

//   next(new Error("There has been an error."));
// });

//questo andra a manadare i dati al nostro server
app.use(function sendDataMiddleware(request, response, next) {
  console.log("called: sendDataMiddleware");

  response.json({ data: "This is some data" });

  next();
});

app.use(function errorHandlerMiddleware(error, request, response, next) {
  console.log("called: errorHandlerMiddleware");

  response.status(500);

  response.json({ message: error.message });

  next();
});

app.listen(3000);
