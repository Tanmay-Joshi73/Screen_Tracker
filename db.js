// db.js
import mongoose from 'mongoose';
const MONGO_URI= 'mongodb://localhost:27017';

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ DB connection error:', err);
  }
};
export default connectToDB;