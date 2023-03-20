const {User} = require('../models')

class AdapterFindOne{

    constructor(data) {
        this.data = data
    }

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
    AdapterFindOne
}