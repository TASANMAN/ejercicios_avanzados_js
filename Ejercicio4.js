//ejercicio 4.1//
function findArrayIndex(array, text) {
  return array.indexOf(text)
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

// Pruebas

console.log(findArrayIndex(mainCharacters, 'Leia')) // 1
console.log(findArrayIndex(mainCharacters, 'Han Solo')) // 2
console.log(findArrayIndex(mainCharacters, 'Obi-Wan')) // 6
console.log(findArrayIndex(mainCharacters, 'Yoda')) // -1 (No está en el array)
console.log(findArrayIndex(mainCharacters, 'Rey')) // 4

//Ejercicio 4.2//

// Función que elimina el elemento en el índice encontrado
function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1) // Elimina 1 elemento en la posición encontrada
  }
  return array
}

// Ejemplos de uso

console.log(removeItem(mainCharacters, 'Leia')) // ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters, 'Han Solo')) // ["Luke", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters, 'Obi-Wan')) // ["Luke", "Chewbacca", "Rey", "Anakin"]
console.log(removeItem(mainCharacters, 'Yoda')) // ["Luke", "Chewbacca", "Rey", "Anakin"] (no cambia nada porque "Yoda" no está en el array)
console.log(removeItem(mainCharacters, 'Rey')) // ["Luke", "Chewbacca", "Anakin"]
// Función que devuelve el índice del texto en el array
function findArrayIndex(array, text) {
  return array.indexOf(text)
}

// Función que elimina el elemento en el índice encontrado
function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1) // Elimina 1 elemento en la posición encontrada
  }
  return array
}

// Ejemplos de uso

console.log(removeItem(mainCharacters, 'Leia')) // ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters, 'Han Solo')) // ["Luke", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters, 'Obi-Wan')) // ["Luke", "Chewbacca", "Rey", "Anakin"]
console.log(removeItem(mainCharacters, 'Yoda')) // ["Luke", "Chewbacca", "Rey", "Anakin"] (no cambia nada porque "Yoda" no está en el array)
console.log(removeItem(mainCharacters, 'Rey')) // ["Luke", "Chewbacca", "Anakin"]
