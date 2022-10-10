//qui dentro andiamo a crare il nostro test enviorement
//prossimo passaggio andare nel package json e modificare la stringa test
// dove non avremo nessun ritorno con jest
//e adesso siamo pronti anche a gestire i nostri test sul  server
module.exports = {
    preset: "ts-jest",
    testEnviroment: "node",
    verbose: true,
};
