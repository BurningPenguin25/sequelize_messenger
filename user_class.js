const {User} = require('./models/index.js')

class dataUser{

//  userID(i){
//     return User.findByPk(i)
// }
//
// userCreate(dt){ // отправляет в базу V
//     return User.create(dt)
// }
//
//  DeleteString(del){
//     return User.destroy(del)
// }

//  FindAllStrings(fa){
//     return User.findAll(fa)
// }

    UpdateString(upd){
        return User.update(upd).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }

}

const dataus = new dataUser();

( async ()=> {
    // const get = await dataus.userID(6)
    // console.log(get)

    // const post = await dataus.userCreate(
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

    // const des = await dataus.DeleteString(1)

//     const findAll = await dataus.FindAllStrings({
// where:{
//     UserName: 'Paul',
//     UserEMail: 'John3'
// }
//     })

   const updg = await dataus.UpdateString(
       { UserName:"Paul5"},
       {
           where: {
               id: 2
           }
       }
   )

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