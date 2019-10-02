import Sequelize, { Model } from 'sequelize';

class Aspect extends Model {
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
    this.belongsToMany(models.Environment, {
      through: 'aspects_envs',
      foreignKey: 'aspect_id',
      otherKey: 'environment_id',
      as: 'environments',
    });
  }
}

export default Aspect;
