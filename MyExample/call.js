import {adapterString} from "./adapterString.js";
import {stringClass} from "./stringClass.js";

const adapterstring = new adapterString();
const exam1 = adapterstring.string('Павел', 'Боднарь')
console.log('adapter:', exam1) // 2 имя

const stringclass = new stringClass();
const exam2 = stringclass.stringName('Павел', 'Боднарь')
console.log('class  :', exam2) // class имя: Павел, фамилия: Боднарь
