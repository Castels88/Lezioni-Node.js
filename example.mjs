//in questa lezione vedremo come andare a testare il nostro server 
// tramite il browser e un command line
//1)come prima cosa andiamo ad aprire git bash e mandiamo il comando node example.mjs
//2)adesso andiamo nel browsewr e inseriamo il server e vedremo il nostro messaggio
//3)un altra che posso fare direttamente dal terminale e mandare una richiesta 
//e vedere la risposta del server il comando per fare cio nel terminale e' curl http://localhost:3000
// se vogliamo vedere maggiori info possiamo sempre utilizzare il comando curl --verbose localhost:3000/
import { createServer } from 'node:http'

const server = createServer((request, response)=>{
    console.log('messaggio ricevuto')
    request.statusCode=200;    
    response.setHeader('Content-type','text/html')   
    response.end('<html><body><h1>this message was created with node!</h1></body></html>')
} ) 

server.listen(3000,()=>{
console.log('the server is running at http://localhost:3000')
});
