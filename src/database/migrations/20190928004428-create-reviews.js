module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reviews', {
      technician_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'technicians',
          key: 'id',
        },
      },
      environment_id: {
      type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'environments',
          key: 'id',
        },},
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        });




  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reviews');
  },
};
