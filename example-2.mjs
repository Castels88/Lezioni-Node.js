//vediamo come creare un altro evento con il modulo creareReadStream
import { createReadStream } from "fs";
//andiamo a richiamare il file 4 e lo codifichiamo
const file = createReadStream("file-4.txt", { encoding: "utf-8" });
//andiamo ad emettere un listener per la const file
file.on("data", (chunk) => {
  console.log("chunk:", chunk.toString("utf-8"));
});
//andiamo a creare un evento di fine con la keyword end
file.on("end", () => {
  console.error("end of the file stream");
});
//andiamo a maneggiare e creare possibili errori
file.on("error", (error) => {
  console.error(`si e verificato un ${error}`);
});
//risultato
// $ node example-2.mjs
// chunk: This is line one.
// This is line two.
// This is line three.
// end of the file stream
