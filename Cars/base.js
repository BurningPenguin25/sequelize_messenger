// класс

class Engine2 {
    simpleInterface() { console.log('Engine 2.0 - tr-tr-tr') }
}

class EngineV8 {
    complecatedInterface() { console.log('Engine V8! - wroom wroom!') }
}


// адаптер
class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine; //
    }

    simpleInterface() {
        this.engine.complecatedInterface();
    }
}

// ???

class Auto {
    startEngine(engine) {
        engine.simpleInterface()
    }
}


const myCar = new Auto ()
const oldEngine = new Engine2()
myCar.startEngine(oldEngine)



// с адаптером
const myCar = new Auto ()
const engineAdapter = new EngineV8Adapter(new EngineV8())
myCar.startEngine(engineAdapter())





//https://www.youtube.com/watch?v=w6O9Kr41frc&t=223s




///


function Search (text, word) {
    var text = text;
    var word = word;
    this.searchWordInText = function () { // функция возвращает 'текст'
        return text;
    };
    this.getWord = function () {
        return word;
    };
};


function SearchAdapter (adaptee) { //adaptee - функция Search выше
    this.searchWordInText = function () {
        return 'Эти слова ' + adaptee.getWord()
            + ' найдены в тексте ' + adaptee.searchWordInText(); // возвращает
    };
};


var search = new Search("текст", "слова");
var searchAdapter = new SearchAdapter(search);
searchAdapter.searchWordInText();