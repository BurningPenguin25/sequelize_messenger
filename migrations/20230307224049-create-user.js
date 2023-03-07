'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserName: {
        type: Sequelize.STRING
      },
      UserSurname: {
        type: Sequelize.STRING
      },
      UserPatronymic: {
        type: Sequelize.STRING
      },
      UserTelNumber: {
        type: Sequelize.STRING
      },
      UserLogin: {
        type: Sequelize.STRING
      },
      UserEMail: {
        type: Sequelize.STRING
      },
      UserLicense: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};