<template>
    <div class="country-box">
        <div class="country-box__header">
            <button @click="goHome">
                < back </button>
                    <div class="country-box__header-title">
                        <h1>{{ store.chooseCountry.name }}</h1>
                        <img :src="store.chooseCountry.flag" alt="flag">
                    </div>
        </div>
        <div class="country-box__info">
            <p>
                capital: {{ store.chooseCountry.capital }}
            </p>
            <p>
                population: {{ store.chooseCountry.population }}
            </p>
            <p>
                land area: {{ store.chooseCountry.land_area }}
            </p>
            <p>
                density: {{ store.chooseCountry.density }}
            </p>
            <p>
                currency: {{ store.chooseCountry.currency }}
            </p>
        </div>
    </div>
</template>
<script setup>
import { useCardsStore } from '../stores/cards'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue';
const router = useRouter()
const route = useRoute()
const store = useCardsStore()
function goHome() {
    router.push('/')
}

onMounted(() => {
    store.fetchCountry(route.params.id)
})
</script>

<style lang="scss">
.country-box {
    width: 100%;
    color: #333232;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #333232;
        gap: 16px;

        &-title {
            display: flex;
            gap: 8px;
            align-items: center;

            h1 {
                font-size: 32px;
            }

            img {
                width: 50px;
                height: 30px;
            }
        }

        button {
            background: transparent;
            border: 1px solid #333232;
            border-radius: 8px;
            width: 100px;
            height: 30px;
            cursor: pointer;
            transition: all .2s ease-in-out;

            &:hover {
                background: #333232;
                color: #fff;
            }
        }
    }

    &__info {
        margin-top: 16px;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>