const Search = require('./class.js').Search // wtf???
//import Search from './class.js'

class Adapter{

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
