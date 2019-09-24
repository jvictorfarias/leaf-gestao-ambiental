import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    return res.status(200).json({
      name,
      path,
    });
  }
}

export default new FileController();
