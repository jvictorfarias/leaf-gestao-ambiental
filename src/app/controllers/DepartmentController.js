import * as Yup from 'yup';
import Institution from '../models/Institution';
import Department from '../models/Department';
import Environment from '../models/Environment';
import File from '../models/File';

class DepartmentController {
  async index(req, res) {
    const departments = await Department.findAll({
      attributes: ['id', 'name', 'desc'],
      include: [
        {
          model: Institution,
          as: 'institution',
          attributes: ['id', 'name', 'desc', 'initials'],
        },
        {
          model: Environment,
          attributes: ['id', 'name', 'desc'],
          as: 'environments',
        },
        {
          model: File,
          as: 'department_image',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.status(200).json(departments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      desc: Yup.string(),
      institution_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { id, name, desc } = await Department.create(req.body);

    return res.status(200).json({
      id,
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

    const department = await Department.findByPk(id);

    await department.update({ name, desc });

    return res.status(200).json({
      name,
      desc,
    });
  }
}

export default new DepartmentController();
