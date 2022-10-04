// in questa lezione vedremo come usare i package che abbiamo installato
//andiamo ad installare il cli-color package con npm 
//vediamo come usare questo package
//ogni file in node e un modulo
//per poter usare questo package dobbiamo richiamarlo in una costante con il metodo required
//ora che lo abbiamo inserito cli-color permette di cambiare il colore delle stringhe 
//andiamo a modificare la nostra stringa e ad aggiungere cli-color alla stringa
const cliColor = require('cli-color')  
function outputMessage(message){
    console.log(cliColor.yellow(`the message is ${message}`) )
}
outputMessage('hey hey')