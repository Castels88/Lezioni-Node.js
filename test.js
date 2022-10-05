//in questo file andremo ad importare supertest
//e anche la nostra app 
const supertest = require("supertest")
const createApp = require("./app.js")
//successivamente diremo di creare una nuova instanza di applicazione
const app = createApp()
//adesso andiamo a utilizzare supertest per accellerare il server e ci passiamo la nostra app
const request = supertest(app);

//adesso a ndiamo ad utilizzare la keyword test()di jest
//dentro test dobbiamo mettere il metodo get che mi restituira una async function
test("GET /", async ()=>{
    const response = await request.get("/")
    .expect(200)
}) 