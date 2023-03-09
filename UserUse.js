
const {ReqDB} = require("./adapterMysql");

class userData{
    tel

    constructor(tel) {
        this.tel = tel
    }

    updating1(){

    };

}

let b = new userData();

console.log(b.updating1('1234567890'))






// передача в адаптер осуществляется путем: функция(значение)

// что если создать тут копию класса и передавать выведенное тут значение.



