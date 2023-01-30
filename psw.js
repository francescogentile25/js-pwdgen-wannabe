const fristName = prompt('Sapere il tuo nome io voglio giovane padawan ')
console.log (fristName);
const secondName = prompt(' Ora sapere il tuo cognome io voglio giovane padawan')
console.log (secondName);
const color = prompt('Scrivere il colore della tua spada laser tu devi')
console.log (color);
const number = prompt ('Il numero dei tuoi midichlorian è')
// number = parseInt(number)
console.log (number);
const output = fristName + secondName + color + number
console.log (output);

const password = document.getElementById ('psw')
password.innerHTML =  ('La tua password è ' + output )