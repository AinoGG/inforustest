import { defineStore } from 'pinia'





export const useCardsStore = defineStore('cards', {
    state: () => {
        return {
            country: 'Russia',
            countryList: [
                { "id": 1, "name": "Afghanistan", "population": 38928346, "land_area": 652230, "density": 59.6, "capital": "Kabul", "currency": "Afghan afghani", "flag": "https://fakeimg.pl/500x300/ff6600" },
                { "id": 2, "name": "Albania", "population": 2877797, "land_area": 28748, "density": 100.1, "capital": "Tirana", "currency": "Albanian lek", "flag": "https://fakeimg.pl/500x300/ff9900" },
                { "id": 3, "name": "Algeria", "population": 43851043, "land_area": 2381741, "density": 18.4, "capital": "Algiers", "currency": "Algerian dinar", "flag": "https://fakeimg.pl/500x300/ffcc00" },
            ]
        }
    },
    // actions: {
    //     async registration(username: string, useremail: string, password: string) {
    //         await $fetch(`${this.baseUrl}users/create/`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: {
    //                 username: username,
    //                 email: useremail,
    //                 password: password
    //             }
    //         }).then((res:any) => {
    //             this.userForm = res.username
    //             alert('registration is successful')
    //         })
    //             .catch(Error => {
    //                 alert(Error)
    //             })
    //     },
    //     async login(username: string, password: string) {
    //         await $fetch(`${this.baseUrl}users/token/`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: {
    //                 username: username,
    //                 password: password
    //             }
    //         }).then((res: any) => {
    //             this.isAuth = res.access
    //             this.auth = true
    //             if (process.browser) {
    //                 localStorage.setItem('token', res.access)
    //                 localStorage.setItem('refresh', res.refresh)
    //                 console.log(this.auth)
    //             }
    //         })
    //             .catch(Error => {
    //                 alert(Error)
    //             })
    //     },
    //     async refreshToken(token: any) {
    //         await $fetch(`${this.baseUrl}users/token/refresh/`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: {
    //                "refresh": token
    //             }
    //         }).then((res:any) => {
    //             this.isAuth = res.access
    //             this.auth = true
    //             if (process.browser) {
    //                 localStorage.setItem('token', res.access)
    //             }
    //         })               
    //     },
    // }
})
