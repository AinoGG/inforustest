<template>
    <div class="card-list__wrapper">
        <aside class="aside-menu">
            <p>searching navigation</p>
            <input class="input-text" type="text" placeholder="input country name.."
                @input="inputCountry(state.inputValue)" v-model="state.inputValue">

            <div class="custom-slider">
                <p>Population</p>
                <input type="range" min="0" max="1500000000" class="slider" v-model="state.rangeValue"
                    @input="rangeChange" />
                <p>{{ state.rangeValue }}</p>
            </div>
            <div class="custom-slider area">
                <p>Area</p>
                <input type="range" min="0" max="17098242" class="slider" v-model="state.areaValue"
                    @input="rangeChangeArea" />
                <p>{{ state.areaValue }}</p>
            </div>
        </aside>
        <div class="content-box">
            <ul class="card-list">
                <li class="card-list__item" v-for="(item, i) in store.countryList" :key="i"
                    v-show="i < state.showIndex && item.population > state.rangeValue && item.land_area > state.areaValue"
                    :style="{ background: `#${item.flag.split('/').pop()}` }" @click="goToCountry(item.id)">
                    <div class="card-list__item-box">
                        <h2 class="card-list__item-title">
                            {{ item.name }}
                        </h2>
                        <div class="card-list__item-text">
                            <p>
                                capital: {{ item.capital }}
                            </p>
                            <p>
                                currency: {{ item.currency }}
                            </p>
                            <p>
                                population: {{ item.population }}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <Loader v-if="state.loading" />
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';
import { useCardsStore } from '../stores/cards'
import { useRouter } from 'vue-router'
import Loader from '@/components/Loader.vue'

const router = useRouter()
const store = useCardsStore()

const state = reactive({
    inputValue: '',
    showIndex: 20,
    loading: false,
    rangeValue: 0,
    areaValue: 0
})

function createCardList() {
    store.chooseCountry = {}
    store.fetchCountries()
}

function goToCountry(id) {
    router.push(`/${id}`)
    store.fetchCountry(id)
}
function rangeChange() {
    if (state.rangeValue > 0) {
        state.showIndex = store.countryList.length
    } else {
        state.showIndex = 20
    }
}
function rangeChangeArea() {
    if (state.areaValue > 0) {
        state.showIndex = store.countryList.length
    } else {
        state.showIndex = 20
    }
}

function inputCountry(name) {
    if (state.inputValue !== '') {
        store.fetchCountrySearch(name)
    } else {
        store.fetchCountries()
        state.showIndex = 20
        window.scrollTo(0, 0)
    }
}

function scrollView() {
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.querySelector('.card-list').scrollHeight && state.showIndex <= store.countryList.length && !state.loading) {
            state.loading = true
            setTimeout(() => {
                state.showIndex = state.showIndex + 20
                state.loading = false
            }, 1500)

        }
    })
}

onMounted(() => {
    scrollView()
    createCardList()

})

</script>

<style lang="scss">
.card-list__wrapper {
    display: flex;
    gap: 16px;
    width: 100%;
    height: 100%;
}


.aside-menu {
    width: 20vw;
    border-right: 1px solid #333232;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: fixed;
    left: 15px;
    top: 10px;
    height: 97%;

    .input-text {
        width: 90%;
        border-radius: 8px;
        border: none;
        background: #e3e3e3;
        padding: 10px;

        &:focus {
            outline: 1px solid #333232;
        }
    }

    //slider styles
    .custom-slider {
        --trackHeight: 0.5rem;
        --thumbRadius: 1rem;
    }

    /* style the input element with type "range" */
    .custom-slider input[type="range"] {
        position: relative;
        appearance: none;
        /* pointer-events: none; */
        border-radius: 999px;
        z-index: 0;
        width: 90%;
    }

    /* ::before element to replace the slider track */
    .custom-slider input[type="range"]::before {
        content: "";
        position: absolute;
        width: var(--ProgressPercent, 100%);
        height: 100%;
        background: #00865a;
        /* z-index: -1; */
        pointer-events: none;
        border-radius: 999px;
    }

    /* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
    .custom-slider input[type="range"]::-webkit-slider-runnable-track {
        appearance: none;
        background: #00505a;
        height: var(--trackHeight);
        border-radius: 999px;
    }

    /* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
    .custom-slider input[type="range"]::-moz-range-track {
        appearance: none;
        background: #00505a;
        height: var(--trackHeight);
        border-radius: 999px;
    }

    .custom-slider input[type="range"]::-webkit-slider-thumb {
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        width: var(--thumbRadius);
        height: var(--thumbRadius);
        /* margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2); */
        background: #00b7bd;
        border-radius: 999px;
        pointer-events: all;
        appearance: none;
        z-index: 1;
    }

    .custom-slider input[type="range"]::-webkit-slider-thumb {
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        /* ... */
    }


}

.content-box {
    width: 100%;
    margin-left: 20vw;
}

.card-list {
    display: flex;
    gap: 20px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;

    &__item {
        width: 300px;
        height: 220px;

        padding: 15px;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 2px 4px 3px 1px #e3e3e3;
        color: #fff;
        position: relative;
        transition: all .15s ease-in-out;
        &:hover {
            box-shadow: 2px 4px 3px 1px #2e9458;
            &::after {
                background: rgba($color: #000000, $alpha: .2);
            }
        }

        h2 {
            font-size: 20px;
        }

        &-box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            padding: 15px;
        }

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba($color: #000000, $alpha: .3);
            z-index: 1;
            border-radius: 8px;
        }

        &-text {
            font-size: 16px;
        }

    }
}
</style>