const {User} = require('./models/index.js')

class ReqDB{

    updating(){ // Обновить данные текущего пользователя - Аналог операции update Users set … where  V
        User.update({UserTelNumber: 1 }, {
            where: {
                UserTelNumber: this.tel,
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };

}



module.exports ={
    ReqDB
}

// почему получает данные из БД при любой ошибке из connectDB. Работает в любом случае, кроме отключения БД? как?
// как соединить 1 и 2 модули



