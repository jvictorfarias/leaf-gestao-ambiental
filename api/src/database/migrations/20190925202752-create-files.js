module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('files', {
          id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
          },

          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },

          path: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
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
    return queryInterface.dropTable('files');
  },
};
