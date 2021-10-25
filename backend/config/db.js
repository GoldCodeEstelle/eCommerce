import mongoose from 'mongoose'

const connectDB = async () => {
  let conn;
  if (process.env.NODE_ENV === "development") {
      conn = await mongoose.connect(process.env.MONGO_URI, {});
  } else if (process.env.NODE_ENV === "test") {
      conn = await mongoose.connect(process.env.TEST_MONGO_URI, {});
  } else {
      conn = await mongoose.connect(process.env.MONGO_URI, {});
  }

  console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
  );

  return conn;
};

export default connectDB;