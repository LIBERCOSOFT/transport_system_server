import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connector = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Database connected to ${connector.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
