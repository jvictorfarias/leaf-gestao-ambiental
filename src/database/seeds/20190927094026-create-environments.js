module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'environments',
      [
        {
          name: 'Sala do PET/TI - Conexões de Saberes',
          desc: 'Sala de bolsistas do PET-TI.',
          department_id: '7e10af54-c261-4248-8340-083f77f0ec6f',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Secretaria Acadêmica',
          desc: 'Secretaria de assuntos acadêmicos e estudantis do campus.',
          department_id: '7e10af54-c261-4248-8340-083f77f0ec6f',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sala I',
          desc: 'Sala de aula I.',
          department_id: '7e10af54-c261-4248-8340-083f77f0ec6f',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sala 200',
          desc: 'Sala de aula 200 do IFCE',
          department_id: '2a7df02b-e624-4ace-b415-13d1cf5bf882',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sala 100',
          desc: 'Sala de aula 200 do IFCE',
          department_id: '2a7df02b-e624-4ace-b415-13d1cf5bf882',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Prefeitura do Campus UFC - Quixadá',
          desc:
            'Prefeitura do campus a qual trata de assuntos administrativos do mesmo.',
          department_id: '364d2738-d42c-4de4-a151-74f2b6851f5f',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('environments', null, {});
  },
};
