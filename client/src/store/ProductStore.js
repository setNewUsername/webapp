import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._genres = [
            {id: 1, name: 'RPG'},
            {id: 2, name: 'Action'},

        ]
        this._brand = [
            {id:1, name: 'ActiBlizzard'},
            {id:2, name: 'EA'},
            {id:3, name: 'Valve'},
        ]
        this._games = [
            {id: 1, name: 'WOW', description: 'WOW desc', img: `https://via.placeholder.com/728x90.png?text=Wow`, price: 2000},
            {id: 2, name: 'WOW2', description: 'WOW desc', img: `https://via.placeholder.com/728x90.png?text=wow`, price: 2000},
            {id: 3, name: 'WOW3', description: 'WOW desc', img: `https://via.placeholder.com/728x90.png?text=wow`, price: 2000},
        ]
        makeAutoObservable(this);
    }

    setTypes(genres) {
        this._genres = genres;
    }
    setBrand(brand) {
        this._brand = brand;
    }
    setGames(games) {
        this._games = games;
    }

    get genres() {
        return this._genres;
    }
    get brand() {
        return this._brand;
    }
    get games() {
        return this._games;
    }
}