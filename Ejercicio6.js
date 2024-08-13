//Ejercicio//

function swap(array, index1, index2) {
  // Verifica si los índices están dentro del rango del array
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    throw new Error('Índices fuera del rango del array')
  }

  // Intercambia los elementos en los índices proporcionados
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

  return array
}

// Ejemplo de uso
const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

console.log(swap(fantasticFour, 0, 2))
// ["La mujer invisible", "Mr. Fantástico", "La antorcha humana", "La cosa"]

console.log(swap(fantasticFour, 1, 3))
// ["La mujer invisible", "La cosa", "La antorcha humana", "Mr. Fantástico"]

console.log(swap(fantasticFour, 0, 1))
// ["La cosa", "La mujer invisible", "La antorcha humana", "Mr. Fantástico"]
