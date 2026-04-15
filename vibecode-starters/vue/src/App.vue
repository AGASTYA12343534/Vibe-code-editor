<template>
  <div style="font-family: system-ui, sans-serif; padding: 2rem; text-align: center;">
    <h1>⚡ VibeCode Vue Starter</h1>
    <p>Edit <code>src/App.vue</code> and save to see changes.</p>
    <button @click="count++">Count: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  background-color: #42b883;
  color: white;
  cursor: pointer;
  transition: background-color 0.25s;
}
button:hover {
  background-color: #33a06f;
}
</style>
