import { Model, Sequelize } from 'sequelize';

class Institution extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        desc: Sequelize.TEXT,
        intials: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Department);
    this.belongsTo(models.File, {
      foreignKey: 'image_id',
      as: 'institution_image',
    });
  }
}

export default Institution;
