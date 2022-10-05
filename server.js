//in questa lezione andremo a creare la nostra prima
//API integration test 
//faremo una richiesta alla nostra API e vedremo se il response e 
//quello che ci aspettiamo
//andiamo a creare un app con un server test 
//in cui diciamo di creare una nova app e di impostarla sulla porta 3000
//andiamo nella app.js =>

//ora in ordine per fare un test andiamo ad installare supertest npm
//andiamo a creare un file in cui utilizzeremo super test test.js=>

const createApp = require("./app");

const app = createApp();

app.listen(3000,()=>{
    console.log(`server running in http://localhost:3000`)
})
