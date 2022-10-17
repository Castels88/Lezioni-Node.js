import "dotenv/config";

import app from "./app";

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});
//andiamo ad aggiungere un console.log
// console.log(process.env);
//noteremo che nel terminale spunteranno  tutte queste variabili
//adesso andiamo a creare un file env in cui configureremo la nostra applicazione
//in cui inseriremo la porta del nostro server e per leggere questo file dobbiamo installare un package dotenv
//facciamo ripartire il nostro server e importiamo dotenv e invece di mettere 3000 alla costante port
//possiamo inserire la env
//e poi andiamo a modificare il package.json in modo da fargli guardare quando runniamo il server il .env file
//aggiumgendo questa stringa "start:dev": "nodemon --watch dist/ --watch .env",
//e adesso ogni volta che cambieremo la porta nel env verra cambiata anche la porta del nostro server
