//vediamo ora come creare promises con node system
import * as fs from "node:fs/promises";
import { readFile } from "node:fs/promises";
//andiamo a richiamare il readfile metodo
fs.readFile("file-1.txt", { encoding: "utf-8" });
//runnando la pagine non ritonera niente
//proviamo ad inserire il fs dentro un consolelog
console.log(fs.readFile("file-1.txt", { encoding: "utf-8" }));
//risultato la promise sara in pending
// $ node example2.mjs
// Promise { <pending> }
// come abbiamo fatto prima adesso dobbiamo compilare la promise col metodo then in modo da raggiungere
// il secondo status il full filled e mettere anche il reject
fs.readFile("file-1.txt", { encoding: "utf-8" }).then(
  function (value) {
    console.log("value", value);
  },
  function (error) {
    console.error(error);
  }
);
//risultato
// $ node example2.mjs
// Promise { <pending> }
// value These are the contents of file 1.
//-------------------------------------------------------//
//vediamo in caso volessimo generare un errore tipo proviamo a passargli un file che non abbiamo
fs.readFile("file-0.txt", { encoding: "utf-8" }).then(
  function (value) {
    console.log("value", value);
  },
  function (error) {
    console.error(error);
  }
);
//risultato ci dra che  c e un errore perche manca il file-0
// $ node example2.mjs
// Promise { <pending> }
// [Error: ENOENT: no such file or directory, open 'C:\Users\caste\Desktop\Lezioni Node.js\file-0.txt'] {
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'C:\\Users\\caste\\Desktop\\Lezioni Node.js\\file-0.txt'
