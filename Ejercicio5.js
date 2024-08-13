//Ejercicio //
function rollDice(numCaras) {
  return Math.floor(Math.random() * numCaras) + 1
}

console.log(rollDice(6)) // Simula una tirada de dado de 6 caras (número aleatorio entre 1 y 6)
console.log(rollDice(20)) // Simula una tirada de dado de 20 caras (número aleatorio entre 1 y 20)
console.log(rollDice(10)) // Simula una tirada de dado de 10 caras (número aleatorio entre 1 y 10)
console.log(rollDice(4)) // Simula una tirada de dado de 4 caras (número aleatorio entre 1 y 4)
