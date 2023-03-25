const CallDel = require('./classUser').UserData

function deleteClass(userName){
    let callmeth = new CallDel()
    callmeth.deleteClass(userName)
}
deleteClass('NewJohn')