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
      as: 'institution',
    });
    this.belongsTo(models.File, {
      foreignKey: 'image_id',
      as: 'department_image',
    });
    this.hasMany(models.Environment);
  }
}

export default Department;
