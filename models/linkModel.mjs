import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  originalUrl: {
    type: String,
    required: true
  }
});

export default mongoose.model('link', linkSchema);
