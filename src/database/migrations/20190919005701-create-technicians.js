const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('technicians', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid(),
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qualification: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      function: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => queryInterface.dropTable('technicians'),
};
