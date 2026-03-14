<template>
  <div>
    <header class="app-header">
      <div class="header-top">
        <h1>WatchList</h1>
        <span
          class="env-badge"
          :class="isProduction ? 'prod' : 'dev'"
        >
          {{ appStatus }}
        </span>
      </div>
    </header>

    <main>
      <MovieForm @add="addMovie" />
      <MovieList
        :movies="movies"
        @remove="removeMovie"
        @toggle="toggleWatched"
      />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MovieForm from './components/MovieForm.vue'
import MovieList from './components/MovieList.vue'
import { useMovies } from './composables/useMovies'

const { movies, addMovie, removeMovie, toggleWatched } = useMovies()

const appStatus = import.meta.env.VITE_APP_STATUS
const isProduction = computed(() => appStatus === 'Production Mode')
</script>

<style scoped>
.app-header {
  padding: 32px 0 24px;
}

.header-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 6px;
}

h1 {
  font-size: 2.2rem;
  font-weight: 800;
  color: #e50914;
}

.subtitle {
  color: #64748b;
  font-size: 0.95rem;
}

.env-badge {
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff;
}

.app-footer {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
  margin-top: 28px;
  color: #475569;
  font-size: 0.82rem;
}
</style>
