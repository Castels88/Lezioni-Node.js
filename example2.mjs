import * as fs from "node:fs";
//stiamo vedendo come richiamare una callback functin con node
//stiamo dichiarando alla function readfile si leggere in file txt , quindi gli
//diamo come secondo parametro una callback funtion can 2 parametri errori e dati
//ora molto importante e che se mettiamo l errore lo dobbiamo sempre dichiarare senno
//ci darebbe underfined come risultato
//quindi dichiariamo che se l-errore e vero allora mi fai il console log di error
//senno mi fa il console log di data
fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, data) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
//risultato
// [Error: ENOENT: no such file or directory, open 'C:\Users\caste\Desktop\Lezioni Node.js\file-0.txt'] {
//     errno: -4058,
//     code: 'ENOENT',
//     syscall: 'open',
//     path: 'C:\\Users\\caste\\Desktop\\Lezioni Node.js\\file-0.txt'
//   }
//ci dira che il file-0.txt non esiste andiamo a fixare questo errore
//invece di file-0 mettiamo file-1
//risultato
{
  /* <Buffer 54 68 65 73 65 20 61 72 65 20 74 68 65 20 63 6f 6e 74 65 6e 74 73 20 6f 66 20 66 69 6c 65 20 31 2e 0d 0a> */
}
//notiamo che il risultato e in buffer possiamo farlo estrapolarlo all interno della nostra callback come una stringa di testo
//dobbiamo aggiugere {encoding:"utf-8"}
//risultato
// $ node example2.mjs
// These are the contents of file 1.
//-----------------------------------------------------//
// altra cosa che possiamo fare e innestare dentro la nostra call back un altra callback
//per rendere tutto piu chiaro andiamoa modificare i data in modo da renderli piu leggibili inbase al
//file che dovranno leggere
fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, file1Data) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(file1Data);
  fs.readFile("file-2.txt", { encoding: "utf-8" }, function (error, file2Data) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(file2Data);
    fs.readFile(
      "file-3.txt",
      { encoding: "utf-8" },
      function (error, file3Data) {
        if (error) {
          console.error(error);
          return;
        }
        console.log(file3Data);
      }
    );
  });
});
