import {makeAutoObservable} from "mobx";

export default class RegistrationStore {
    constructor() {
        this._registrations = [
            /*{id: 1, month: "Май", amount: 2},
            {id: 2, month: "Апрель", amount: 26},
            {id: 3, month: "Март", amount: 19},
            {id: 4, month: "Февраль", amount: 22},
            {id: 5, month: "Январь", amount: 11},
            {id: 6, month: "Декабрь", amount: 8},*/
        ]
        makeAutoObservable(this)
    }

    setRegistrations(regs) {
        this._registrations = regs
    }

    get registrations() {
        return this._registrations
    }
}