module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn('technician', 'function', 'func');
  },

  down: queryInterface => {
    return queryInterface.renameColumn('technician', 'func', 'function');
  },
};
