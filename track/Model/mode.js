import mongoose from 'mongoose';

const trackerSchema = new mongoose.Schema({
  Day: {
    type: String,
    required: true,
    unique: true
  },
  Data: {
    type: Map,
    of: {
      time: {
        type: Number,
        required: true
      },
      MemoryUsage: {
        type: Number,
        required: true
      }
    },
    default: {}
  }
});

const Tracker = mongoose.model('Tracker', trackerSchema);
export default Tracker;