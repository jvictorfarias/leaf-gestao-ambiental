import Sequelize, { Model } from 'sequelize';

class Cause extends Model {
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
    this.belongsTo(models.Impact, { foreignKey: 'impact_id', as: 'impact' });
  }
}

export default Cause;
