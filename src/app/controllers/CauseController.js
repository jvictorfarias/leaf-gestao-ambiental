import * as Yup from 'yup';
import Cause from '../models/Cause';
import Impact from '../models/Impact';

class CauseController {
  async index(req, res) {
    const aspects = await Cause.findAll({
      attributes: ['name', 'desc'],
      include: [
        {
          model: Impact,
          foreignKey: 'impact_id',
          as: 'impact',
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
      impact_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { name, desc } = await Cause.create(req.body);

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

    const environment = await Cause.findByPk(id);

    await environment.update({ name, desc });

    return res.status(200).json({
      name,
      desc,
    });
  }
}

export default new CauseController();
