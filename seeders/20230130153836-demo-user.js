'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      UserName: 'John',
      UserSurname: 'Doe',
      UserPatronymic: 'example@example.com',
      UserTelNumber: '1234567890',
      UserLogin: 'loginUser',
      UserEMail: 'loginEmail@mail.com',
      UserLicense: 'commercial',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};