//in questa lezione vedremo come utilizzare gli event
//quando una state cambia
import { EventEmitter } from "events";
//come prima cosa dobbiamo creare un nuovo evento con questa keyword EventEmitter()
const emitter = new EventEmitter();

//come secondo passo diamo un listener al nostro evento con i comandi di event
emitter.on("data", (data) => {
  console.log(data);
});
//possiamo decidere si ricevere questi dati ogni secondo con setInterval
setInterval(() => {
  emitter.emit("data", "this is some data");
}, 1000);
