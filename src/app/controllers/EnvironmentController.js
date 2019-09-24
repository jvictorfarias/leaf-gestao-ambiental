import * as Yup from 'yup';
import Environment from '../models/Environment';

class EnvironmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      desc: Yup.string(),
      department: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { name, desc } = await Environment.create(req.body);

    return res.status(200).json({
      name,
      desc,
    });
  }
}

export default new EnvironmentController();
