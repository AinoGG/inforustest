<template>
    <ul class="card-list">
        <li class="card-list__item" v-for="(item, i) in store.countryList" :key="i" :style="{background: `#${item.flag.split('/').pop()}`}">
            <h2 class="card-list__item-title">
                country: {{ item.name }}
            </h2>
            <div class="card-list__item-text">
                capital: {{ item.capital }}
            </div>
        </li>
    </ul>
</template>
<script setup>
import { useCardsStore } from '../stores/cards'

const store = useCardsStore()

</script>

<style lang="scss">
.card-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    &__item {
        width: 100%;
        height: 200px;
        border: 1px solid #ffffff;
        display: flex;
        flex-direction: column;
        padding: 15px;
        border-radius: 8px;
        cursor: pointer;
    }
}
</style>