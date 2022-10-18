//in questa lezione vedremo come usare i database types
//installiamo come prima cosa sqlite3
import sqlite3 from 'sqlite3'
//importiamo sqlite3
//creiamo una costante che dica di creare un database
const db = new sqlite3.Database('./sqlite3-example.db')

//e poi tramite questo comando runniamo una sql query
db.serialize(() => {
  db.run('CREATE TABLE planets (name TEXT)') //questa crea una query che si chiaamera Planets

  const statement = db.prepare('INSERT INTO planets VALUES (?)') //questa crea una query per inserire i dati

  for (let i = 1; i <= 10; i++) {
    //cicliamo la query in modo da inserire per 10 volte i dati
    statement.run(`Planet ${i}`)
  }

  statement.finalize()

  db.each('SELECT rowid AS id, name FROM planets', (error, row) => {
    //quando i dati sono completi ci dovra ritornare un console log con id + nome
    console.log(row.id + ': ' + row.name)
  })
})

db.close()
