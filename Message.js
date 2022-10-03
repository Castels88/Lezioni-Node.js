// esistono 2 tipi di moduli
// i moduli permettono di organizzare il nostro codice e di esportare
// ad esempio una funzione da un file ad un altro file
// i moduli posso essere Common module come questo 
// con module.exports possiamo esportare la funzione nel file 
// script.js =>
function txtMessage(message){
    console.log(`the message is ${message}`)
}
export default txtMessage





    // function txtMessage(message){
    //     console.log(`the message is ${message}`)
    // }
    // module.exports = txtMessage
