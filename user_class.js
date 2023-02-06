const {User} = require('./models/index.js')

// Имена класса всегда начинаются с большой буквы
// Почему поля приватные
// Все поля начинаются с маленькой, так же как и методы
// Оставление консольный логов в коде, отправленном на ревью, является грубейшей небрежностью
// Имя UserSurname избыточно. Это поле и так находится в классе User. Потом как работать с ним? User.UserSurname? Имя не годится



class dataUser{

     constructor(name, surname, patronymic, telnumber, login, email, license) {
    this.name = name,
    this.surname = surname,
    this.patronymic = patronymic,
    this.telnumber = telnumber,
    this.login = login,
    this.email = email,
    this.license = license;
     };


        insert(){
    User.create({
        UserName: this.name,
        UserSurname: this.surname,
        UserPatronymic: this.patronymic,
        UserTelNumber: this.telnumber,
        UserLogin: this.login,
        UserEMail: this.email,
        UserLicense: this.license,
    })
        }

    };


let test = new dataUser('a', 'b', 'c', 'd','e', 'f', 'g')

console.log(test, test.insert())

// async function get(){
//     const a = await datauser.getId(1)
// }
//
// get()


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