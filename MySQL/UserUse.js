

class UserData{
    oldtel
    newtel

    constructor(oldtel, newtel) {
        this.oldtel = oldtel
        this.newtel = newtel
    }

    UserOldTelNumber(){
       return this.oldtel
    };

    UserNewTelNumber(){
        return this.newtel
    }

}



module.exports = {
    UserData
}






