//in questa lezione vedremo come testare la nostra applicazione
//in modo da prevenire bag ed eventuali problemi
//vedremo come testare la mostra applicazione con curl
//se andiamo nel terminal e scriviamo curl e una API tipo 'https://jsonplaceholder.typicode.com/todos/1'
// avremo il risultato della risposta del server con un oggetto 
//{
//    "userId": 1,
//   "id": 1,
//    "title": "delectus aut autem",
//    "completed": false
//  }
//se alla API alla fine metto --include possimao vedere la headers della API 
//per vedere il full response si mette --v dopo la API
//possiamo anche inviare un nostro response all API 
//con il comando -h'"qui scrivere quello che vogliamo "
// andiamo a creare una resourse con un API che da come response dei post 
// andiamo a modificare il response in modo da avere piu header con i titoli
// come prima cosa si fa curl https://jsonplaceholder.typicode.com/posts \`=>attenzione per andare a capo serve 
//il \ e poi shoft invio una volta a capo possiamo inserire gli header che vogliamo 
//--header "accept:application/json " \=>primo header
//un secondo header --header "content-type:application\json" \
//e poi possiamo fare la request al nostro body con un altro comando 
//--data e un formato json 
//e alla fine si manda il codice -v per mandare il verbose 
//mandando l'invio avremo tutti i dati in risposta dal server e possiamo anche 
// inserirli all'interno di un file.json tipo => post.json 
// e per inserire i dati nel file si aggiunge @post.json alla stringa di codice con data
// curl https://jsonplaceholder.typicode.com/posts --header "accept:application/json " --header "content-type:application\json" --data @post.json -v
//possimao anche cancellare request mettendo alla fine della API --request DELETE -v
//nel ritorno non avromo piu titoli o id ma un oggetto vuoto
//possiamo anche vedere il comando di output della nostra API 
//con questo comando curl https://jsonplaceholder.typicode.com/posts/1 --output post-response.json
//possiamo entrare dentro il risultato di questo comando con il comando man curl