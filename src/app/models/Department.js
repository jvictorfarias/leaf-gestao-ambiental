import { Model, Sequelize } from 'sequelize';

class Department extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        desc: Sequelize.TEXT,
        institution_id: Sequelize.UUID,
      },
      {
        sequelize,
      }
    );
  }
}

export default Department;
