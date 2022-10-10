//in questa lezione vedremo come creare e usare promises
//andiamo a creare una promise questa avra al suo interno
//una call back function con 2 argomenti resolve and reject
//resolve serve a risolvere la promise quando abbiamo la value
//se qualcosa va male con reject possiamo stabilire degli errori
const someTask = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("this is some data"), 2000);
});
console.log(someTask);
//noteremo un risultato interessante dira che Promise { <pending> }
//le promis hanno 3 stati: 1)pending 2)full fill quando tutto e compilato 3)rejected
//per continuare la nostra promis dobbiamo usare il .then metodo
//il primo parametro e' il full fill che dobbiamo riempiro con quello che vogliamo
//sia contenuto nella promise e loggiamo la value e la promise stessa per vedere cosa succede
//dopo andiamo a creare il caso in cui venga rejected il cui valore chiameremo reason
someTask.then(
  function (value) {
    console.log("value:", value);
    console.log("someTask:", someTask);
  },
  function (reason) {
    console.log("reason:", reason);
    console.log("someTask:", someTask);
  }
);
//quindi adesso abbiamo settato tutti gli status della promise
//partira come pending poi avremo il then con la funzione che riempira la promise
// e alla fine se qualcosa andra male abbiamo il reject
// risultato
// $ node example.mjs
// Promise { <pending> }
// value: this is some data
// someTask: Promise { 'this is some data' }
//-------------------------------------------------------------------------------------//

//mettiamo caso volessi creare un errore per vedere come si comporta la promise
const someTask2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("qualcosa e' andato storto")), 2000);
});
console.log(someTask2);

someTask2.then(
  function (value) {
    console.log("value:", value);
    console.log("someTask2:", someTask2);
  },
  function (reason) {
    console.log("reason:", reason);
    console.log("someTask2:", someTask2);
  }
);
//risultato
// someTask: Promise {
//     <rejected> Error: qualcosa e' andato storto
//         at Timeout._onTimeout (file:///C:/Users/caste/Desktop/Lezioni%20Node.js/example.mjs:38:27)
//         at listOnTimeout (node:internal/timers:559:17)
//         at processTimers (node:internal/timers:502:7)
//   }
