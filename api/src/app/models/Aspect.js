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
      foreignKey: 'id',
      otherKey: 'environment_id',
      as: 'environments',
    });

    this.hasMany(models.Impact, { as: 'impacts' });
  }
}

export default Aspect;
