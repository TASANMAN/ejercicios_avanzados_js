//Ejercicio //
function rollDice(numCaras) {
  return Math.floor(Math.random() * numCaras) + 1
}

console.log(rollDice(5)) // Simula una tirada de dado de 5 caras (número aleatorio entre 1 y 5)
console.log(rollDice(8)) // Simula una tirada de dado de 8 caras (número aleatorio entre 1 y 8)
console.log(rollDice(10)) // Simula una tirada de dado de 10 caras (número aleatorio entre 1 y 10)
console.log(rollDice(6)) // Simula una tirada de dado de 6 caras (número aleatorio entre 1 y 6)
