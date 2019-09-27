import * as Yup from 'yup';

import Institution from '../models/Institution';
import Department from '../models/Department';
import File from '../models/File';

class InstitutionController {
  async index(req, res) {
    const institutions = await Institution.findAll({
      attributes: ['id', 'name', 'desc', 'initials'],
      include: [
        {
          model: File,
          as: 'institution_image',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Department,
          attributes: ['id', 'name', 'desc'],
          as: 'departments',
        },
      ],
    });

    return res.status(200).json(institutions);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      desc: Yup.string(),
      initials: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { name, desc, initials } = await Institution.create(req.body);

    return res.json({
      name,
      desc,
      initials,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
      name: Yup.string(),
      desc: Yup.string(),
      initials: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { id, name, desc, initials } = req.body;

    const institution = await Institution.findByPk(id);

    await institution.update({ name, desc, initials });

    return res.status(200).json({
      name,
      desc,
      initials,
    });
  }
}

export default new InstitutionController();
