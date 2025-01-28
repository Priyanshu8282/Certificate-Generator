import Certificate from '../models/CertificateModel.js';
import  express from 'express';
const router = express.Router();


// Route to fetch all certificates
router.get('/', async (req, res) => {
    try {
      const certificates = await Certificate.find();
      res.status(200).json(certificates);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching certificates', error });
    }
  });

  export default router;
