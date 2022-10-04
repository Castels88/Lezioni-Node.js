//quello cha bbiamo fatto nel file js lo possiamo fare in ES6
//solo che qui utiliziamo il metodo import come in react
import cliColor from 'cli-color'  
function outputMessage(message){
    console.log(cliColor.yellow(`the message is ${message}`) )
}
outputMessage('hey hey')