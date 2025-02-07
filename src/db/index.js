import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    ); // Connect to MongoDB
    console.log(
      `/n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection failed: ", error);
    process.exit(1); // Exit process with failure if connection fails to establish with MongoDB
  }
};

export default connectDB;