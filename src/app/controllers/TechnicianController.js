import * as Yup from 'yup';

import Technician from '../models/Technician';

class TechnicianController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(8)
        .required(),
      qualification: Yup.string().required(),
      func: Yup.string(),
      admin: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    if (await Technician.findOne({ where: { email: req.body.email } })) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { name, email, qualification, func, admin } = await Technician.create(
      req.body
    );

    return res.status(200).json({
      name,
      email,
      qualification,
      func,
      admin,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(8),
      password: Yup.string()
        .min(8)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      passwordConfirmation: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
      qualification: Yup.string(),
      func: Yup.string(),
      admin: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { email, oldPassword } = req.body;

    const technician = await Technician.findByPk(req.technicianId);

    if (email !== technician.email) {
      if (await Technician.findOne({ where: { email } })) {
        return res
          .status(400)
          .json({ error: 'User with this email already exists' });
      }
    }

    if (oldPassword && !(await technician.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does no match' });
    }

    const { id, name, qualification, func, admin } = await technician.update(
      req.body
    );
    return res.json({
      id,
      name,
      email,
      qualification,
      func,
      admin,
    });
  }
}

export default new TechnicianController();
