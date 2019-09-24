import File from '../models/File';

class FileController {
  async store(req, res) {
    return res.status(200).json({ ok: true });
  }
}

export default new FileController();
