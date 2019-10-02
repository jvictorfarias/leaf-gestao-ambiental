import * as Yup from 'yup';
import AspectEnvs from '../models/AspectsEnvs';

class AspectEnvsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      aspect_id: Yup.string().required(),
      environment_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { aspect_id, environment_id } = await AspectEnvs.create(req.body);

    return res.status(200).json({
      aspect_id,
      environment_id,
    });
  }
}

export default new AspectEnvsController();
