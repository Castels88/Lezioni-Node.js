// in questa lezione vedremo come scrivere call back functione come essere richiamano
// funzioni asincrone
//abbimao 3 console log e se runniamo i file verranno eseguiti in sequenza
//possiamo pero decidere di farle partire in tempo diversi tramite il settimeout
console.log("1. hello elio ");
setTimeout(() => {
  console.log("2. tutto bene");
}, 2000);
console.log("3. arrivederci");
//il risultato sara infatti che tutto bene arrivera dopo
// $ node example.mjs
// 1. hello elio
// 3. arrivederci
// 2. tutto bene
// questa si chiama asincronia in questa maniera si possono fare sveriate cose
// anche http request
//vediamo come si fa con node js creaimo un nuovo file => example2.mjs
