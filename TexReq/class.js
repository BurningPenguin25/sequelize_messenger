 class Search{

    constructor(text, word){
        this.text = text
        this.word = word
    }

    words(){
        return this.text + ': метод text'
    }

    texts(){
        return this.word  + ' метод word'
    }

}

module.exports ={
    Search
}

