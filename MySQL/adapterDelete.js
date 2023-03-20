const {User} = require('../models')

class AdapterDelete{

    constructor(data) {
        this.data = data
    }

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

}

module.exports = {
    AdapterDelete
}