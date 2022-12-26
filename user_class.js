const {User} = require('./models/index') //таблица
// async function getUser(id) {
//     const employee = await User.findByPk(id);
//     return employee;
// }
//
// getUser(1).then((data)=>{
//     console.log(data)
// }).catch((err) =>{
//     console.log(err)
// })

//При определенном коде все данные находятся в переменной User

class UserData {
    UserName;

 get getdata(id){
        return this.UserName.findByPk(id)
}

 set setdata(Name){
     this.UserName = Name
 }
}

 async function Result() {
    const exm = await UserData.getdata(1) // передача и запуск функции
console.log(exm)
}

Result().then((data)=>{
        console.log(data)
 }).catch((err) =>{
     console.log(err)
 })



