const CallUpd = require('./classUser').UserData

function callUpdate(oldtel, newtel){
    let callmeth = new CallUpd()
    callmeth.updateClass(oldtel, newtel)
}
callUpdate('2222222222','555')

