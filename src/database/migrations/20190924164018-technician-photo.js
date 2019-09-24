module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('technicians', 'avatar_id', {
      type: Sequelize.UUID,
      references: {
        model: 'files',
        key: 'id',
      },
      allowNull: true,
      defaultValue: null,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('technicians', 'avatar_id');
  },
};
