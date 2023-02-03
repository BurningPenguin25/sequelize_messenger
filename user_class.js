const {User} = require('./models/index.js')

class dataUser{
    _id
    _UserName;
    _UserSurname;
    // _UserPatronymic;
    // _UserTelNumber;
    // _UserLogin;
    // _UserEMail;
    // _UserLicense;
    // _createdAt;
    // _updatedAt;

    getId(i) {
        return User.findByPk(i)
    }

   set UserID(id){
        this._id = id
       console.log('id',id)
    };

    set UserName(name){
        this._UserName = name
        console.log('name',name)
    };

    set UserSurname(surname){
        this._UserSurname = surname
        console.log('surname', surname)
    }

};

let data = new dataUser();

async function get(){
    const a = await data.getId(1)

    data.UserID = a.dataValues.id
    data.UserName = a.dataValues.UserName
    data.UserSurname = a.dataValues.UserSurname
    //console.log(a)
}

get()




