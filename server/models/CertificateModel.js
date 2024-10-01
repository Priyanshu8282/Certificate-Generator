import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
  title:{ 
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  signature: {
    type: String,
    required: true
  }
});

const Certificate = mongoose.model('Certificate', CertificateSchema);

export default Certificate;