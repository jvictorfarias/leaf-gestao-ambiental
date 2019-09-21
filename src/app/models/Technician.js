import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class Technician extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        qualification: Sequelize.STRING,
        func: Sequelize.TEXT,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async technician => {
      if (technician.password) {
        technician.password_hash = await bcrypt.hash(technician.password, 8);
      }
    });

    return this;
  }
}

export default Technician;
