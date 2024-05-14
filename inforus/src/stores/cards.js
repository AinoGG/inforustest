import { defineStore } from 'pinia'
import { getCountries, getCountry, searchCountry } from '../API/index'




export const useCardsStore = defineStore('cards', {
    state: () => {
        return {
            country: 'Russia',
            countryList: [
                { "id": 1, "name": "Afghanistan", "population": 38928346, "land_area": 652230, "density": 59.6, "capital": "Kabul", "currency": "Afghan afghani", "flag": "https://fakeimg.pl/500x300/ff6600" },
                { "id": 2, "name": "Albania", "population": 2877797, "land_area": 28748, "density": 100.1, "capital": "Tirana", "currency": "Albanian lek", "flag": "https://fakeimg.pl/500x300/ff9900" },
                { "id": 3, "name": "Algeria", "population": 43851043, "land_area": 2381741, "density": 18.4, "capital": "Algiers", "currency": "Algerian dinar", "flag": "https://fakeimg.pl/500x300/ffcc00" },
            ],
            chooseCountry: {}
        }
    },
    actions: {
        async fetchCountries() {
            await getCountries().then((res) => {
                this.countryList = res.data
            })
        },
        async fetchCountry(id) {
            await getCountry(id).then((res) => {
                this.chooseCountry = res.data
            })
        },
        async fetchCountrySearch(name) {
            await searchCountry(name).then((res) => {
                this.countryList = res.data
            })
        },
    }
})
