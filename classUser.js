//mysql
const Adapters = require("./MySQL/AdapterMySQL.js").AdapterMySQL
let b = new Adapters()

//mongo

class UserData{
    constructor(oldtel, newtel, userName) {
        this.oldtel = oldtel
        this.newtel = newtel
        this.userName = userName
    }

    updateClass(){
        //let b = new Adapters()
        b.Update(this.oldtel, this.newtel)
    }

    findClass(){
        //let b = new Adapters()
        b.FindOne(this.oldtel, this.newtel)
    }

    deleteClass(){
        //let b = new Adapters()
        b.delete(this.userName)
    }

}

let a = new UserData('555', '2222222222', 'Paul5' );
a.updateClass()
a.findClass()
a.deleteClass()









