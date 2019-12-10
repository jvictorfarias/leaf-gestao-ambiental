module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('aspects_envs', {
          id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
          },
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
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        });
      });
  },

  down: queryInterface => {
    return queryInterface.dropTable('aspects_envs');
  },
};
