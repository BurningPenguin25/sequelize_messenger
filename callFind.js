const CallFind = require('./classUser').UserData

function findClass(oldtel, newtel){
    let callmeth = new CallFind()
    callmeth.findClass(oldtel, newtel)
}
findClass('2222222222','555')
