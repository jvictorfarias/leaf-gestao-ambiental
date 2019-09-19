module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'leaf',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true, // Nomenclatura underscored forced
  },
};
