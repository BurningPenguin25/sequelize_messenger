const { Sequelize } = require('sequelize');

async function coonect(){
    const sequelize = new Sequelize('sequelize_messenger', 'roots', 'BurningPenguin25b', { // root
        host: 'localhost',
        dialect: 'mysql',
    });

    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err)
    }
}

coonect()









