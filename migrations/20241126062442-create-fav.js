"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Favourite", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      poster: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Favourite");
  },
};
