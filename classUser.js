//mysql
const Adapters = require("./MySQL/AdapterMySQL.js").AdapterMySQL
let b = new Adapters()

class UserData{

    updateClass(oldtel, newtel){
        b.Update(oldtel, newtel)
    }

    findClass(oldtel, newtel){
        b.FindOne(oldtel, newtel)
    }

    deleteClass(userName){
        b.delete(userName)
    }

}

module.exports ={
    UserData
}









