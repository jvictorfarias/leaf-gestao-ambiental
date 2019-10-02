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
  }

  static associate(models) {
    this.belongsToMany(models.Environment, {
      through: 'aspect_env',
      foreignKey: 'aspect_id',
      otherKey: 'environment_id',
      as: 'environments',
    });
  }
}

export default Aspect;
