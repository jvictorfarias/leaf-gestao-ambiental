import * as Yup from 'yup';
import Review from '../schemas/Review';

class ReviewController {
  async store(req, res) {
    const schema = Yup.object().shape({
      environment_id: Yup.string().required(),
      annotations: Yup.string(),
      analysis: Yup.object().shape({
        aspect: Yup.string().required(),
        desc: Yup.string(),
        impact: Yup.object().shape({
          name: Yup.string().required(),
          desc: Yup.string(),
          gravity: Yup.number().required(),
          cause: Yup.object().shape({
            name: Yup.string().required(),
            desc: Yup.string(),
            occurrency: Yup.number().required(),
          }),
          control: Yup.object().shape({
            name: Yup.string().required(),
            desc: Yup.string(),
            actual_control: Yup.number().required(),
          }),
          action: Yup.object().shape({
            name: Yup.string().required(),
            desc: Yup.string(),
            implementation: Yup.number().required(),
          }),
        }),
      }),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    req.body.technician_id = req.technicianId;

    const review = await Review.create(req.body);

    return res.status(200).json(review);
  }

  async index(req, res) {
    const reviews = await Review.find();

    return res.json(reviews);
  }
}

export default new ReviewController();
