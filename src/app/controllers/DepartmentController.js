import * as Yup from 'yup';

import Department from '../models/Department';

class DepartmentController {
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
}

export default new DepartmentController();
