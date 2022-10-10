import * as fs from "node:fs/promises";

//in questa lezione vedremo come utilizzare il metodo async await per le nostre promise
//per creare una async function si deve mettere async davanti alla funzione
// mentre l await si mette davanti al valore di ritorno della funzione
async function outputFile() {
  const data = await fs.readFile("file-1.txt", { encoding: "utf-8" });
  console.log("data:", data);
}
outputFile();
//risultato
// $ node example.mjs
// data: These are the contents of file 1.
