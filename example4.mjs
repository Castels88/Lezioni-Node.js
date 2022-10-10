import * as fs from "node:fs/promises";
import { readFile } from "node:fs/promises";
//vediamo adesso come concatenare promise in questo modo
//andiamo a modificare la value in modo da rendere  chiaro il valore di ogni promise che faremo
//questa volta si vede mandare il metodo then richiamare la funzione con il return e rimandare il
//codice per richiamre il file che ci serve
//e poi un altro then con il risultato che si aspetta dalla ricezione del dato
// la cosa figa e che l errore varra per entrambe le promise

fs.readFile("file-1.txt", { encoding: "utf-8" })
  .then(function (file1Data) {
    console.log("file1Data", file1Data);
  })
  .then(() => {
    return fs.readFile("file-2.txt", { encoding: "utf-8" });
  })
  .then((file2Data) => {
    console.log("file2Data:", file2Data);
  })
  .then(() => {
    return fs.readFile("file-3.txt", { encoding: "utf-8" });
  })
  .then((file3Data) => {
    console.log("file3Data:", file3Data);
  })
  .catch(function (error) {
    console.error(error);
  });
//se mettessimo un file che non abbiamo tipo alla seconda promise verrebbe
//eseguita la prima e il processo si sbloccherebbe alla seconda con l errore
