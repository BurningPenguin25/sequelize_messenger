
//const Search = require('./class_text.js').Search // wtf???
//import Search from './class.js'

class Adapter{

    constructor(sear) {
        this.sear = sear
    }

    adaptMeth(){
return this.sear.text //
    }

}

module.exports={
Adapter
}