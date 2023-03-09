const Req = require("./adapterMysql.js")
const {ReqDB} = require("./adapterMysql");

class userData{
    tel

    constructor(tel) {
        this.tel = tel
    }

    updating(){ // Обновить данные текущего пользователя - Аналог операции update Users set … where  V
      new ReqDB(this.tel)
    };

}

let b = new userData('1234567890');

console.log(b.updating())










