import mongoose from 'mongoose';

export const connectDB = async (mongoURI) => {
  if (!mongoURI) {
    console.error("❌ MongoDB URI is missing");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      autoIndex: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed");
    console.error(error.message);
    process.exit(1); // Exit app if DB connection fails
  }
};