const {User} = require('../models')

class AdapterMySQL{

    Update(oldtel, newtel){
       User.update({UserTelNumber: newtel }, {
            where: {
                UserTelNumber: oldtel
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };

    delete(userName){
        User.destroy( {
            where: {
                UserName: userName
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };

    FindOne(newtel){
        User.findOne( {
            where: {
                UserTelNumber: newtel
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











