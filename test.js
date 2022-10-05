//in questo file andremo ad importare supertest
//e anche la nostra app 
const supertest = require("supertest");
const createApp = require("./app.js");
//successivamente diremo di creare una nuova instanza di applicazione
const app = createApp()
//adesso andiamo a utilizzare supertest per accellerare il server e ci passiamo la nostra app
const request = supertest(app);

//adesso a ndiamo ad utilizzare la keyword test()di jest
//dentro test dobbiamo mettere il metodo get che mi restituira una async function
test("GET /", async ()=>{
    const response = await request.get("/")
    .expect(200)
    //possiamo anche decidere di avere come risposta una header come quella
    //della app 
    .expect("Content-Type","applicatio/json")
    //andiamo a controllare il response del body 
    //nella constate response abbiamo un ritorno di funzione che avra un oggetto 
    //quindi response.body e lo vorremo uguale quindi toEqual()
    // .expect(response.body).toEqual({location: "Terra"})
}) 