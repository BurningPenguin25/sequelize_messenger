// const Search = require('./
import Search from './class.js'

export default class Adapter{

    constructor(search) {
        this.search = search
    }

    adaptMeth(word){
        return this.search.words(word)
    }

}

let sear = new Search('text', 'word')
let sea = new Adapter(sear)
console.log(sea.adaptMeth())
