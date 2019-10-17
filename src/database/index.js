import Sequelize from 'sequelize';
import mongoose from 'mongoose';
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
    this.mongo();
  }

  // Connection with the database e load models
  init() {
    this.connection = new Sequelize(databaseConfig); // Start connection(init models)
    // Init connection on all models
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      `${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      }
    );
  }
}

export default new Database();
