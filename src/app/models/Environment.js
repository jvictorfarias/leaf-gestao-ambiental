import Sequelize, { Model } from 'sequelize';

class Environment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        desc: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Department, {
      foreignKey: 'department_id',
      as: 'department',
    });

    this.belongsTo(models.File, {
      foreignKey: 'image_id',
      as: 'department_image',
    });
  }
}

export default Environment;
