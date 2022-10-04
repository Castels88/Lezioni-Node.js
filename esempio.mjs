//in questa lezione vedremo come aggiungere valori in json al nostro server
//per fare cio dobbiamo creare una constante che ospitera i valori del json 'const jsonResponseBody'
// alla quale associeremo il metodo stringify che permette di raccoglie array o oggetti
// nel nostro caso raccolgieremo i dati da un oggetto
// e nel response.end andiamo ad inserire la constante json
//altra cosa che dobbiamo modificare e che nel responde header non avremo piu un html ma un json
//se andiamo a runnare il nostro server con  node esempio.mjs => vedremo nella pagina {"location":"Earth"}
//allo stesso tempo possiamo mandare delle richiesta al nostro server con =>curl -v localhost:3000/
//risultato {"location":"Earth"}* Connection #0 to host localhost left intact
import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Earth" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});