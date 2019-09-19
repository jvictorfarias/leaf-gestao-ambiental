import { Model, Sequelize } from 'sequelize';

class Technician extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        qualification: Sequelize.STRING,
        function: Sequelize.TEXT,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default Technician;
