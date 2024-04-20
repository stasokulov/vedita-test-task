<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Where in the world?</h1>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">

header {
  padding: 30px 16px;
  background-color: var(--color-background-light);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);

  h1 {
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
  }
}

@media (min-width: 600px) {
  header {
    padding: 24px 80px;

    h1 {
      font-size: 24px;
      line-height: 33px;
    }
  }
}
</style>
