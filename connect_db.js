const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize_messenger', 'root', 'BurningPenguin25b', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate()
    console.log('Connection has been established successfully.');
} catch (err) {
    console.error('Unable to connect to the database:', err)
}