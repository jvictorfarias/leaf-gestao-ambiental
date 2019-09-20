module.exports = {
  up: queryInterface => {
    return queryInterface.renameTable('institution', 'institutions');
  },

  down: queryInterface => {
    return queryInterface.renameTable('institutions', 'institution');
  },
};
