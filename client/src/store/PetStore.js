import {makeAutoObservable} from "mobx";

export default class PetStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Кошка'},
            {id: 2, name: 'Собака'}
        ]
        this._pets = [
            /*{id: 1, type: 'Кошка', photo: `https://mobimg.b-cdn.net/v3/fetch/c3/c3f3c42b3913598bb495d8f1ba046476.jpeg`, name: "Китти", breed: "дворовая", gender: "девочка", age: 5},
            {id: 2, type: 'Кошка', photo: `https://haski-mana.ru/wp-content/uploads/2/2/6/2269eb37cbd9aed6e85822be8f312858.jpeg`, name: "Чуча", breed: "британская", gender: "мальчик", age: 3},
            {id: 3, type: 'Собака', photo: `https://wallbox.ru/wallpapers/main2/201720/vzglad-sobaka-dom.jpg`, name: "Бруно", breed: "лабрадор", gender: "мальчик", age: 8},
            {id: 4, type: 'Собака', photo: `https://images11.domashnyochag.ru/upload/img_cache/1ec/1eccec4975c5e404e19e126bddf8a657_ce_740x493x0x0_cropped_1332x888.jpg`, name: "Флора", breed: "корги", gender: "девочка", age: 2},
            {id: 5, type: 'Кошка', photo: `https://mobimg.b-cdn.net/v3/fetch/c3/c3f3c42b3913598bb495d8f1ba046476.jpeg`, name: "Китти", breed: "дворовая", gender: "девочка", age: 5},
            {id: 6, type: 'Кошка', photo: `https://haski-mana.ru/wp-content/uploads/2/2/6/2269eb37cbd9aed6e85822be8f312858.jpeg`, name: "Чуча", breed: "британская", gender: "мальчик", age: 3},
            {id: 7, type: 'Собака', photo: `https://wallbox.ru/wallpapers/main2/201720/vzglad-sobaka-dom.jpg`, name: "Бруно", breed: "лабрадор", gender: "мальчик", age: 8},
            {id: 8, type: 'Собака', photo: `https://images11.domashnyochag.ru/upload/img_cache/1ec/1eccec4975c5e404e19e126bddf8a657_ce_740x493x0x0_cropped_1332x888.jpg`, name: "Флора", breed: "корги", gender: "девочка", age: 2},*/
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setPets(pets) {
        this._pets = pets
    }

    get types() {
        return this._types
    }

    get pets() {
        return this._pets
    }
}