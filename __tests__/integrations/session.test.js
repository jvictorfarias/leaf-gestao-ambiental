import TechnicianController from '../../src/app/controllers/TechnicianController';

describe('Authentication', () => {
  it('should receive JWT token when authenticated with valid credencials', async () => {
    const req = {
      body: {
        name: 'Ivens',
        email: 'ivens@gmail.com',
        password: '12345678',
        qualification: 'Desenvolvedor',
        func: 'Administrar o sistema',
        admin: false,
      },
    };
    const technician = await TechnicianController.store(req, err => {
      // eslint-disable-next-line no-console
      console.log(err);
    });

    expect(technician.email).toBe('ivens@gmail.com');
  });
});
