<template>
  <div class="movie-list">
    <h2>Список</h2>

    <div
      v-for="movie in movies"
      :key="movie.id"
      class="movie-item"
    >
      <div class="movie-info">
        <span class="title">{{ movie.title }}</span>
        <div class="meta">
          <span
            v-if="movie.genre"
            class="tag"
          >{{ movie.genre }}</span>
          <span
            v-if="movie.year"
            class="tag"
          >{{ movie.year }}</span>
        </div>
      </div>
      <button
        class="btn-remove"
        @click="$emit('remove', movie.id)"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({ movies: Array })
defineEmits(['remove'])
</script>

<style scoped>
.movie-list {
  background: #1a1a2e;
  border: 1px solid #2d2d44;
  border-radius: 16px;
  padding: 24px;
}

h2 {
  font-size: 1.3rem;
  color: #e2e8f0;
  margin-bottom: 20px;
}

.movie-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border: 1px solid #2d2d44;
  border-radius: 10px;
  margin-bottom: 10px;
  background: #0f0f1a;
}

.movie-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.title {
  font-weight: 600;
  font-size: 1rem;
  color: #e2e8f0;
}

.meta {
  display: flex;
  gap: 8px;
}

.tag {
  font-size: 0.78rem;
  color: #ef4444;
  background: #1e2535;
  padding: 2px 10px;
  border-radius: 20px;
}

.btn-remove {
  background: none;
  color: #ef4444;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 4px 8px;
  transition: color 0.2s;
}

.btn-remove:hover {
  color: #ef4444;
}
</style>
