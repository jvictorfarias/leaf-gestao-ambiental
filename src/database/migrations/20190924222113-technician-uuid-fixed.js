module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('technicians', {
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
          email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
          },
          password_hash: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          qualification: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          func: {
            type: Sequelize.TEXT,
          },
          admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          avatar_id: {
            type: Sequelize.UUID,
            references: {
              model: 'files',
              key: 'id',
            },
            allowNull: true,
            defaultValue: null,
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        });
      });
  },
  down: queryInterface => {
    return queryInterface.dropTable('technicians');
  },
};
