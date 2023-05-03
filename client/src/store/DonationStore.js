import {makeAutoObservable} from "mobx";

export default class DonationStore {
    constructor() {
        this._donations = [
            {id: 1, name: "Марина", amount: 1000, date: "10.10.2010"},
            {id: 2, name: "Саша", amount: 20000, date: "15.05.2018"},
            {id: 3, name: "Варвара", amount: 7500, date: "04.01.2023"},
            {id: 4, name: "Андрей", amount: 700, date: "12.11.2020"},
        ]
        makeAutoObservable(this)
    }

    setDonation(donations) {
        this._donations = donations
    }

    get donations() {
        return this._donations
    }
}