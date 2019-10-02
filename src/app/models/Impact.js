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
  }

  static associate(models) {
    this.belongsTo(models.Aspect, { foreignKey: 'aspect_id', as: 'aspect' });
  }
}

export default Impact;
