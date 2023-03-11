import {adapterString} from "./adapterString.js";
import {stringClass} from "./stringClass.js";

const adapterstring = new adapterString();
const exam1 = adapterstring.string('ИВАН', 'ИВАНОВ')
console.log('adapter:', exam1) // 2 имя

const stringclass = new stringClass();
const exam2 = stringclass.stringName('ОЛЕГ', 'ОЛЕГОВ')
console.log('class  :', exam2) // class имя: Павел, фамилия: Боднарь
