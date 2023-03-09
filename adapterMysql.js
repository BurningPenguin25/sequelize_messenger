const {User} = require('./models/index.js')

class ReqDB{


    updating(tel){ // Обновить данные текущего пользователя - Аналог операции update Users set … where  V
        User.update({UserTelNumber: 1111111111111111111 }, {
            where: {
                UserTelNumber: tel
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };

    updating(tel){
        console.log(tel)
    }

}

let a = new ReqDB();

module.exports ={
    ReqDB
}

// почему получает данные из БД при любой ошибке из connectDB. Работает в любом случае, кроме отключения БД? как?
// как соединить 1 и 2 модули



