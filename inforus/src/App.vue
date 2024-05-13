<template>
  <div class="wrapper">
    <CardList />
  </div>
</template>

<script setup>
import { useCardsStore } from './stores/cards'
import CardList from '@/components/CardList.vue'

const store = useCardsStore()
</script>



<style lang="scss">
body {
  margin: 0;
  font-family: sans-serif;
}

h1,h2,h3{
  margin: 0;
  padding: 0;
}

li,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
}
</style>
