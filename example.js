//in questa lezione vedremo come utilizzare il debug della nostra applicazione
//il  console log permette di vedere i valori di tutte le nostre funzioni, constanti , oggetti ecc ecc ad esempio
//creiamo un oggetto

const value = {
  name: 'Mercury',
  diameter: 1234,
  stats: {
    stat1: 5678,
    stat2: 'another stat',
    stat3: {
      speed: { unit: 'mph' },
    },
  },
}
console.log(value) // ci dara tutte le info di questo oggetto
//esiste anche un metodo %S col quale possiamo richiamare la proprieta nel console log
console.log('diameter = %s', value.diameter) //result=> diameter = 1234
// possiamo anche inserire multiple prorieta
console.log('diameter = %s and stat2 = %s', value.diameter, value.stats.stat2) //result => diameter = 1234 and stat2 = another stat
//esiste un altro tipo di console che sarebbe il console.assert il quale verra runnato solo se la condizione sara falsa
console.assert(value.name === 'Mars', 'the planet is not Mars')
//se andassi a mettere come nome Mercury ineve avro il console.assert => Assertion failed: the planet is not Mars
//un altro metodo per debuggin i nostri oggetti e chiamare dentro il console.log(json.stringify())
console.log(JSON.stringify(value)) //=> {"name":"Mercury","diameter":1234,"stats":{"stat1":5678,"stat2":"another stat","stat3":{"speed":{"unit":"mph"}}}}
//vedete che tutto l oggetto verra riformulato come stringa
//un altro metodo e'
console.dir(value) //nolto simile ad console.log ma un po piu ordinato
//risultato
// {
//     name: 'Mercury',
//     diameter: 1234,
//     stats: { stat1: 5678, stat2: 'another stat', stat3: { speed: [Object] } }
//   }
//il punto e che cosi l'oggetto sara diviso in 3 livelli i quali dipendo da evetuali altri oggetti delle proprieta
//quindi se volessi mostrare tutti e 3 i modelli dovrei scrivere cosi
console.dir(value, { depth: 3 }) // oppure per fare piu veloce invece di depth:3 si mette depth: null
// {
//   name: 'Mercury',
//   diameter: 1234,
//   stats: {
//     stat1: 5678,
//     stat2: 'another stat',
//     stat3: { speed: { unit: 'mph' } }
//   }
// }
//adesso vedro tutto l'oggetto

//un altro metodo per mostrare un sacco di info come in un array e'
const value3 = [
  { name: 'Mercury', diameter: 123 },
  { name: 'Venus', diameter: 321 },
  { name: 'Saturn', diameter: 456 },
  { name: 'Neptune', diameter: 654 },
]
console.table(value3) //risultato=> sara un atabella con tutti inostri dati
//vale anche con array di numeri
const value4 = [
  123,
  321,
  456,
  654,
  123,
  321,
  456,
  654,
  123,
  321,
  456,
  654,
  123,
  321,
  456,
  654,
  123,
  321,
  456,
  654,
  654,
  123,
  321,
  456,
  654,
  654,
  123,
  321,
  456,
  654,
  654,
  123,
  321,
  456,
  654,
  654,
  123,
  321,
  456,
  654,
  654,
  123,
  321,
  456,
  654,
]
console.table(value4)
//------------------------------//
//un altro metodo e' console.trace() con il quale possiamo tracciare le nosre funzioni tipo
function doSomething() {
  doSomethingElse()
}
function doSomethingElse() {
  console.trace('questo e un messaggio utile')
}
doSomething()
//noteremo nel terminale che verranno visualizzate le righr in cui vengono eseguite le funzioni
//e sopra la scritta trace con il messaggio che era previsto

//------------------------------------------------------------//
//esiste ancheun metodo per vedere quante volte viene richiamata una funzione
// con console.count()
function doSomething2() {
  console.count('la funzione e stata richiamata')
}

doSomething2()
doSomething2()
//si puo anche resettare il counter
console.countReset('la funzione e stata richiamata') //attenzione bisogna passare lo stesso parametro del count
doSomething2()
doSomething2()
// risultato
// default: 1
// default: 2
// default: 3
// default: 4
//il default puo essere modificato aggiungendo quello che si vuole dentro il count()

//---------------------------//
//ultimo metodo e il console.time() il quale ci dice quanto tempo ci impiega e fare il console
console.time('numbersLoop')
for (let index = 0; index < 10_000; index++) {
  console.log(index)
}
console.timeEnd('numbersLoop')
//coem vedremo alla fine del risultato ci sara default se noi scirviamo qualcosa come parametro andra a sostiture quel default
