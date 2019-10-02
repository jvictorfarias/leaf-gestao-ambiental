import * as Yup from 'yup';
import Aspect from '../models/Aspect';
import Environment from '../models/Environment';
import AspectsEnvs from '../models/AspectsEnvs';
import Impact from '../models/Impact';

class AspectController {
  async index(req, res) {
    const aspects = await Aspect.findAll({
      attributes: ['name', 'desc'],
      include: [
        {
          model: Environment,
          as: 'environments',
          attributes: ['name', 'desc'],
          through: {
            model: AspectsEnvs,
            key: 'environment_id',
            attributes: [],
          },
        },
        {
          model: Impact,
          as: 'impacts',
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
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { name, desc } = await Aspect.create(req.body);

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

    const environment = await Aspect.findByPk(id);

    await environment.update({ name, desc });

    return res.status(200).json({
      name,
      desc,
    });
  }
}

export default new AspectController();
