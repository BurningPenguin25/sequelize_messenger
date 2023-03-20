const {User} = require('../models')
const UserData = require('./classUser').UserData // .UserData wtf?

class ReqDB{

    constructor(userdata) {
        this.userdata = userdata

    }


    test1(oldtel){
        return this.userdata.UserOldTelNumber(oldtel)
    }
    test2(newtel){
        return this.userdata.UserNewTelNumber(newtel)
    }

    updating(newtel, oldtel){ // Обновить данные текущего пользователя - Аналог операции update Users set … where  V
        User.update({UserTelNumber: this.userdata.UserNewTelNumber(newtel) }, {
            where: {
                UserTelNumber: this.userdata.UserOldTelNumber(oldtel)
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };

}


let userdata = new UserData('1234567890', '1111111111111111111')
let requestdb = new ReqDB(userdata)

console.log(requestdb.updating())
console.log(requestdb.test1())

console.log(requestdb.test2())











