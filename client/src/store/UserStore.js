import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAdmin = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAdmin(bool) {
        this._isAdmin = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAdmin() {
        return this._isAdmin
    }

    get user() {
        return this._user
    }
}