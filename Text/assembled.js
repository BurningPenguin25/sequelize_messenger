export class Search{
    constructor(text, word){
        this.text = text
        this.word = word
    }

    word(){
        return this.text
    }

    text(){
        return this.word
    }

}


export class Adapter{
    sear

    constructor(search) {
        this.sear = search // или this.sear = new Search() ?
    }

    adaptMeth(word){
        return this.sear.word(word)
    }

}

let search = new Search("текст", "слово");

let searchAdapter = new Adapter(search);
console.log(searchAdapter.adaptMeth())