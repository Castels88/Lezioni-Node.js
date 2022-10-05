//andiamo a richiamare il create server 
//creaiamo la function create app che mi ritornera il create server
// settato con lo status 200  con un header che imposto io 
// e come body il risultato del json di ritorno con solo la location
// e concludiamo tutto col metodo end()
// per runnare questo server andiamo nel terminale e scriviamo node serves.js
//adesso che il server sta runnanno aprimo un altro terminale
// e facciamo una request con curl al nostro localhost e vedremo che il risultato sara 
// => {"location":"Mars"}
//torniamo al server.js =>
const {createServer} = require("node:http")

function createApp(){
    return createServer((request,response)=>{
        response.statusCode=200;
        response.setHeader("Content-Type","applicatio/json");

        const jsonResponseBody = (JSON.stringify({location:"Mars"}))

        response.end(jsonResponseBody)
    })
}

module.exports= createApp