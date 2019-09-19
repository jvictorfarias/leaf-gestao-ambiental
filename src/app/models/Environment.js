import { Model } from 'sequelize';

class Environment extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
  }
}

export default Environment;
