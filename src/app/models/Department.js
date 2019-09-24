import { Model, Sequelize } from 'sequelize';

class Department extends Model {
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
    this.belongsTo(models.Institution, {
      foreignKey: 'institution_id',
      as: 'institution_photo',
    });
    this.hasMany(models.Environment);
  }
}

export default Department;
