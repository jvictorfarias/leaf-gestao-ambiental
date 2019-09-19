const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
