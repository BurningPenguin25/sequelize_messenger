
const Adapter = require('./adapter_text.js').Adapter

class Search{

    constructor(text){
        this.text = text
    }

    words(){
        return  'мухоморы' + this.text + 'грибы'
    }

}


let sear = new Search(' - ядовитые ')
let adapt = new Adapter(sear)

console.log(adapt.adaptMeth())
console.log(sear.words())

