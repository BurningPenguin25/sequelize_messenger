class Search{

    constructor(text, word){
        //this.text = text
        this.word = word
    }

    words(){
        return this.word
    }

    // texts(){
    //     return this.text
    // }
}




class Adapter{

    constructor(search) {
        this.search = search;
        this.wordword = this.search.words()
        //this.texttext = this.search.texts()
    }

    adaptMeth1(){
        return this.wordword
    }

    // adaptMeth2(){
    //     return this.texttext
    // }

}

let sear = new Search('text', 'word')
let sea = new Adapter(sear)
console.log(sea.adaptMeth1())

