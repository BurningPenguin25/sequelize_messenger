const  Sequelize  = require('sequelize');

class ConnectMySQL {

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

}

let a  = new ConnectMySQL();
console.log(a.connectionMySQL())





