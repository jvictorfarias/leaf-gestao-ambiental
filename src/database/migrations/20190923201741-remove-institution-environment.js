module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('environments', 'institution_id');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('environments', {
      type: Sequelize.UUID,
      references: {
        model: 'institutions',
        key: 'institution_id',
      },
    });
  },
};
