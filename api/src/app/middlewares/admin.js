import Technician from '../models/Technician';

export default async (req, res, next) => {
  const { admin } = await Technician.findByPk(req.technicianId);
  if (!admin) {
    return res.status(401).json({ error: 'Not authorized' });
  }
  return next();
};
