const {User} = require('./models/index.js')
const { Sequelize } = require('sequelize');

class ReqDB{

    choose(){
        User.findAll({
            attributes: ['UserName', 'UserLogin' ]
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };
    // choose(req, res){
    //     User.findAll({
    //         attributes: ['UserName', 'UserLogin' ]
    //     })
    //     res.status(200).send('s');
    // }
}

let a = new ReqDB();
console.log(a.choose())


module.exports ={
    ReqDB
}

// почему получает данные из БД при любой ошибке из connectDB. Работает в любом случае, кроме отключения БД? как?
// как соединить 1 и 2 модули



