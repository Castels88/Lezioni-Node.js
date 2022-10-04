//in questa lezione vedremo come andare a creare un Https request con node 
// andremo ad utilizzare il metodo createServer
// come prima cosa il file deve essere in mjs
// 2) andiamo ad importare il createserver metodo da node
import { createServer } from 'node:http'
//3) andiamo a creare la nostra costante con il server metodo
// questo metodo va eserguito con una callback i cui parametri saranno sempre 2
//request e response 
//=> request e un oggetto che permette di fare la richiesta al nostro impotetico server
//=> response invece sara un oggetto di risposta al nostro request
//4) entrambi request e response hanno dei metodi che servono a gestire o la richiesta o il responso
const server = createServer((request, response)=>{
    //5)vogliamo che spunti un messagio quindi facciamo un consolelog
    console.log('messaggio ricevuto')
    //6)andiamo adesso ad impostare lo stutus del nostro server si utilizza statusCode e si imposta al valore che vogliamo 
    request.statusCode=200;
    //7)dopo si deve inviare la richiesta di settaggio all header del server
    //8)il set header prevede 2 parametri 
    //9) il primo che sara il nome del contenitore 
    //10)il secondo che cosa andiamo a mettere dentro il contenitore in questo caso ''un testo in html ''
    response.setHeader('Content-type','text/html')
    //11)adesso dobbiamo creare il nostro response body esiste un metodo chiamato end()
    //il quale stoppa il response header e fa iniziare il nostro body
    //12)il metodo end richiede che venga specificato il tipo di pagina,il contenitore e anche eventuali tag come in questo caso un h1 
    // con il messaggio che poi dobbiamo chiudere come in qualsiasi testo html
    response.end('<html><body><h1>this message was created with node</h1></body></html>')

} ) 
//13)una volta finita la nostra const server dobbiamo  impostare il listen della costante tramite ilmetodo listen()
//come prima cosa dobbiamo impostare la porta del nostro server 
// la seconda cosa da fare e passare una call back function in cui diremo che 
// deve essere mandato un messagio che il nostro server sta runnando
server.listen(3000,()=>{
console.log('the server is running at http://localhost:30000')
});
//per runnare il nostro server nel terminle si scrive node example.mjs e cosi partira