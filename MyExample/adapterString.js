import {stringClass} from "./stringClass.js";

 export class adapterString{

    constructor() {
        this.str = new stringClass()
    }

    string(name, secondname){
        return this.str.stringName(name, secondname) // простой шаблон с переменными
    }
}
