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

    const {
      name,
      email,
      password,
      qualification,
      func,
      admin,
    } = await Technician.create(req.body);

    return res.status(200).json({
      name,
      email,
      password,
      qualification,
      func,
      admin,
    });
  }
}

export default new TechnicianController();
