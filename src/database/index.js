import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Technician from '../app/models/Technician';
import Institution from '../app/models/Institution';
import Department from '../app/models/Department';
import Environment from '../app/models/Environment';
import Aspect from '../app/models/Aspect';
import Impact from '../app/models/Impact';
import Cause from '../app/models/Cause';
import Control from '../app/models/Control';
import Action from '../app/models/Action';
import File from '../app/models/File';
import AspectsEnvs from '../app/models/AspectsEnvs';

const models = [
  Technician,
  Institution,
  Department,
  Environment,
  Aspect,
  Impact,
  Cause,
  Control,
  Action,
  File,
  AspectsEnvs,
];

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
