let fristName = prompt('Dimmi il tuo nome')
console.log (fristName);
let secondName = prompt('Dimmi il tuo cognome')
console.log (secondName);
let color = prompt('Dimmi il tuo colore preferito')
console.log (color);
let number = prompt ('Dimmi il tuo numero preferito')
console.log (number);
const output = fristName + secondName + color + number
console.log (output);

const password = document.getElementById ('psw')
password.innerHTML =  ('La tua password è ' + output )