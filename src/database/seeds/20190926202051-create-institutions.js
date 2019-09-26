module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'institutions',
      [
        {
          name: 'Instituto Federal do Ceará - Campus Quixadá',
          desc:
            'Campus situado na cidade de quixadá, com foco nas áreas de estudo de engenharias e ambientalismo.',
          initials: 'IFCE',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Universidade Federal do Ceará - Campus Quixadá',
          desc:
            'Campus situado na cidade de quixadá, com foco na área de estudo de tecnologia da informação.',
          initials: 'UFC',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Universidade Católica Rainha do Sertão',
          desc:
            'Campus situado na cidade de quixadá, com foco nas áreas de estudo de saúde e tecnologias.',
          initials: 'Unicatólica',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('institutions', null, {});
  },
};
