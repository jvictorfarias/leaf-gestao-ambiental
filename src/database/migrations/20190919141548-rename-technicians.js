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
  up: queryInterface => {
    return queryInterface.renameTable('technicians', 'technician');
  },

  down: queryInterface => {
    return queryInterface.renameTable('technician', 'technicians');
  },
};
