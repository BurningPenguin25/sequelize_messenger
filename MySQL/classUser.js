const AdapterUpdate = require("./adapterUpdate.js").AdapterUpdate
const AdapterFindOne = require("./adapterFindOne.js").AdapterFindOne
const AdapterDelete = require("./adapterDelete.js").AdapterDelete

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
// let b = new AdapterUpdate(a)
// console.log(b.Update())


// FindData
// let c = new AdapterFindOne(a)
// console.log(c.FindOne())

// DeleteData
let d = new AdapterDelete(a)
console.log(d.delete())






