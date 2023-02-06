const {User} = require('./models/index.js')

// Имена класса всегда начинаются с большой буквы
// Почему поля приватные
// Все поля начинаются с маленькой, так же как и методы
// Оставление консольный логов в коде, отправленном на ревью, является грубейшей небрежностью
// Имя UserSurname избыточно. Это поле и так находится в классе User. Потом как работать с ним? User.UserSurname? Имя не годится



class dataUser{
       id;  // не передаются данные в id. если _id, то все выводится ок
    // name;
    // surname;
    // patronymic;
    // telnumber;
    // login;
    // email;
    // license;


    async getId(i) {
        return User.findByPk(i)
    }

    set id(idd){
    this.id = idd
        console.log(idd)
    }

    // set name(nm){
    //     this.name = nm
    //
    // };
    //
    // set surname(sn){
    //     this.surname = sn
    // };
    //
    // set patronymic(pn){
    //     this.patronymic = pn
    // };
    //
    // set telnumber(tn){
    //     this.telnumber = tn
    // };
    //
    // set login(lg){
    //     this.login = lg
    // };
    //
    // set email(ml){
    //     this.email = ml
    // };
    //
    // set license(lc){
    //     this.license = lc
    // };
    //
    //
    // cr(){
    //   User.create({
    //       UserName: "Jane",
    //       UserSurname: "Doe",
    //       UserPatronymic: "--",
    //       UserTelNumber: "1234567891010",
    //       UserLogin:"LOGINLog",
    //       UserEMail:"Mylo@mylo.com",
    //       UserLicense:"free",
    //   }
    //
    //   )
    // }


};

let datauser = new dataUser();


async function get(){
    const a = await datauser.getId(1)

    datauser.id = a.dataValues.id;
    // datauser.name = a.dataValues.UserName;
    // datauser.surname = a.dataValues.UserSurname;
    // datauser.patronymic = a.dataValues.UserPatronymic;
    // datauser.telnumber = a.dataValues.UserTelNumber;
    // datauser.login = a.dataValues.UserLogin;
    // datauser.email = a.dataValues.UserEMail;
    // datauser.license = a.dataValues.UserLicense;

    // data.cr()
}


get()


// Создать - Аналог операции insert into Users values …
// Удалить - Аналог операции delete from Users where …
// Выбрать по любому из обязательных или необязательных полей - Аналог операции select * from Users where …
// Обновить данные текущего пользователя - Аналог операции update Users set … where …
// Обновить данные пользователя, выбирая по любому из полей

// dataValues: {
//     id: 1,
//         UserName: 'John',
//         UserSurname: 'Doe',
//         UserPatronymic: 'example@example.com',
//         UserTelNumber: '1234567890',
//         UserLogin: 'loginUser',
//         UserEMail: 'loginEmail@mail.com',
//         UserLicense: 'commercial',
//         createdAt: 2023-01-30T15:43:28.000Z,
//         updatedAt: 2023-01-30T15:43:28.000Z
// }