module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('institutions', 'initials', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('institutions', 'initials');
  },
};
