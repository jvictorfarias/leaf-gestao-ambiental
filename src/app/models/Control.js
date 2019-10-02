import Sequelize, { Model } from 'sequelize';

class Control extends Model {
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
    this.belongsTo(models.Impact, { foreignKey: 'impact_id', as: 'impact' });
  }
}

export default Control;
