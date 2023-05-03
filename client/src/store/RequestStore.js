import {makeAutoObservable} from "mobx";

export default class RequestStore {
    constructor() {
        this._accepted = [
            {id: 1, name: "Бруно", breed: "лабрадор", gender: "мальчик", age: 8, illness: "нет", client_name: "Марина", client_bday: "01.01.2000", client_phone: "89271234567", client_address: "Самара", type: "Взять", date: "05.05.2023", purpose: "ааа"},
            
        ]
        this._approved = [
            {id: 1, name: "Китти", breed: "дворовая", gender: "девочка", age: 5, illness: "нет", client_name: "Саша", client_bday: "11.05.2001", client_phone: "89271234567", client_address: "Самара", type: "Взять", date: "10.10.2010", purpose: "ааа"},
            {id: 2, name: "Флора", breed: "корги", gender: "девочка", age: 2, illness: "нет", client_name: "Варвара", client_bday: "17.08.2003", client_phone: "89271234567", client_address: "Самара", type: "Взять", date: "10.10.2010", purpose: "ааа"},
        ]
        this._rejected = [
            {id: 1, name: "Чуча", breed: "британская", gender: "мальчик", age: 3, illness: "нет", client_name: "Андрей", client_bday: "09.03.2002", client_phone: "89271234567", client_address: "Самара", type: "Взять", date: "10.10.2010", purpose: "ааа"},
        ]
        makeAutoObservable(this)
    }

    setAccepted(requests) {
        this._accepted = requests
    }

    setApproved(requests) {
        this._approved = requests
    }

    setRejected(requests) {
        this._rejected = requests
    }

    get accepted() {
        return this._accepted
    }

    get approved() {
        return this._approved
    }

    get rejected() {
        return this._rejected
    }
}