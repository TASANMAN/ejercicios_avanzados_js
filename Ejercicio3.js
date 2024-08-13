//Ejercicio
const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

// Objeto para almacenar el conteo de sonidos favoritos
const soundCounts = {}

// Recorre cada usuario
for (const user of users) {
  // Recorre cada sonido en los favoritos del usuario
  for (const sound in user.favoritesSounds) {
    // Si el sonido ya está en el objeto de conteo, incrementa el contador
    if (soundCounts[sound]) {
      soundCounts[sound]++
    } else {
      // Si el sonido no está en el objeto de conteo, inicialízalo con 1
      soundCounts[sound] = 1
    }
  }
}

// Imprime los resultados
console.log(soundCounts)
