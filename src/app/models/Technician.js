import Sequelize, { Model } from 'sequelize';

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
      technician.password_hash = technician.password;
    });
    return this;
  }
}

export default Technician;
