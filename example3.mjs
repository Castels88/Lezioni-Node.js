import * as fs from "node:fs/promises";
import { readFile } from "node:fs/promises";
//vediamo adesso come implementare il metodo catch al metodo then.
//prettamente il metodo catch serve a passare l errore della nostra promise
//quindi dentro il catch mettiamo la funzione di errore che completera lo status reject della promise
fs.readFile("file-9.txt", { encoding: "utf-8" })
  .then(function (value) {
    console.log("value", value);
  })
  .catch(function (error) {
    console.error(error);
  });
//risultato
// $ node example3.mjs
// [Error: ENOENT: no such file or directory, open 'C:\Users\caste\Desktop\Lezioni Node.js\file-9.txt'] {
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'C:\\Users\\caste\\Desktop\\Lezioni Node.js\\file-9.txt'
// }
