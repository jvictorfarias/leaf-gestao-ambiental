import * as Yup from 'yup';
import Environment from '../models/Environment';
import Department from '../models/Department';
import File from '../models/File';

class EnvironmentController {
  /**
   * Still testing
   * @param {*} req
   * @param {*} res
   */
  async index(req, res) {
    const environments = Environment.findAll({
      attributes: ['name', 'desc'],
      include: [
        {
          model: Department,
          as: 'department',
          attributes: ['name, desc'],
        },
        {
          model: File,
          as: 'image',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.status(200).json(environments);
  }

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

    const environment = await Environment.findByPk(id);

    await environment.update({ name, desc });

    return res.status(200).json({
      name,
      desc,
    });
  }
}

export default new EnvironmentController();
