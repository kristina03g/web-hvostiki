import {makeAutoObservable} from "mobx";

export default class HistoryStore {
    constructor() {
        this._history = [
            /*{id: 1, photo: `https://mobimg.b-cdn.net/v3/fetch/c3/c3f3c42b3913598bb495d8f1ba046476.jpeg`, name: "Китти", breed: "дворовая", gender: "девочка", age: 5, pet_status: "дома", date: "10.10.2010", status: "выполнено"},
            {id: 2, photo: `https://haski-mana.ru/wp-content/uploads/2/2/6/2269eb37cbd9aed6e85822be8f312858.jpeg`, name: "Чуча", breed: "британская", gender: "мальчик", age: 3, pet_status: "в приюте", date: "10.10.2010", status: "выполнено"},
            {id: 3, photo: `https://wallbox.ru/wallpapers/main2/201720/vzglad-sobaka-dom.jpg`, name: "Бруно", breed: "лабрадор", gender: "мальчик", age: 8, pet_status: "в ожидании", date: "05.05.2023", status: "принято"},
            {id: 4, photo: `https://images11.domashnyochag.ru/upload/img_cache/1ec/1eccec4975c5e404e19e126bddf8a657_ce_740x493x0x0_cropped_1332x888.jpg`, name: "Флора", breed: "корги", gender: "девочка", age: 2, pet_status: "дома", date: "10.10.2010", status: "выполнено"},*/
        ]
        makeAutoObservable(this)
    }

    setHistory(history) {
        this._history = history
    }

    get history() {
        return this._history
    }
}