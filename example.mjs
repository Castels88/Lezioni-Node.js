import * as fs from "node:fs/promises";

//in questa lezione vedremo come utilizzare il metodo async await per le nostre promise
//per creare una async function si deve mettere async davanti alla funzione
// mentre l await si mette davanti al valore di ritorno della funzione
//se volessiamo adesso inserire i possibili errori che possono derivare dalla
// funzione si utilizza il try and catch
async function outputFile() {
  try {
    const data = await fs.readFile("file-1.txt", { encoding: "utf-8" });
    console.log("data:", data);
  } catch (error) {
    console.error(error);
  }
}
outputFile();
//risultato
// $ node example.mjs
// data: These are the contents of file 1.

//-------------------------------------------------------//
//vediamo come possiamo inserire piu file all interno di una funzione cosi
async function outputFiles() {
  try {
    const file1Data = await fs.readFile("file-1.txt", { encoding: "utf-8" });
    console.log("file1Data:", file1Data);

    const file2Data = await fs.readFile("file-2.txt", { encoding: "utf-8" });
    console.log("file2Data:", file2Data);

    const file3Data = await fs.readFile("file-3.txt", { encoding: "utf-8" });
    console.log("file3Data:", file3Data);
  } catch (error) {
    console.error(error);
  }
}
outputFiles();
//risultato
// file1Data: These are the contents of file 1.

// file2Data: These are the contents of file 2.

// file3Data: These are the contents of file 3.

//-------------------------------------------------------------------//
//vediamo adesso come impostare piu function insieme
//e non in modo parallelo come abbiamo fatto prima
//in questo caso si dovra utilizzare la keyword Promise.all che accetta un array di dati
//che saranno le nostre funzioni

async function allTogheder() {
  try {
    const data = await Promise.all([
      fs.readFile("file-1.txt", { encoding: "utf-8" }),
      fs.readFile("file-2.txt", { encoding: "utf-8" }),
      fs.readFile("file-3.txt", { encoding: "utf-8" }),
    ]);
    console.log("data:", data);
  } catch (error) {
    console.error(error);
  }
}
allTogheder();
//risultato
[
  "These are the contents of file 1.\r\n",
  "These are the contents of file 2.\r\n",
  "These are the contents of file 3.\r\n",
];
