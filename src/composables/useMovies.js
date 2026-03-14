import { ref } from 'vue'

const STORAGE_KEY = 'watchlist-movies'

export function useMovies() {
  const movies = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))

  function saveMovies() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies.value))
  }

  function addMovie(movie) {
    movies.value.push({ ...movie, id: Date.now(), watched: false })
    saveMovies()
  }

  function removeMovie(id) {
    movies.value = movies.value.filter((m) => m.id !== id)
    saveMovies()
  }

  function toggleWatched(id) {
    const movie = movies.value.find((m) => m.id === id)
    if (movie) {
      movie.watched = !movie.watched
      saveMovies()
    }
  }

  return { movies, addMovie, removeMovie, toggleWatched }
}
