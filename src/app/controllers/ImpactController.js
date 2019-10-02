import * as Yup from 'yup';
import Impact from '../models/Impact';
import Aspect from '../models/Aspect';

class ImpactController {
  async index(req, res) {
    const aspects = await Impact.findAll({
      attributes: ['name', 'desc'],
      include: [
        {
          model: Aspect,
          foreignKey: 'aspect_id',
          as: 'aspect',
          attributes: ['name', 'desc'],
        },
      ],
    });
    return res.status(200).json(aspects);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      desc: Yup.string(),
      aspect_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { name, desc } = await Impact.create(req.body);

    return res.status(200).json({
      name,
      desc,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
      name: Yup.string(),
      desc: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { id, name, desc } = req.body;

    const environment = await Impact.findByPk(id);

    await environment.update({ name, desc });

    return res.status(200).json({
      name,
      desc,
    });
  }
}

export default new ImpactController();
