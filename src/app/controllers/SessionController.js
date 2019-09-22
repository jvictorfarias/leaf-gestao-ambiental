import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import Technician from '../models/Technician';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Data missing' });
    }

    const { email, password } = req.body;

    const technician = await Technician.findOne({ where: { email } });

    if (!technician) {
      return res.status(401).json({ error: 'User not found' }); // Unauthorized
    }

    if (!(await technician.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    // Email and passwords match

    const { id, name } = technician;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      // Payload, secret and expire date
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
