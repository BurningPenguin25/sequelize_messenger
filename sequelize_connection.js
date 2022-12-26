const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('dbase_messenger', 'root', 'BurningPenguin25b', {
    host: 'localhost',
    dialect: 'mysql' ,
});

(async function start() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()


