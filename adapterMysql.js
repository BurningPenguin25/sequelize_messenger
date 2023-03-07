const {User} = require('./models/index.js')


class Test{

    choose(){
        User.findAll({
            attributes: ['UserName', 'UserLogin' ]
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    };

}

let a = new Test();
console.log(a.choose())
