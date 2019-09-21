import * as Yup from 'yup';
import Institution from '../models/Institution';

class InstitutionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      desc: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { name, desc } = await Institution.create(req.body);

    return res.json({
      name,
      desc,
    });
  }
}

export default new InstitutionController();
