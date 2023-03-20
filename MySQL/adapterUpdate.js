const {User} = require('../models')

class AdapterUpdate{

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

}

module.exports = {
    AdapterUpdate
}











