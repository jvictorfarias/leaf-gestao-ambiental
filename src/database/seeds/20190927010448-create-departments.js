module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'departments',
      [
        {
          name: 'Bloco I',
          desc: 'Bloco I do Campus UFC - Quixadá.',
          institution_id: '77901a72-d841-42f9-b62d-c67fa3d6c49c',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bloco II',
          desc: 'Bloco II do Campus UFC - Quixadá.',
          institution_id: '77901a72-d841-42f9-b62d-c67fa3d6c49c',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bloco Administrativo',
          desc:
            'Bloco onde se concentra a prefeitura e coordenações de curso do campus UFC.',
          institution_id: '77901a72-d841-42f9-b62d-c67fa3d6c49c',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bloco A',
          desc: 'Bloco A do Campus IFCE - Quixadá',
          institution_id: '77901a72-d841-42f9-b62d-c67fa3d6c49c',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('departments', null, {});
  },
};
