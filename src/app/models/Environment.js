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

    this.belongsToMany(models.Aspect, {
      through: 'aspects_envs',
      foreignKey: 'environment_id',
      otherKey: 'aspect_id',
      as: 'aspects',
    });

    this.belongsTo(models.File, {
      foreignKey: 'image_id',
      as: 'environment_image',
    });
  }
}

export default Environment;
