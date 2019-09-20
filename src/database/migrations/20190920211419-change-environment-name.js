module.exports = {
  up: queryInterface => {
    return queryInterface.renameTable('environment', 'environments');
  },

  down: queryInterface => {
    return queryInterface.renameTable('environments', 'environment');
  },
};
