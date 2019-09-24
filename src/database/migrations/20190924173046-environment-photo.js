module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('environments', 'photo_id', {
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
    return queryInterface.removeColumn('environments', 'photo_id');
  },
};
