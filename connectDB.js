const  Sequelize  = require('sequelize');
const MongoClient = require("mongodb").MongoClient

class ConnectDB {

   async  connectionMySQL(){
        const sequelize = new Sequelize('sequelize_messenger', 'root', 'BurningPenguin25b', {
            host: 'localhost',
            dialect: 'mysql',
        })
            try {
                await sequelize.authenticate();
                console.log('Connection has been established successfully.');
            } catch (error) {
                console.error('Unable to connect to the database:', error);
            }
    }

    async connectionMongoDB(){
        await MongoClient.connect('mongodb://localhost:27017/Movies')
            .then(()=>{
                console.log('mongoDB: Connected succesfuly')
            }).catch(()=>{
                console.log('mongoDB: Connected unsuccesfuly')
            })
    }

}

let a  = new ConnectDB();
console.log(a.connectionMySQL())
console.log(a.connectionMongoDB())

module.exports={
    ConnectDB
}




