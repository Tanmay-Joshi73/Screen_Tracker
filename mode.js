import mongoose from 'mongoose';

const trackerSchema = new mongoose.Schema({
  Day: {
    type: Date,
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

export const Tracker = mongoose.model('Tracker', trackerSchema);
