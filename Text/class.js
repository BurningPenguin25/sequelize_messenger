
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







let search = new Search("текст", "слова");

