import SessionController from '../../src/app/controllers/SessionController';

describe('Authentication', () => {
  it('should authenticate the user and return its JWT token', async () => {
    const req = {
      body: {
        email: 'ivens@gmail.com',
        password: '12345678',
      },
    };

    const session = await SessionController.store(req.body);

    expect(session.email).toBe('ivens@gmail.com');
  });
});
