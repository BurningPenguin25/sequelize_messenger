const {User} = require('./models/index.js')

class dataUser{

// async userID(i){
//     return await User.findByPk(i)
// }
//
// async userCreate(dt){ // отправляет в базу V
//     return await User.create(dt)
// }
//
// async DeleteString(del){
//     return await User.destroy(del)
// }

// async FindAllStrings(fa){
//     return await User.findAll(fa)
// }

    async UpdateString(upd){
        return User.update(upd)
    }

}

const dataus = new dataUser();

( async ()=> {
    // const get = dataus.userID(6)

    // const post = dataus.userCreate(
    //     {
    //         UserName: 'John3',
    //         UserSurname: 'Doe3',
    //         UserPatronymic: 'example@example.com3',
    //         UserTelNumber: '12345678903',
    //         UserLogin: 'loginUser3',
    //         UserEMail: 'loginEmail@mail.com3',
    //         UserLicense: 'commercial3',
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    // );

    // const des = dataus.DeleteString(1)

//     const findAll = dataus.FindAllStrings({
// where:{
//     UserName: 'Paul',
//     UserEMail: 'John3'
// }
//     })

   const updg = dataus.UpdateString(
       { UserName:"Paul5"},
       {
           where: {
               id: 6
           }
       }
   )

    console.log(updg)

})();



// Создать - Аналог операции insert into Users values / .create V
//
//     Удалить - Аналог операции delete from Users where … / .destroy V
//
//     Выбрать по любому из обязательных или необязательных полей - Аналог операции select * from Users where … / .findAll V
//
//     Обновить данные текущего пользователя - Аналог операции update Users set … where … / .update Х
//
//     Обновить данные пользователя, выбирая по любому из полей