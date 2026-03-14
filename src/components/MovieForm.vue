<template>
  <div class="form-card">
    <h2>Додати фільм</h2>
    <div class="form-row">
      <div class="form-group">
        <label>Назва фільму</label>
        <input
          v-model="form.title"
          type="text"
        >
      </div>
      <div class="form-group">
        <label>Жанр</label>
        <input
          v-model="form.genre"
          type="text"
        >
      </div>
      <div class="form-group">
        <label>Рік</label>
        <input
          v-model="form.year"
          type="text"
        >
      </div>
    </div>
    <button
      class="btn-add"
      @click="submit"
    >
      + Додати до списку
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['add'])

const form = reactive({ title: '', genre: '', year: '' })

function submit() {
  if (!form.title) return
  emit('add', { ...form })
  form.title = ''
  form.genre = ''
  form.year = ''
}
</script>

<style scoped>
.form-card {
  background: #1a1a2e;
  border: 1px solid #2d2d44;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 28px;
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 18px;
  color: #e2e8f0;
}

.form-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.form-group {
  flex: 1;
  min-width: 180px;
}

label {
  display: block;
  font-size: 0.82rem;
  color: #94a3b8;
  margin-bottom: 6px;
}

input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #2d2d44;
  border-radius: 8px;
  font-size: 0.95rem;
  background: #0f0f1a;
  color: #e2e8f0;
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-color: #e50914;
}

.btn-add {
  padding: 11px 28px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-add:hover {
  background: #b20710;
}
</style>
