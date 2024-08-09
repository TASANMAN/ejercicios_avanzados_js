//Ejercicio
function calcularMediaVolumen(users) {
  let sumaVolumen = 0
  let cantidadVolumenes = 0

  // Recorremos el array de usuarios
  for (const user of users) {
    // Recorremos el objeto favoritesSounds del usuario actual
    for (const sound in user.favoritesSounds) {
      // Sumamos el volumen y contamos la cantidad de volúmenes
      sumaVolumen += user.favoritesSounds[sound].volume
      cantidadVolumenes++
    }
  }

  // Calculamos la media del volumen
  const mediaVolumen = sumaVolumen / cantidadVolumenes

  return mediaVolumen
}

// Usamos la función con el array de usuarios
const mediaVolumen = calcularMediaVolumen(users)
console.log(
  `La media del volumen de todos los sonidos favoritos es: ${mediaVolumen}`
)
