import { Model } from 'sequelize';

class AspectsEnvs extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aspect, { foreignKey: 'aspect_id', as: 'iaspect' });
    this.belongsTo(models.Environment, {
      foreignKey: 'environment_id',
      as: 'environment',
    });
  }
}

export default AspectsEnvs;
