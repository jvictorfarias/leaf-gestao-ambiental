/**
 * @typedef {import('sequelize').Sequelize} Sequelize
 * @typedef {import('sequelize').QueryInterface} QueryInterface
 */

/**
 * @param {QueryInterface} queryInterface
 * @param {Sequelize} Sequelize
 * @return
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('technicians', 'function', {
      type: Sequelize.TEXT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('technicians', 'function', {
      type: Sequelize.STRING,
    });
  },
};
