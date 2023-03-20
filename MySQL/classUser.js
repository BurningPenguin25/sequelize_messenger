//mysql
const Adapters = require("./AdapterMySQL.js").AdapterMySQL


//mongo

class UserData{

    constructor(oldtel, newtel, userName) {
        this.oldtel = oldtel
        this.newtel = newtel
        this.userName = userName
    }

    showData(){
        return this.oldtel + this.newtel
    }

}

let a = new UserData('555', '2222222222', 'Paul5' );

//UpdateData
let b = new Adapters(a)
console.log(b.Update())
console.log(b.FindOne())
//console.log(b.delete())







