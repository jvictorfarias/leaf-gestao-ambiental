import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Technician from '../app/models/Technician';
import Institution from '../app/models/Institution';
import Department from '../app/models/Department';
import Environment from '../app/models/Environment';

const models = [Technician, Institution, Department, Environment];

class Database {
  constructor() {
    this.init();
  }

  // Connection with the database e load models
  init() {
    this.connection = new Sequelize(databaseConfig); // Start connection(init models)
    // Init connection on all models
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
