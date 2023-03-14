import {stringClass} from "./stringClass.js";

 export class adapterString{

    constructor() {
        this.str = new stringClass() //
    }

     // constructor(str) {
     //     this.str = str
     // }

    string(name, secondname){
        return this.str.stringName(name, secondname) // метод для findByPk и тд?
    }
}
