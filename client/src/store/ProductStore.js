import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._genres = [
            {id: 1, name: 'RPG'},
            {id: 2, name: 'Action'},
            {id: 3, name: 'Sport'},
            {id: 4, name: 'Fight'},

        ]
        this._brands = [
            {id:1, name: 'ActiBlizzard'},
            {id:2, name: 'EA'},
            {id:3, name: 'Valve'},
        ]
        this._games = [
            {id: 1, name: 'МК', description: 'WOW desc', img: `https://www.gamebuy.ru/sites/default/files/imagecache/game_cover/files/mortal-kombat-11-ultimate-ps4_playstation-4_cover.jpg`, price: 2000},
            {id: 2, name: 'WOW2', description: 'WOW desc', img: `https://via.placeholder.com/150x190.png?text=wow`, price: 2000},
            {id: 3, name: 'WOW3', description: 'WOW desc', img: `https://via.placeholder.com/150x190.png?text=wow`, price: 2000},
            {id: 4, name: 'WOW4', description: 'WOW desc', img: `https://via.placeholder.com/150x190.png?text=wow`, price: 2000},
            {id: 5, name: 'WOW5', description: 'WOW desc', img: `https://via.placeholder.com/150x190.png?text=wow`, price: 2000},
        ]
        this._selectedGenre =  {};
        this._selectedBrand =  {};
        makeAutoObservable(this);
    }

    setGenres(genres) {
        this._genres = genres;
    }
    setBrands(brands) {
        this._brands = brands;
    }

    setGames(games) {
        this._games = games;
    }

    setSelectedGenre(genre) {
        this._selectedGenre = genre;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get genres() {
        return this._genres;
    }
    get brands() {
        return this._brands;
    }
    get games() {
        return this._games;
    }
    get selectedGenre() {
        return this._selectedGenre;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}