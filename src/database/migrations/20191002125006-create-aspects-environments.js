module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aspects_env', {
      aspect_id: {
        type: Sequelize.UUID,
        references: {
          model: 'aspects',
          key: 'id',
        },
      },
      environment_id: {
        type: Sequelize.UUID,
        references: {
          model: 'environments',
          key: 'id',
        },
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('aspects_env');
  },
};
