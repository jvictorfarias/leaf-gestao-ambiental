module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('institution', 'desc', {
      type: Sequelize.TEXT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('institution', 'desc', {
      type: Sequelize.STRING,
    });
  },
};
