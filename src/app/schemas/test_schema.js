/**
 * MongoDB database modeling
 */
export default {
  review: {
    _id: null,
    technician_id: '123',
    environment_id: '123',
    analisys: {
      aspecto: 'Geração de Resíduos',
      desc: '',
      impactos: [
        {
          nome: 'Produção de lixo',
          desc: '',
          indice_de_gravidade: 8, // index
          causa_do_impacto: {
            nome: 'Muitos alunos usando plástico descartável',
            desc: '',
            ocorrencia_da_causa: 5, // index
          },
          controle_atual: {
            nome: 'Separação por tipo de resíduo',
            desc: '',
            indice_de_detec: 7, // index
          },

          acao_recomendada: {
            nome: 'Mais lixeiras',
            desc: '',
            facilidade_de_impl: 9, // index
          },
        },
        {
          nome: 'Geração de Odores',
          desc: '',
          indice_de_gravidade: 3, // index
          causa_do_impacto: {
            nome: 'Muitos alunos usando plástico descartável',
            desc: '',
            ocorrencia_da_causa: 5, // index
          },
          controle_atual: {
            nome: 'Utilização de sacos especiais',
            desc: '',
            indice_de_detec: 7, // index
          },
          acao_recomendada: {
            nome: 'Mais lixeiras',
            desc: '',
            facilidade_de_impl: 9,
          },
        },
      ],
    },
  },
};
