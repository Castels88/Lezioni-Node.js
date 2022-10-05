//in questo file andremo ad importare la funzione sum
const sum = require("./sum.js")
//adesso dobbiamo andare ad utilizzare dei comandi propri di jest 
//dobbiamo lanciare il metodo test
//al quale dovremo ordinare di aggiungere 1+2 e uguale a 3
//poi dobbiamo passare un call back function che testera la nostra funzione
test("adds 1+2 egual 3",()=>{
expect(sum(1, 2)).toBe(3)
})
//andiamo a lanciare npm test