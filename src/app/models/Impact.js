import Sequelize, { Model } from 'sequelize';

class Impact extends Model {
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
    this.belongsTo(models.Aspect, { foreignKey: 'aspect_id', as: 'aspect' });
    this.hasOne(models.Cause, { foreignKey: 'impact_id', as: 'cause' });
    this.hasOne(models.Control, {
      foreignKey: 'impact_id',
      as: 'control',
    });
    this.hasOne(models.Action, {
      foreignKey: 'impact_id',
      as: 'action',
    });
  }
}

export default Impact;
