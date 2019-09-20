module.exports = {
  up: queryInterface => {
    return queryInterface.renameTable('department', 'departments');
  },

  down: queryInterface => {
    return queryInterface.renameTable('departments', 'department');
  },
};
