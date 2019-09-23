import Sequelize, { Model } from 'sequelize';

class Files extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Files;
