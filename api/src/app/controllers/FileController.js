import * as Yup from 'yup';
import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const schema = Yup.object().shape({
      originalname: Yup.string().required(),
      filename: Yup.string().required(),
    });

    if (!(await schema.isValid(req.file))) {
      return res.status(400).json({ error: 'Invalid data type' });
    }

    const { url } = await File.create({
      name,
      path,
    });

    return res.status(200).json({
      name,
      path,
      url,
    });
  }
}

export default new FileController();
