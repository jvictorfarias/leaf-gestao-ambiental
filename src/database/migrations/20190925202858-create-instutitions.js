module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('institutions', {
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
          desc: {
            type: Sequelize.TEXT,
            allowNull: true,
          },
          initials: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          image_id: {
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
    return queryInterface.dropTable('institutions');
  },
};
