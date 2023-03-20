const {User} = require('../models')

class AdapterMySQL{

    constructor(data) {
        this.data = data
    }

    Update(){
       User.update({UserTelNumber: this.data.newtel }, {
            where: {
                UserTelNumber: this.data.oldtel
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };

    delete(){
        User.destroy( {
            where: {
                UserName: this.data.userName
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };

    FindOne(){
        User.findOne( {
            where: {
                UserTelNumber: this.data.newtel
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };

}

module.exports = {
    AdapterMySQL
}











