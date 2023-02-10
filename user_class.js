const {User} = require('./models/index.js')

let name = 'Paul5'
let surname = 'Doe'
let patronymic = 'example@example.com'
let telnumber = '1234567891010'
let login = 'loginUser'
let email = 'loginEmail@mail.com'
let license = 'commercial'

class  DataUser{
    name;
    surname;
    patronymic;
    telnumber;
    login;
    email;
    license;

     constructor(name, surname, patronymic, telnumber, login, email, license) {
    this.name = name,
    this.surname = surname,
    this.patronymic = patronymic,
    this.telnumber = telnumber,
    this.login = login,
    this.email = email,
    this.license = license;
     };

        insert(){ //Создать - Аналог операции insert into Users values. Добавление новых строк
            User.create({
                UserName: this.name,
                UserSurname: this.surname,
                UserPatronymic: this.patronymic,
                UserTelNumber: this.telnumber,
                UserLogin: this.login,
                UserEMail: this.email,
                UserLicense: this.license,
            })
                .then(()=>{ User.findAll({where: {}}  // вывод массива строк из таблицы после добавления новой строки
                ).then((data)=>{
                    console.log(data)
                }).catch((err)=>{
                    console.log(err)
                })
                })}








        deleting() { // Удалить - Аналог операции delete from Users where V
            User.destroy({
                where: {
                    UserName: this.name
                }
            }).then((data)=>{
                console.log(data)
            }).catch((err)=>{
                console.log(err)
            })
        };

        choose(){ //Выбрать по любому из обязательных или необязательных полей - Аналог операции select * from Users where V[]
            User.findAll({
                attributes: ['UserName', 'UserLogin' ]
            }).then((data)=>{
                console.log(data)
            }).catch((err)=>{
                console.log(err)
            })
        };

        updating(){ // Обновить данные текущего пользователя - Аналог операции update Users set … where  V
            User.update({UserTelNumber: 1 }, {
                where: {
                    UserTelNumber: this.telnumber,
                }
            }).then((data)=>{
                console.log(data)
            }).catch((err)=>{
                console.log(err)
            })
        };

        updatingany(){ // бновить данные пользователя, выбирая по любому из полей
           User.update({ UserSurname: "Doe2" }, {
               where: {
                   UserName: this.name //paul5
               }
           }).then((data)=>{
               console.log(data)
           }).catch((err)=>{
               console.log(err)
           })
        }
    }

let exOne = new DataUser(name, surname, patronymic, telnumber, login, email, license) // добавление, удаление

exOne.insert()
// console.log(exOne.deleting())
//console.log(exOne.choose())
// console.log(exOne.updating())
 //console.log(exOne.updatingany())


//
//
// class dataclass extends dataUser {
//
//     name;
//     telnumber;
//
//     constructor(name,telnumber ) { // перепись старого значения в super this
//         super(name, telnumber );
//         this.name = name;
//         this.telnumber = telnumber
//     }
//
//     updatedata(){
//         User.update({UserName: this.name }, {
//             where: {
//                 UserTelNumber: this.telnumber
//             }
//         }).then((data)=>{
//             console.log(data)
//         }).catch((err)=>{
//             console.log(err)
//         })
//     };
// }
//
// let exTwo = new dataclass('NewJohn', '12345678903' );
// console.log(exTwo)
//
//  exTwo.updatedata()
