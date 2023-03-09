const { Sequelize } = require('sequelize');

class ConnectDB {

   async  connsectionMySQL(){
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

    // async connsectionMongoDB(){
    // для будущего подключения MongoDB ?
    // }

}
let a  = new ConnectDB();
console.log(a.connsectionMySQL())

module.exports={
    ConnectDB
}




